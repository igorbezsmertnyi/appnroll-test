import React, { ChangeEvent } from "react"
import styled from "styled-components"
import SearchIcon from "../../images/icons/search.svg"
import {
  textColor,
  fontFamily,
  otherColor,
  breakpoint,
} from "../../theming/theme-getters"
import AppFunctionComponent from "../../types/app-function-component.interface"

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

interface Props {
  q: string
  handleInput(event: ChangeEvent<HTMLInputElement>): void
}

const FilterInput: AppFunctionComponent<Props> = ({ q, handleInput }) => (
  <ItemWrapper>
    <input
      data-testid="filterInput"
      onChange={handleInput}
      defaultValue={q}
      placeholder="Search"
    />

    <SearchIcon />
  </ItemWrapper>
)

export default FilterInput
