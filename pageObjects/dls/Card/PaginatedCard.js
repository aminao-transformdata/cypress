class PaginatedCard {
  constructor(props) {
    this.cardSelector = props;
  }

  annotationsBlockSelector = 'div[id="annotations"]';

  cardSelector = '';

  previousPageBtnSelector = 'button[aria-label="Previous page"]';

  //TODO: update locator
  // nextPageBtnSelector = '[data-cy="next"]';
  nextPageBtnSelector = (firstPage = true) => {
    const basePath =
      '[data-cy="metric-page-annotations"] > :nth-child(2) > .MuiTablePagination-root > .MuiToolbar-root > .MuiTablePagination-actions > [tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root';
    if (!firstPage) {
      return basePath.replace('[tabindex="0"]', '[title="Next page"]');
    }

    return basePath;
  };

  pageCountSelector = '.MuiButton-label';

  get card() {
    return cy.get(this.cardSelector);
  }

  get previousPageBtn() {
    return cy.get(this.previousPageBtnSelector);
  }

  nextPageBtn(firstPage = true) {
    return cy.get(this.nextPageBtnSelector(firstPage));
  }

  get pageCount() {
    return cy.get(this.cardSelector).find(this.pageCountSelector);
  }

  annotationsBlockNextPagination(firstPage = true) {
    return cy
      .get(this.annotationsBlockSelector)
      .find(this.nextPageBtnSelector(firstPage));
  }
}

export default PaginatedCard;
