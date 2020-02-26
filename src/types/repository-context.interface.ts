import IRepository from "./repository.interface"

export default interface IRepositoryContext {
  list: IRepository[]
  isFetching: boolean
  isFetched: boolean
}
