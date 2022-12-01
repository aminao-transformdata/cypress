function parseJwt(token) {
  // parseJwt will decode the jwt token
  // - accepts token
  // - returns json
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}

const USERS = {
  orgAdmin: {
    userName: Cypress.env('admin_auth_username'),
    password: Cypress.env('admin_auth_password'),
  },
  orgUser: {
    userName: Cypress.env('auth_username'),
    password: Cypress.env('auth_password'),
  },
  orgUserNoMetricOwnership: {
    userName: Cypress.env('auth_user_no_metric_ownership_username'),
    password: Cypress.env('auth_user_no_metric_ownership_password'),
  },
  transformEmployee: {
    userName: Cypress.env('auth_user_transform_employee_username'),
    password: Cypress.env('auth_user_transform_employee_password'),
  },
};

Cypress.Commands.add('loginAsUser', (returnUrl, opts) => {
  const { userType = 'orgUser' } = opts || {};
  // re: https://auth0.com/blog/end-to-end-testing-with-cypress-and-auth0/
  // uses Auth0's sso endpoint to authenticate, then manually sets the token
  // in localstorage.
  const _username = USERS[userType].userName;
  const _password = USERS[userType].password;
  const client_id = Cypress.env('auth_client_id');
  const client_secret = Cypress.env('auth_client_secret');
  const audience = Cypress.env('auth_audience');
  const scope = 'openid profile email offline_access';

  cy.log(`Logging in as ${_username}, type: ${userType}`);

  const options = {
    method: 'POST',
    url: Cypress.env('auth_domain'),
    body: {
      grant_type: 'password',
      username: _username,
      password: _password,
      audience: audience,
      scope: scope,
      client_id: client_id,
      client_secret: client_secret,
    },
  };
  cy.request(options).then(({ body }) => {
    const { access_token, expires_in, id_token } = body;

    const key = `@@auth0spajs@@::${client_id}::${audience}::${scope}`;

    const auth0Cache = {
      body: {
        access_token,
        audience,
        client_id,
        decodedToken: {
          user: parseJwt(id_token),
        },
        expires_in,
        id_token,
        scope,
        token_type: 'Bearer',
      },
      expiresAt: Math.floor(Date.now() / 1000) + expires_in,
    };

    window.localStorage.setItem(key, JSON.stringify(auth0Cache));
    cy.saveLocalStorage();
    if (returnUrl) {
      cy.visit(returnUrl);
    }
  });
});
