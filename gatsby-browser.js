/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import RepositoriesContextProvider from "./src/contexts/repositories.context"
import FiltersContextProvider from "./src/contexts/filter.context"

export const wrapRootElement = ({ element }) => (
  <RepositoriesContextProvider>
    <FiltersContextProvider>{element}</FiltersContextProvider>
  </RepositoriesContextProvider>
)
