type Loading = {
  state: "loading"
}

type Failed = {
  state: "failed"
  code: number
}

type Success = {
  state: "success"
  response: {
    message: string
    id: number
  }
}

type State = Loading | Failed | Success

// we are discriminating using Literal type
// also type as switch statement exhausts options is also narrowed to remaining states
const logger = (state: State): string => {
  switch (state.state) {
    case "loading":
      return "Wait till loading finishes"

    case "failed":
      return `failed with error: ${state.code}`

    case "success":
      return state.response.message + "@" + state.response.id
  }
}
