import React, { ChangeEvent } from "react"
import styled from "styled-components"
import FilterInput from "./input.component"
import FilterSelect from "./select.component"
import ClearButton from "./button.component"
import { breakpoint } from "../../theming/theme-getters"
import AppFunctionComponent from "../../types/app-function-component.interface"

interface Props {
  q: string
  lang: string
  languages: string[]
  handleInput(event: ChangeEvent<HTMLInputElement>): void
  handleChanage(event: ChangeEvent<HTMLSelectElement>): void
  handleClear(): void
}

const FiltersWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 0 18px;

  @media (min-width: ${breakpoint("mobile")}) {
    justify-content: flex-start;
  }
`

const Filters: AppFunctionComponent<Props> = ({
  q,
  lang,
  handleInput,
  handleChanage,
  handleClear,
  languages,
}) => (
  <FiltersWrapper data-testid="filters">
    <FilterInput q={q} handleInput={handleInput} />

    <FilterSelect
      lang={lang}
      languages={languages}
      handleChanage={handleChanage}
    />

    <ClearButton handleClear={handleClear} />
  </FiltersWrapper>
)

export default Filters
