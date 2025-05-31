type Constructor<T = {}> = new (...args: any[]) => T;

const timestamps = (base: Constructor) => {
  return class extends base {
    name: string;
    private readonly _timestamp = Date.now();

    constructor(name: string) {
      super();
      this.name = name;
    }

    get timestamp() {
      return this._timestamp;
    }
  };
};

class Books {
  constructor(public name: string) {}
}

class BooksWithTimestamp extends timestamps(Books) {
  constructor(name: string, public age: number = 18) {
    super(name);
  }

  log() {
    console.log(`${this.name} is ${this.age} years old`);
    console.log(this.timestamp);
  }
}

const book = new BooksWithTimestamp("myself", 19);
book.log();
