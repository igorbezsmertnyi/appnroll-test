import React, { useContext } from "react"
import styled from "styled-components"
import RepositoriesItem from "./item/item.component"
import NoResults from "./no-results.component"
import { RepositoriesContext } from "../../contexts/repositories.context"

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -15px;
`

const RepositoriesList = () => {
  const { list } = useContext(RepositoriesContext)

  return (
    <ListWrapper data-testid="repositoriesList">
      {list.length ? (
        list.map(repository => (
          <RepositoriesItem key={repository.id} repository={repository} />
        ))
      ) : (
        <NoResults />
      )}
    </ListWrapper>
  )
}

export default RepositoriesList
