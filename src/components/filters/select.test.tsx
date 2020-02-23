import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen, fireEvent } from "@testing-library/react"
import { render } from "../../tests/test-render"
import FilterSelect from "./select.component"

let wrapper: any
let select: HTMLInputElement
const lang: string = ""
const languages: string[] = ["js", "css"]
const spy = jest.fn()

beforeEach(() => {
  wrapper = render(
    <FilterSelect lang={lang} languages={languages} handleChanage={spy} />
  )
  select = wrapper.getByTestId("filterSelect")
})

describe("Filter select", () => {
  it("should render component", () => {
    expect(screen.getByTestId("filterSelect")).toBeInTheDocument()
  })

  describe("onBlur", () => {
    it("should display value `all` first", () => {
      expect(wrapper.getByText("All")).toBeInTheDocument()
    })

    it("should change value to `js`", () => {
      fireEvent.change(select, { target: { value: "js" } })
      expect(wrapper.getByText("js")).toBeInTheDocument()
    })
  })
})
