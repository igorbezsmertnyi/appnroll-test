import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../tests/test-render"
import Filter from "./filters.component"

const q: string = ""
const lang: string = ""
const languages: string[] = []
const handleInput = jest.fn()
const handleChanage = jest.fn()
const handleClear = jest.fn()

beforeEach(() => {
  render(
    <Filter
      q={q}
      lang={lang}
      languages={languages}
      handleInput={handleInput}
      handleChanage={handleChanage}
      handleClear={handleClear}
    />
  )
})

describe("Filters", () => {
  it("should render component", () => {
    expect(screen.getByTestId("filters")).toBeInTheDocument()
  })
})
