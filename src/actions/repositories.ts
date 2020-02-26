import axios from "../helpers/axios"
import IFilter from "../types/filter.interface"

export const fetchRepositories = async (filter: IFilter, dispatch: any) => {
  try {
    await dispatch({
      type: "SET_LIST_FETCHING",
    })

    const response = await axios.post("", {
      query: `
        query {
          search(type: REPOSITORY, first: 100, query: "${filter.q} org:Appnroll language:${filter.lang}") {
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

    await dispatch({
      type: "SET_LIST",
      payload: response.data.data.search.nodes,
    })

    await dispatch({
      type: "SET_LIST_FETCHED",
    })
  } catch (err) {
    console.error(err)
  }
}
