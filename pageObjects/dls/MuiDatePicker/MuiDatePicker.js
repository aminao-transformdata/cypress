class MuiDatePicker {
  backdropSelector = '.MuiPopover-root';

  get backdrop() {
    return cy.get(this.backdropSelector).eq(0);
  }

  wrapperSelector = '.MuiPickersBasePicker-container';

  get wrapper() {
    return cy.get(this.wrapperSelector);
  }

  daySelectedSelector = '.MuiPickersDay-daySelected';

  daySelector = '.MuiPickersDay-day';

  day(day) {
    return cy.get(this.daySelecotor).contains(day);
  }

  monthToggleSelector =
    '.MuiPickersCalendaryHeader-switchHeader .MuiPickersCalendarHeader-iconButton';

  get previousMonthToggle() {
    return cy.get(this.monthToggleSelector).eq(0);
  }

  get nextMonthToggle() {
    return cy.get(this.monthToggleSelector).eq(1);
  }

  viewSelector =
    '.MuiPickersDatePickerRoot-toolbar .MuiPickersTollbarButton-toolbarBtn';

  get yearViewBtn() {
    return cy.get(this.viewSelector).eq(0);
  }

  get monthViewBtn() {
    return cy.get(this.viewSelector).eq(1);
  }

  yearSelector = '.MuiPickersYear-root';

  year(year) {
    return cy.get(this.yearSelector).contains(year);
  }
}

export default new MuiDatePicker();
