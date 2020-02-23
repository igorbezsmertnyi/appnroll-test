import React, { useState } from "react"
import styled from "styled-components"
import ls from "local-storage"
import AddIcon from "../../images/icons/add.svg"
import AddedIcon from "../../images/icons/added.svg"
import { otherColor } from "../../theming/theme-getters"
import AppFunctionComponent from "../../types/app-function-component.interface"

const ButtonWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 0 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${otherColor("coffee")};
  cursor: pointer;

  &:hover {
    background: ${otherColor("toryBlue")};
  }
`

interface Props {
  id: string
}

const FavoriteButton: AppFunctionComponent<Props> = ({ id }) => {
  let keys: string[] = ls.get("GH_FAVORITES") || []
  let index: number = keys.indexOf(id)
  const [isFavorite, setState] = useState(index >= 0)

  const toggleFavorite = () => {
    keys = ls.get("GH_FAVORITES") || []
    index = keys.indexOf(id)

    if (index >= 0) {
      keys.splice(index, 1)
    } else {
      keys.push(id)
    }

    setState(!isFavorite)
    ls.set("GH_FAVORITES", keys)
  }

  return (
    <ButtonWrapper role="button" onClick={toggleFavorite}>
      {isFavorite ? <AddedIcon /> : <AddIcon />}
    </ButtonWrapper>
  )
}

export default FavoriteButton
