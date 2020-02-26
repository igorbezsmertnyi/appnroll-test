import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../tests/test-render"
import FilterInput from "./input.component"

beforeEach(() => {
  render(<FilterInput />)
})

describe("Filter input", () => {
  it("should render component", () => {
    expect(screen.getByTestId("filterInput")).toBeInTheDocument()
  })
})
