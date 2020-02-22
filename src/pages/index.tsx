import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RepositoriesList from "../components/repositories/list.component"
import AppFunctionComponent from "../types/app-function-component.interface"

interface Props {
  data: any
}

const IndexPage: AppFunctionComponent<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <RepositoriesList
        repositories={data.github.organization.repositories.nodes}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    github {
      organization(login: "Appnroll") {
        repositories(
          privacy: PUBLIC
          orderBy: { field: STARGAZERS, direction: DESC }
          first: 9
        ) {
          nodes {
            name
            url
            forkCount
            description
            primaryLanguage {
              color
              name
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`
