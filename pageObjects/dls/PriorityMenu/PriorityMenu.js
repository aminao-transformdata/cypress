import BaseChildClass from '../BaseChildClass';

class PriorityMenu extends BaseChildClass {
  menuSelector = `${this.parentSelector} [data-cy=priority-menu]`;

  get menu() {
    return cy.get(this.menuSelector);
  }

  menuItemSelector = (priority) =>
    `[data-cy=priority-menu] [data-cy=priority-menu-item-${priority}]`;

  menuItem(priority) {
    return cy.get(this.menuItemSelector(priority));
  }

  menuValueSelector = (priority) => `[data-cy=priority-chip-${priority}]`;

  menuValue(priority) {
    return cy.get(this.menuValueSelector(priority));
  }

  optSelector = (priority) => `li[data-value=${priority}]`;

  opt = (priority) => cy.get(this.optSelector(priority));
}

export default PriorityMenu;
