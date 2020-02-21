import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { render } from "../../../tests/test-render"
import Header from "./header.component"

let wrapper: any

const mock = {
  name: "App'n'roll",
  websiteUrl: "http://appnroll.com",
  avatarUrl: "https://avatars1.githubusercontent.com/u/2499845?v=4",
  location: "Warsaw, Poland",
  description:
    "A venture building company. Having fun building scalable businesses.",
}

beforeEach(() => {
  wrapper = render(<Header organization={mock} />)
})

describe("header", () => {
  it("should display name", () => {
    expect(wrapper.getByText(mock.name)).toBeInTheDocument()
  })

  it("should display description", () => {
    expect(wrapper.getByText(mock.description)).toBeInTheDocument()
  })

  it("should display websiteUrl", () => {
    expect(wrapper.getByText(mock.websiteUrl)).toBeInTheDocument()
  })

  it("should display location", () => {
    expect(wrapper.getByText(mock.location)).toBeInTheDocument()
  })

  it("should render logo", () => {
    expect(wrapper.getByTestId("logoImage").src).toEqual(mock.avatarUrl)
  })
})
