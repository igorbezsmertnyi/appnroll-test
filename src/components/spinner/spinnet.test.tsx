import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../tests/test-render"
import Spinner from "./spinner.component"

beforeEach(() => {
  render(<Spinner />)
})

describe("Spinner", () => {
  it("should render component", () => {
    expect(screen.getByTestId("spinner")).toBeInTheDocument()
  })
})
