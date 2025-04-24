const enum Layer {
  APPLICATION = "application",
  NETWORKING = "networking",
  TRANSPORTATION = "transportation"
}
// since these are readonly/constant members act as literal type

// enum acts as a union or all it's members
const logLayer = (layer: Layer): Layer => {
  return layer
}

logLayer(Layer)
logLayer(Layer.APPLICATION)
