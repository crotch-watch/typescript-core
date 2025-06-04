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

  public printHolidays(): void {
    const { holidays } = this;

    if (!this.holidays.length) console.info("No holidays found");

    console.info("List of holidays:");

    holidays.forEach(({ date, reason }, index) =>
      console.info(index + 1, ". ", "REASON:", reason, "\nDATE:", date)
    );
  }
}

class ItDepartment extends Department {
  protected holidays = [];

  constructor() {
    super("IT Department");
  }

  public printHolidays(): void {
    const { holidays } = this;

    if (!this.holidays.length) console.info("No holidays found");

    console.info("List of holidays for ", this.name);

    holidays.forEach(({ date, reason }, index) =>
      console.info(index + 1, "REASON:", reason, "\nDATE", date)
    );
  }
}

class AdminDepartment extends Department {
  protected holidays = [];

  constructor() {
    super("Admin Department");
  }

  public printHolidays(): void {
    const { holidays } = this;

    if (!this.holidays.length) console.info("No holidays provided");

    console.info("List of holidays for ", this.name);

    holidays.forEach(({ date, reason }, index) =>
      console.info(index + 1, "REASON:", reason, "\nDATE", date)
    );
  }
}

const adminDepartment = new AdminDepartment();

const adminHolidays: Holiday[] = [
  { date: new Date(2025, 12, 12), reason: "Admin Department Day" },
];

adminDepartment.addHolidaysToDepartment(adminHolidays);
