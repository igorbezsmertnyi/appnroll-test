import React, { useReducer, createContext } from "react"
import filtersReducer from "../reducers/filtersReducer"
import IFilter from "../types/filter.interface"

const initialState: IFilter = {
  q: "",
  lang: "all",
  languages: [],
}

interface IContext {
  state: IFilter
  dispatch: any
}

export const FiltersContext = createContext({ state: initialState } as IContext)

const FiltersContextProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState)

  return (
    <FiltersContext.Provider value={{ state, dispatch }}>
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContextProvider
