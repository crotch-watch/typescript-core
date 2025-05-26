/**
 * classes can be made generic
 * generics act as a mediator layer generic fn. themselves help in tranforming data
 * maybe OOP they'd be similar to map, reduce
 */

class Box<T> {
  constructor(private _value: T) {}

  public get value (): T {
    return this._value
  }

  public set value (new_value: T) {
    this._value = new_value
  }
}

const box_string = new Box("string")
box_string.value = ""
