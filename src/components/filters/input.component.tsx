import React, { ChangeEvent, useContext } from "react"
import styled from "styled-components"
import SearchIcon from "../../images/icons/search.svg"
import { FiltersContext } from "../../contexts/filter.context"
import {
  textColor,
  fontFamily,
  otherColor,
  breakpoint,
} from "../../theming/theme-getters"

const ItemWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 16px 0;

  @media (min-width: ${breakpoint("mobile")}) {
    width: 180px;
    margin: 0 16px 0 0;
  }

  input {
    width: calc(100% - 30px);
    border: 1px solid ${otherColor("periwinkleGray")};
    box-shadow: 0 4px 10px 0 ${otherColor("shadow")};
    border-radius: 2px;
    padding: 10px 14px;
    color: ${textColor("regentGray")};
    font-size: 14px;
    font-weight: 400;
    font-family: ${fontFamily("quicksand")};
  }

  svg {
    position: absolute;
    height: 20px;
    top: 0;
    bottom: 0;
    right: 12px;
    margin: auto;
  }
`

const FilterInput = () => {
  const { state, dispatch } = useContext(FiltersContext)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_QUERY", payload: e.target.value })
  }

  return (
    <ItemWrapper>
      <input
        data-testid="filterInput"
        onChange={handleInput}
        value={state.q}
        placeholder="Search"
      />

      <SearchIcon />
    </ItemWrapper>
  )
}

export default FilterInput
