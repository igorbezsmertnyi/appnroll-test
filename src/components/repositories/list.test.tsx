import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../../tests/test-render"
import { RepositoriesContext } from "../../contexts/repositories.context"
import RepositoriesList from "./list.component"

let wrapper: any

const mock = {
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
}

const value = {
  dispatch: jest.fn(),
  list: [mock],
  isFetching: false,
  isFetched: false,
}

beforeEach(() => {
  wrapper = render(
    <RepositoriesContext.Provider value={value}>
      <RepositoriesList />
    </RepositoriesContext.Provider>
  )
})

describe("Repositories list", () => {
  it("should render RepositoriesList component", () => {
    expect(screen.getByTestId("repositoriesList")).toBeInTheDocument()
  })

  it("should display repository name", () => {
    expect(wrapper.getByText(mock.name)).toBeInTheDocument()
  })
})
