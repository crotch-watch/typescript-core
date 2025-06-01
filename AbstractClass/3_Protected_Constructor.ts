type Holiday = {
  date: Date;
  reason: string;
};

// AIM: to not let name be modified outside the class
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
adminDepartment.name = 'IT Department'
// 							^? TS protected property error
