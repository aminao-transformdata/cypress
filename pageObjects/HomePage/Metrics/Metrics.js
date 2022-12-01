// import MetricTier from '../../dls/MetricTier';
// import SubscribersList from '../../organisms/Metric/SubscribersList/SubscribersList';

// class Metrics {
//   index;

//   constructor(index) {
//     this.index = index;
//   }

//   wrapperSelector = () => `[data-cy=top-company-metric-${this.index}]`;

//   get wrapper() {
//     return cy.get(this.wrapperSelector());
//   }

//   MetricTier = () => new MetricTier({ parentSelector: this.wrapperSelector() });

//   nameSelector = () => `${this.wrapperSelector()} [data-cy=name]`;

//   get name() {
//     return cy.get(this.nameSelector());
//   }

//   descriptionSelector = () => `${this.wrapperSelector()} [data-cy=description]`;

//   get description() {
//     return cy.get(this.descriptionSelector());
//   }

//   subscribePromptSelector = () =>
//     `${this.wrapperSelector()} [data-cy=subscribe-prompt]`;

//   get subscribePrompt() {
//     return cy.get(this.subscribePromptSelector());
//   }

//   SubscribersList = () =>
//     new SubscribersList({ parentSelector: this.wrapperSelector() });

//   // AvatarList = () => new AvatarList({ parentSelector: this.wrapperSelector() });

//   subscribeCtaSelector = () =>
//     `${this.wrapperSelector()} [data-cy=subscribe-cta]`;

//   get subscribeCta() {
//     return cy.get(this.subscribeCtaSelector());
//   }
// }

// export default Metrics;
