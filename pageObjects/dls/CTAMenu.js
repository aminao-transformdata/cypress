import BaseChildClass from './BaseChildClass';

class CTAMenu extends BaseChildClass {
  constructor(props) {
    super(props);
    this.menuId = props.menuId;
  }

  dataCy = 'cta-menu';

  menuSelector = () => `[data-cy=${this.menuId}-cta-menu]`;

  get menu() {
    return cy.get(this.menuSelector());
  }

  backdropSelector = () => `[data-cy="${this.menuId}-cta-menu-backdrop"]`;

  get backdrop() {
    return cy.get(this.backdropSelector());
  }

  optionSelector = (option) =>
    `${this.backdropSelector()} [data-cy="${option}"]`;

  option(opt) {
    return cy.get(this.optionSelector(opt));
  }

  close = () => {
    this.backdrop.click();
  };
}

export default CTAMenu;
