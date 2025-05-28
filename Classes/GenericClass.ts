type UniqueIdentifier = {
  uuid: number
}

// this class is generic in nature doesn't have much in the name of effects
// generic of any type would be similar to this a mediator not an end product
class Repository<T extends UniqueIdentifier> {
  private items: T[] = []

  add(item: T): T[] {
    this.items.push(item)
    return this.items
  }

  getItems(): T[] {
    return this.items
  }

  getItem(id: number): T | undefined {
    return this.items.find((item) => item.uuid === id)
  }

  deleteItem(id: number): T[] {
    return this.items.filter((item) => item.uuid !== id)
  }
}

// approach 1.
// without annotating the type parameter
// it accepts all objects that have uuid
const petRepo = new Repository()

const cat = {
  uuid: 1,
  name: "Julio",
  age: 10
}

petRepo.add(cat)

// approach 2.
// annotating with type parameter to fix the type of object that can be added
// NOTE: once I see a generic with extends to Keep my types DRY
// I must add the expression after extends or break it into small chunks and incrementally union types
type Drink = UniqueIdentifier & {
  name: string
}

// providing drinks as the type parameter make sure T is Drink
// otherwise T could be any obj. with uuid
const drinkRepo = new Repository<Drink>()

const drink: Drink = {
  uuid: 10,
  name: "Cola"
}

drinkRepo.add(drink)
