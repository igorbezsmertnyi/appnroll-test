import React from "react"
import styled from "styled-components"
import FavoriteButton from "../../favorite/favorite-button.component"
import ColoredLine from "./colored-line.components"
import RepositoryTitle from "./title.component"
import RepositoryLink from "./link.component"
import RepositoryDescription from "./description.component"
import FooterWrapper from "./item-footer.component"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import IRepository from "../../../types/repository-interface"
import { breakpoint, otherColor } from "../../../theming/theme-getters"

const ItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 349px;
  margin: 22px 15px;
  border-radius: 5px;
  border: 1px solid ${otherColor("athensGray")};
  overflow: hidden;

  @media (min-width: ${breakpoint("tablet")}) {
    width: calc((100% / 2) - 32px);
  }

  @media (min-width: ${breakpoint("desktop")}) {
    width: calc((100% / 3) - 32px);
  }
`

const ContentWrapper = styled.div`
  padding: 40px 33px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

interface Props {
  repository: IRepository
}

const RepositoriesItem: AppFunctionComponent<Props> = ({ repository }) => (
  <ItemWrapper>
    <ColoredLine background={repository.primaryLanguage.color} />

    <ContentWrapper>
      <Row>
        <RepositoryTitle>{repository.name}</RepositoryTitle>
        <FavoriteButton id={repository.id} />
      </Row>

      <RepositoryLink link={repository.url} />

      <RepositoryDescription>{repository.description}</RepositoryDescription>

      <FooterWrapper info={repository} />
    </ContentWrapper>
  </ItemWrapper>
)

export default RepositoriesItem
