import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen, fireEvent } from "@testing-library/react"
import { render } from "../../tests/test-render"
import FilterInput from "./input.component"

let wrapper: any
let input: HTMLInputElement
const q: string = ""
const spy = jest.fn()

beforeEach(() => {
  wrapper = render(<FilterInput q={q} handleInput={spy} />)
  input = wrapper.getByTestId("filterInput")
})

describe("Filter input", () => {
  it("should render component", () => {
    expect(screen.getByTestId("filterInput")).toBeInTheDocument()
  })

  describe("onChange", () => {
    it("should display value", () => {
      fireEvent.change(input, { target: { value: "test" } })
      expect(input.value).toBe("test")
    })

    it("should trigger callback onChange", () => {
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})
