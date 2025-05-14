class Vehicle {
  model: string

  constructor(model: string) {
    this.model = model
  }

  // we probably don't want outsiders to turn the car on
  protected startEngine() {
    return `${this.model} engine started.`
  }
}

class Car extends Vehicle {
  constructor(model: string) {
    super(model)
  }

  // now the error would go away now method is public
  // so I'd have to change visibility to protected
  // comment/uncomment this to get error
  // startEngine(): string {
  //   return `${this.model} engine started.`
  // }

  drive() {
    this.startEngine()
    return `${this.model} car engine roars to life!`
  }
}

const myCar = new Car("model")
myCar.model
myCar.drive()
myCar.startEngine()
//      ^? TS throws an error, trying to access protected outside class

class Bike extends Vehicle {
  startCarEngine(value: Car) {
    value.startEngine()
    //      ^? error as startEngine in Bike should only be accessible via vehicle
    // and not via car
  }
  startBikeEngine(value: Bike) {
    value.startEngine()
  }
}
