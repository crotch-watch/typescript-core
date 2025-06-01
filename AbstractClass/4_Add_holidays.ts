type Holiday = {
  date: Date;
  reason: string;
};

abstract class Department {
  protected constructor(protected name: string) {}
  protected abstract holidays: Holiday[];

  public addHolidaysToDepartment(holidays: Holiday[]): void {
    if (Array.isArray(holidays)) {
      holidays.forEach((holiday) => this.holidays.push(holiday), this);
    }
  }
}

class ItDepartment extends Department {
  protected holidays = [];

  constructor() {
    super("IT Department");
  }
}

class AdminDepartment extends Department {
  protected holidays = [];

  constructor() {
    super("Admin Department");
  }
}

const adminDepartment = new AdminDepartment();

const adminHolidays: Holiday[] = [
  { date: new Date(2025, 12, 12), reason: "Admin Department Day" },
];

adminDepartment.addHolidaysToDepartment(adminHolidays);
