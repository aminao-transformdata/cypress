class InstallPageSection {
  constructor(props) {
    this.type = props.type;
  }

  wrapperSelector = () => `[data-cy=${this.type}-section]`;

  get wrapper() {
    return cy.get(this.wrapperSelector());
  }

  titleSelector = () => `${this.wrapperSelector()} [data-cy=title]`;

  get title() {
    return cy.get(this.titleSelector());
  }

  statusChipSelector = () => `${this.wrapperSelector()} [data-cy=status-chip]`;

  get statusChip() {
    return cy.get(this.statusChipSelector());
  }
}

export default InstallPageSection;
