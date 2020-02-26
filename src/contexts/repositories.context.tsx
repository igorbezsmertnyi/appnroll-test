import React, { useReducer, createContext } from "react"
import repositoriesReducer from "../reducers/repositoriesReducer"
import IRepositoryContext from "../types/repository-context.interface"

interface IContext extends IRepositoryContext {
  dispatch: any
}

const initialState: IRepositoryContext = {
  list: [],
  isFetching: false,
  isFetched: false,
}

export const RepositoriesContext = createContext(initialState as IContext)

const RepositoriesContextProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [state, dispatch] = useReducer(repositoriesReducer, initialState)

  return (
    <RepositoriesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RepositoriesContext.Provider>
  )
}

export default RepositoriesContextProvider
