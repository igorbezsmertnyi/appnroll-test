import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../tests/test-render"
import Filter from "./filters.component"

beforeEach(() => {
  render(<Filter />)
})

describe("Filters", () => {
  it("should render component", () => {
    expect(screen.getByTestId("filters")).toBeInTheDocument()
  })
})
