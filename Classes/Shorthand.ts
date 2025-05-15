class Room {
  // 1. here I'm individually annotating type of props.
  area: number
  walls: number
  height: number

  // 2. accept the params annotating types
  constructor(area: number, walls: number, height: number) {
    // 3. assigning these params
    this.area = area
    this.walls = walls
    this.height = height
  }
}
// 1.2.3. have similar syntax but are being written 3 times
// while declaring a class all of this can be offloaded

// this shorthand does all the above 1. 2. 3.
class House {
  protected constructor(
    public readonly area: number,
    public readonly rooms: number,
    public readonly name: string,
    public readonly owner = "unknown"
  ) {}
}
