class School {
  // if I wish to validate inputs from the user
  // ex. rooms can't be negative
  // either this validation can be present in the constructor
  // or setter can do it.
  private _rooms?: number
  public _chambers?: number

  constructor(public name: string) {}

  // but now this has to be added after instantiating the class itself
  public set rooms(rooms: number) {
    if (rooms < 0) {
      throw new Error(`requires non negative number provided ${rooms}.`)
    }
    this._rooms = rooms
  }

  // return type is already inferred based on set
  // used with set
  public get rooms () {
    if(this._rooms) return this._rooms
    throw new Error('property rooms has not been set.')
  }

  // accessors can be separately used without mutators
  public get chambers() {
    return this._chambers
  }
}

const school = new School('mySchool')
school.rooms = 12
console.log(school.rooms)
school.chambers

