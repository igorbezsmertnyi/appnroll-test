import { graphql } from "gatsby"
import React, { Component, FormEvent } from "react"
import axios from "../helpers/axios"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Filters from "../components/filters/filters.component"
import RepositoriesList from "../components/repositories/list.component"
import Spinner from "../components/spinner/spinner.component"
import IRepository from "../types/repository-interface"

interface Props {
  readonly data: {
    readonly github: {
      readonly search: {
        nodes: IRepository[]
      }
    }
  }
}

interface State {
  q: string
  lang: string
  fetching: boolean
  fetched: boolean
  list: IRepository[]
}

class IndexPage extends Component<Props> {
  state: State = {
    q: "",
    lang: "all",
    fetching: false,
    fetched: false,
    list: [],
  }

  loadData = async () => {
    const { q, lang } = this.state

    try {
      const response = await axios.post("", {
        query: `
          query {
            search(type: REPOSITORY, first: 100, query: "${q} org:Appnroll language:${lang}") {
              nodes {
                ... on Repository {
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
        `,
      })

      await this.setState({
        list: response.data.data.search.nodes,
        fetching: false,
        fetched: true,
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleChangeQuery = (e: FormEvent<HTMLInputElement>) => {
    this.setState({ q: e.target.value, fetching: true }, this.loadData)
  }

  handleChangeFilter = (e: FormEvent<HTMLSelectElement>) => {
    this.setState({ lang: e.target.value, fetching: true }, this.loadData)
  }

  handleClear = () => {
    this.setState({ q: "", lang: "all", fetching: true }, this.loadData)
  }

  get languages() {
    const { data } = this.props
    const names = data.github.search.nodes.map(
      node => node.primaryLanguage.name
    )

    return [...new Set<string>(names)].sort()
  }

  get repositories() {
    const { list, fetched } = this.state
    const { data } = this.props

    return fetched ? list : data.github.search.nodes
  }

  render() {
    const { q, lang, fetching } = this.state

    return (
      <Layout>
        <SEO title="Home" />
        <Filters
          q={q}
          lang={lang}
          languages={this.languages}
          handleInput={this.handleChangeQuery}
          handleChanage={this.handleChangeFilter}
          handleClear={this.handleClear}
        />

        {fetching ? (
          <Spinner />
        ) : (
          <RepositoriesList repositories={this.repositories} />
        )}
      </Layout>
    )
  }
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
