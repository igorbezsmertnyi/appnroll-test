interface IGitHubLangues {
  color: string
  name: string
}

interface IGitHubStargazers {
  totalCount: number
}

export default interface IRepository {
  id: string
  name: string
  description: string
  url: string
  forkCount: number
  primaryLanguage: IGitHubLangues
  stargazers: IGitHubStargazers
}
