class ConfirmationModal {
  constructor(props) {
    this.dataCy = props.dataCy;
  }

  wrapperSelector = () => `[data-cy=${this.dataCy}]`;

  get wrapper() {
    return cy.get(this.wrapperSelector());
  }

  confirmBtnSelector = () => `[data-cy=${this.dataCy}-confirm]`;

  get confirmBtn() {
    return cy.get(this.confirmBtnSelector());
  }

  cancelBtnSelector = () => `[data-cy=${this.dataCy}-cancel]`;

  get cancelBtn() {
    return cy.get(this.cancelBtnSelector());
  }
}

export default ConfirmationModal;
