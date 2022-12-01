class Pagination {
  dataCy;

  constructor(dataCy) {
    this.dataCy = dataCy;
  }

  wrapperSelector = () => `[data-cy=pagination-${this.dataCy}]`;

  get wrapper() {
    return cy.get(this.wrapperSelector());
  }

  activePageSelector = () => `${this.wrapperSelector()} [data-cy=active-page]`;

  get activePage() {
    return cy.get(this.activePageSelector());
  }

  pageSelector = (page) => `${this.wrapperSelector()} [data-cy=page-${page}]`;

  page(page) {
    return cy.get(this.pageSelector(page));
  }

  nextSelector = () => `${this.wrapperSelector()} [data-cy=next]`;

  get next() {
    return cy.get(this.nextSelector());
  }

  previousSelector = () => `${this.wrapperSelector()} [data-cy=previous]`;

  get previous() {
    return cy.get(this.previousSelector());
  }
}

export default Pagination;
