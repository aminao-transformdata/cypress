import BaseChildClass from '../BaseChildClass';

class AvatarList extends BaseChildClass {
  wrapperSelector = () => `${this.parentSelector} [data-cy=avatar-list]`;

  get wrapper() {
    return cy.get(this.wrapperSelector());
  }

  avatarSelector = (userId) =>
    `${this.wrapperSelector()} [data-cy=avatar-${userId}]`;

  avatar(userId) {
    return cy.get(this.avatarSelector(userId));
  }

  extraCountSelector = () => `${this.wrapperSelector} [data-cy=more-users]`;

  get extraCount() {
    return cy.get(this.extraCountSelector());
  }
}

export default AvatarList;
