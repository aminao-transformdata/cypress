import BaseChildClass from '../../dls/BaseChildClass';

class MiniChart extends BaseChildClass {
  constructor(props) {
    super(props);
    this.dataCy = props.dataCy;
  }

  wrapperSelector = () => `${this.parentSelector} [data-cy=${this.dataCy}]`;

  get wrapper() {
    return cy.get(this.wrapperSelector());
  }

  textSelector = () => `${this.wrapperSelector()} [data-cy=text]`;

  get text() {
    return cy.get(this.textSelector());
  }

  valueSelector = () => `${this.wrapperSelector()} [data-cy=value]`;

  get value() {
    return cy.get(this.valueSelector());
  }
}

export default MiniChart;
