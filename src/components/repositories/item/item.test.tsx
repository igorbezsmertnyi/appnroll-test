import "@testing-library/jest-dom/extend-expect"
import React from "react"
import { render } from "../../../tests/test-render"
import RepositoriesItem from "./item.component"

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

const reduceHostName = (url: string) =>
  url.replace(/https:\/\/github.com\//, "")

beforeEach(() => {
  wrapper = render(<RepositoriesItem repository={mock} />)
})

describe("Repository Item", () => {
  it("should render repository name", () => {
    expect(wrapper.getByText(mock.name)).toBeInTheDocument()
  })

  it("should render repository description", () => {
    expect(wrapper.getByText(mock.description)).toBeInTheDocument()
  })

  it("should render start count", () => {
    expect(wrapper.getByTestId("repositoryStars").textContent).toEqual(
      mock.stargazers.totalCount.toString()
    )
  })

  it("should render forks count", () => {
    expect(wrapper.getByTestId("repositoryForks").textContent).toEqual(
      mock.forkCount.toString()
    )
  })

  it("should render language name", () => {
    expect(wrapper.getByTestId("repositoryLanguage").textContent).toEqual(
      mock.primaryLanguage.name
    )
  })

  it("should render link to repository", () => {
    const text = reduceHostName(mock.url)

    expect(wrapper.getByTestId("repositoryLink").href).toEqual(mock.url)
    expect(wrapper.getByTestId("repositoryLink").textContent).toEqual(text)
  })
})
