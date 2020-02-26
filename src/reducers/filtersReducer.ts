import IFilter from "../types/filter.interface"

type ActionTypes = "SET_QUERY" | "SET_LANG" | "SET_LANGUAGES" | "CLEAR_FILTERS"

interface IAction {
  type: ActionTypes
  payload: any
}

const filtersReducer = (state: IFilter, action: IAction): IFilter => {
  switch (action.type) {
    case "SET_QUERY":
      return {
        ...state,
        q: action.payload,
      }
    case "SET_LANG":
      return {
        ...state,
        lang: action.payload,
      }
    case "SET_LANGUAGES":
      return {
        ...state,
        languages: action.payload,
      }
    case "CLEAR_FILTERS":
      return {
        ...state,
        q: "",
        lang: "all",
      }
    default:
      return state
  }
}

export default filtersReducer
