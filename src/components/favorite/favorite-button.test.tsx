import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../tests/test-render"
import FavoriteButton from "./favorite-button.component"

let wrapper: any
const id = "test-id"

beforeEach(() => {
  wrapper = render(<FavoriteButton id={id} />)
})

describe("Filters", () => {
  it("should render component", () => {
    expect(screen.getByTestId("favoriteButton")).toBeInTheDocument()
  })

  describe("click", () => {
    it("should be no favorite", () => {
      expect(wrapper.getByTestId("favoriteAdd")).toBeInTheDocument()
    })
  })
})
