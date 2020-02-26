import React, { ChangeEvent, useContext } from "react"
import styled from "styled-components"
import {
  textColor,
  fontFamily,
  backgroundColor,
  otherColor,
  breakpoint,
} from "../../theming/theme-getters"
import { FiltersContext } from "../../contexts/filter.context"

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 16px 0;

  @media (min-width: ${breakpoint("mobile")}) {
    width: 275px;
    margin: 0 16px 0 0;
  }

  select {
    width: 100%;
    height: 38px;
    border: 1px solid ${otherColor("periwinkleGray")};
    border-radius: 2px;
    background: #fff;
    padding: 10px 14px;
    box-shadow: 0 4px 10px 0 ${otherColor("shadow")};
    color: ${textColor("regentGray")};
    font-size: 14px;
    font-weight: 400;
    font-family: ${fontFamily("quicksand")};
    appearance: none;
  }
`

const SelectArrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  bottom: 0;
  right: 16px;
  margin: auto;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid ${backgroundColor("regentGray")};
  pointer-events: none;
`

const FilterSelect = () => {
  const { state, dispatch } = useContext(FiltersContext)

  const handleChanage = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_LANG", payload: e.target.value })
  }

  return (
    <SelectWrapper>
      <select
        data-testid="filterSelect"
        onChange={handleChanage}
        value={state.lang}
      >
        <option value="all" aria-selected>
          All
        </option>
        {state.languages.map(language => (
          <option aria-selected key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      <SelectArrow />
    </SelectWrapper>
  )
}

export default FilterSelect
