import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../tests/test-render"
import RepositoriesList from "./list.component"

const mock = [
  {
    id: "test-id",
    name: "test repo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://github.com/Appnroll/appnroll-recruitment-exercise",
    forkCount: 10,
    primaryLanguage: {
      color: "blue",
      name: "CSS",
    },
    stargazers: {
      totalCount: 10,
    },
  },
]

beforeEach(() => {
  render(<RepositoriesList repositories={mock} />)
})

describe("Repositories list", () => {
  it("should render RepositoriesList component", () => {
    expect(screen.getByTestId("repositoriesList")).toBeInTheDocument()
  })
})
