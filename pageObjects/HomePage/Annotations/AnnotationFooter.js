import BaseChildClass from '../../dls/BaseChildClass';
import FooterMetricAnnotationItem from './FooterMetricAnnotationItem';

class AnnotationFooter extends BaseChildClass {
  expandToggleSelector = () =>
    `${this.parentSelector} [data-cy="expand-toggle"]`;

  get expandToggle() {
    return cy.get(this.expandToggleSelector());
  }

  headerSelector = () => `${this.parentSelector} [data-cy=more-details-header]`;

  get header() {
    return cy.get(this.headerSelector());
  }

  metricAffectedSelector = (metricName) =>
    `${this.headerSelector()} [data-cy=metric-affected-${metricName}] a`;

  metricAffected(metricName) {
    return cy.get(this.metricAffectedSelector(metricName));
  }

  expectedImpactSelector = () =>
    `${this.parentSelector} [data-cy=expected-impact]`;

  get expectedImpact() {
    return cy.get(this.expectedImpactSelector());
  }

  FooterMetricAnnotationItem = (itemId) =>
    new FooterMetricAnnotationItem({
      parentSelector: this.parentSelector,
      itemId,
    });

  // metricAnnotationDetailsItemSelector = (itemId) =>
  //   `${this.parentSelector} [data-cy=metric-annotation-details-item-${itemId}]`;
  //
  // metricAnnotationDetailsItem(itemId) {
  //   return cy.get(this.metricAnnotationDetailsItemSelector(itemId));
  // }
}

export default AnnotationFooter;
