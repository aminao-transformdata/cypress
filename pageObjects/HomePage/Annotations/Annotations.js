import AnnotationFooter from './AnnotationFooter';

class Annotations {
  index;

  constructor(index) {
    this.index = index;
  }

  wrapperSelector = () => `[data-cy=annotation-item-${this.index}]`;

  get wrapper() {
    return cy.get(this.wrapperSelector());
  }

  Footer = () =>
    new AnnotationFooter({ parentSelector: this.wrapperSelector() });

  titleSelector = () => `${this.wrapperSelector()} [data-cy=title]`;

  get title() {
    return cy.get(`${this.titleSelector()}`);
  }

  // TODO: update selector once it's fixed
  // textSelector = () => `${this.wrapperSelector()} :nth-child(3) > span`;
  textSelector = () => `${this.wrapperSelector()} [data-cy=text]`;

  get text() {
    return cy.get(`${this.textSelector()}`);
  }

  authorNameSelector = () => `${this.wrapperSelector()} [data-cy=author-name]`;

  get authorName() {
    return cy.get(`${this.authorNameSelector()}`);
  }

  dateRangeSelector = () => `${this.wrapperSelector()} [data-cy=date-range]`;

  get dateRange() {
    return cy.get(`${this.dateRangeSelector()}`);
  }

  prioritySelector = (priority) =>
    `${this.wrapperSelector()} [data-cy=priority-chip-${priority}]`;

  priority(priority) {
    return cy.get(`${this.prioritySelector(priority)}`);
  }
}

export default Annotations;
