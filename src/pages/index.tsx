import { graphql } from "gatsby"
import React, { useContext, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Filters from "../components/filters/filters.component"
import RepositoriesList from "../components/repositories/list.component"
import Spinner from "../components/spinner/spinner.component"
import IRepository from "../types/repository.interface"
import AppFunctionComponent from "../types/app-function-component.interface"
import { fetchRepositories } from "../actions/repositories"
import { RepositoriesContext } from "../contexts/repositories.context"
import { FiltersContext } from "../contexts/filter.context"

interface Props {
  readonly data: {
    readonly github: {
      readonly search: {
        nodes: IRepository[]
      }
    }
  }
}

const IndexPage: AppFunctionComponent<Props> = ({ data }) => {
  const filtersContext = useContext(FiltersContext)
  const repositoriesContext = useContext(RepositoriesContext)

  useEffect(() => {
    const languages = [
      ...new Set(
        data.github.search.nodes.map(node => node.primaryLanguage.name)
      ),
    ]

    repositoriesContext.dispatch({
      type: "SET_LIST",
      payload: data.github.search.nodes,
    })
    filtersContext.dispatch({ type: "SET_LANGUAGES", payload: languages })
  }, [])

  useEffect(() => {
    fetchRepositories(filtersContext.state, repositoriesContext.dispatch)
  }, [filtersContext.state])

  return (
    <Layout>
      <SEO title="Home" />
      <Filters />

      {repositoriesContext.isFetching ? <Spinner /> : <RepositoriesList />}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    github {
      search(type: REPOSITORY, first: 100, query: "org:Appnroll") {
        nodes {
          ... on GitHub_Repository {
            id
            name
            description
            url
            forkCount
            stargazers {
              totalCount
            }
            primaryLanguage {
              color
              name
            }
          }
        }
      }
    }
  }
`
