import BaseChildClass from '../../dls/BaseChildClass';
import MetricPercentChange from './MetricPercentChange';

class ValueChangeKpi extends BaseChildClass {
  wrapperSelector = () => `${this.parentSelector} [data-cy=value-change-kpi]`;

  metricNameSelector = () => `${this.wrapperSelector()} [data-cy=metric-name]`;

  get metricName() {
    return cy.get(this.metricNameSelector());
  }

  dateRangeSelector = () => `${this.wrapperSelector()} [data-cy=date-range]`;

  get dateRange() {
    return cy.get(this.dateRangeSelector());
  }

  MetricPercentChange = () =>
    new MetricPercentChange({ parentSelector: this.wrapperSelector() });
}

export default ValueChangeKpi;
