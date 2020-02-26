import React from "react"
import styled from "styled-components"
import FilterInput from "./input.component"
import FilterSelect from "./select.component"
import ClearButton from "./button.component"
import { breakpoint } from "../../theming/theme-getters"

const FiltersWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 0 18px;

  @media (min-width: ${breakpoint("mobile")}) {
    justify-content: flex-start;
  }
`

const Filters = () => (
  <FiltersWrapper data-testid="filters">
    <FilterInput />
    <FilterSelect />
    <ClearButton />
  </FiltersWrapper>
)

export default Filters
