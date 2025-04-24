const Roles =  {
  ADMIN: "admin",
  USER: "user",
  LEADER: "leader"
} as const

// this can serve as a enum though if I want use this
// it'd be better to freeze this just in case

Object.freeze(Roles)

Roles.ADMIN = 'user'
delete Roles.ADMIN

Reflect.deleteProperty(Roles, "ADMIN")

const enum Colors {
  Red = "red",
  Green = "green",
  Blue = "blue"
}
