type BaseProps = {
  type: "round" | "outline" | "ghost"
  size: "sm" | "md" | "lg"
}

type Props = {
  disabled: boolean
  onclick?: Function
}

type ButtonProps = BaseProps & Props

// can be used as an non-extendable interface
const button:ButtonProps = {
  type: "outline",
  size: "md",
  disabled: false,
  onclick: console.log
}