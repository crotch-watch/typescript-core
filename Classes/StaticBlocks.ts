class Poster {
  public static image = "superhero"

  static print() {
    console.log("POSTER: ", Poster.image)
  }

  /**
   * can be used to init some values when class is created
   */
  static {
    Poster.image = "actor"
  }

  /**
   * 1. only once exec. after class is declared
   * 2. these blocks aren't async
   */
  static {
    void fetch("https://jsonplaceholder.typicode.com/").then(console.log)
    console.log("FIRST")
  }
}
