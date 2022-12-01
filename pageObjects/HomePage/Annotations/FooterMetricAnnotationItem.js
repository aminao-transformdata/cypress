import BaseChildClass from '../../dls/BaseChildClass';
import Kpi from './Kpi';
import MiniChart from './MiniChart';
import ValueChangeKpi from './ValueChangeKpi';

class FooterMetricAnnotationItem extends BaseChildClass {
  constructor(props) {
    super(props);
    this.itemId = props.itemId;
  }

  wrapperSelector = () =>
    `${this.parentSelector} [data-cy=metric-annotation-details-item-${this.itemId}]`;

  get wrapper() {
    return cy.get(this.wrapperSelector());
  }

  ValueChangeKpi = () =>
    new ValueChangeKpi({
      parentSelector: this.wrapperSelector(),
    });

  MiniChart = () => new MiniChart({ parentSelector: this.wrapperSelector() });

  DateStartKpi = () =>
    new Kpi({
      parentSelector: this.wrapperSelector(),
      dataCy: 'start-value',
    });

  DateEndKpi = () =>
    new Kpi({
      parentSelector: this.wrapperSelector(),
      dataCy: 'end-value',
    });

  DimensionsAffectedCountKpi = () =>
    new Kpi({
      parentSelector: this.wrapperSelector(),
      dataCy: 'dimenions-affected-count',
    });
}

export default FooterMetricAnnotationItem;
