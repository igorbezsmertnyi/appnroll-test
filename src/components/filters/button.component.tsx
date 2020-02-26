import React, { useContext } from "react"
import styled from "styled-components"
import { FiltersContext } from "../../contexts/filter.context"
import { fontFamily, otherColor } from "../../theming/theme-getters"

const ButtonWrapper = styled.div`
  button {
    border: 0;
    padding: 11px 16px;
    background: ${otherColor("coffee")};
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    font-family: ${fontFamily("quicksand")};
    cursor: pointer;

    &:hover {
      background: ${otherColor("toryBlue")};
    }
  }
`

const ClearButton = () => {
  const { dispatch } = useContext(FiltersContext)

  const handleClear = () => {
    dispatch({ type: "CLEAR_FILTERS" })
  }

  return (
    <ButtonWrapper onClick={handleClear}>
      <button>Clear filters</button>
    </ButtonWrapper>
  )
}

export default ClearButton
