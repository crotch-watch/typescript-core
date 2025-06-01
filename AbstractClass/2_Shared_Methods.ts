type Holiday = {
  date: Date;
  reason: string;
};

abstract class Department {
  protected constructor(protected name: string) {}
  protected abstract holidays: Holiday[];

  // even though the holidays field is abstract TS knows it'd be added definitely
  // as it's required not optional therefore any class which extends this
  // would've access to this.holidays array
  // NOTE: this method isn't abstract and has an implementation
  public addHolidaysToDepartment(holidays: Holiday[]): void {
    if (Array.isArray(holidays)) {
      holidays.forEach((holiday) => this.holidays.push(holiday), this);
    }
  }
}

class ItDepartment extends Department {
  protected holidays = [];
}

class AdminDepartment extends Department {
  protected holidays = [];
}
