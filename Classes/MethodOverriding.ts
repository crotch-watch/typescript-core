class Human {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public speak(sentence?: string): string {
    return `Hi, I'm ${this.name} I'd like to say ${sentence || "Hi"}`
  }
}

class Adult extends Human {
  job: string
  married: boolean

  constructor(name: string, age: number, job: string, married: boolean) {
    super(name, age)
    this.job = job
    this.married = married
  }

  // methods should have same signature as that of parent class
  // otherwise TS will throw error
  public speak(sentence?: string): string {
    return `Hello I'm ${this.name}, now I've grown up, ${sentence || "thanks"}`
  }
}
