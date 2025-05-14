// NOTE: private members aren't accessible outside class.
class Private {
  private value!: string

  public method(param: Private) {
    param.value = "private"
  }
}

// cross instance private access
const p1 = new Private()
const p2 = new Private()
p1.method(p2)
