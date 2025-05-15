class School {
  // if I wish to validate inputs from the user
  // ex. rooms can't be negative
  // either this validation can be present in the constructor
  // or setter can do it.
  private _rooms?: number

  constructor(public name: string) {}

  // but now this has to be added after instantiating the class itself
  public set rooms(rooms: number) {
    if (rooms < 0) {
      throw new Error(`requires non negative number provided ${rooms}.`)
    }
    this._rooms = rooms
  }
}

const school = new School('mySchool')
