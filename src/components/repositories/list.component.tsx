import React from "react"
import styled from "styled-components"
import RepositoriesItem from "./item/item.component"
import AppFunctionComponent from "../../types/app-function-component.interface"
import IRepository from "../../types/repository-interface"

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -15px;
`

interface Props {
  repositories: IRepository[]
}

const RepositoriesList: AppFunctionComponent<Props> = ({ repositories }) => (
  <ListWrapper data-testid="repositoriesList">
    {repositories.map(repository => (
      <RepositoriesItem key={repository.id} repository={repository} />
    ))}
  </ListWrapper>
)

export default RepositoriesList
