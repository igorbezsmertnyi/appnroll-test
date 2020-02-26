import IRepositoryContext from "../types/repository-context.interface"

type ActionTypes = "SET_LIST" | "SET_LIST_FETCHING" | "SET_LIST_FETCHED"

interface IAction {
  type: ActionTypes
  payload: any
}

const repositoriesReducer = (
  state: IRepositoryContext,
  action: IAction
): IRepositoryContext => {
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        list: action.payload,
      }
    case "SET_LIST_FETCHING":
      return {
        ...state,
        isFetching: true,
        isFetched: false,
      }
    case "SET_LIST_FETCHED":
      return {
        ...state,
        isFetching: false,
        isFetched: true,
      }
    default:
      return state
  }
}

export default repositoriesReducer
