import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../tests/test-render"
import FilterSelect from "./select.component"

let wrapper: any

beforeEach(() => {
  wrapper = render(<FilterSelect />)
})

describe("Filter select", () => {
  it("should render component", () => {
    expect(screen.getByTestId("filterSelect")).toBeInTheDocument()
  })

  describe("onBlur", () => {
    it("should display value `all` first", () => {
      expect(wrapper.getByText("All")).toBeInTheDocument()
    })
  })
})
