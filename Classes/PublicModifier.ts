// Parent Class
class Animal {
  // by default all fields with no access modifier aer public
  public name: string

  constructor(name: string) {
    // is accessible withing the class
    this.name = name
  }

  // public method
  details(): string {
    return `${this.name} is an animal.`
  }
}

// Child Class
class Wolf extends Animal {
  constructor(name: string) {
    super(name)
  }

  public growl(): string {
    // public prop. is accessible in child
    this.details()
    return `${this.name} growls.`
  }
}

const wolf = new Wolf("wolf")
// all properties marked as public are accessible
wolf.details()
wolf.growl()
wolf.name
