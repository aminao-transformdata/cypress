import BaseChildClass from '../BaseChildClass';

class Select extends BaseChildClass {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.wrapperSelector = props.wrapperSelector;
  }

  // The first element inside the MUI Select is the actual click trigger, but there is no clear way to attach a `data-cy` attribute to it.
  get wrapper() {
    return cy.get(
      `${this.parentSelector} ${this.wrapperSelector} [data-cy=select] > :first-child`
    );
  }

  menuSelector = () => `ul[aria-labelledby="select-input-${this.name}"]`;

  get menu() {
    return cy.get(this.menuSelector());
  }

  optionSelector = (opt) => `[data-value="${opt}"]`;

  option = (opt) => cy.get(this.optionSelector(opt));
}

export default Select;
