const enum Chmod {
  none = "_none",
  read = "_read",
  write = "_write",
  read_write = read + write,
  // read_write = read | write,
  // same as addition
  delete = "_delete"
}
// great for building up this kind of a structure which may require
// previous members to be incorporated into next members
