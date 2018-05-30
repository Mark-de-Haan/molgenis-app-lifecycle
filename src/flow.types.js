// @flow
export type TreeSettings = {
  id: string,
  label: string,
  folderIcon: string,
  leafIcon: string,
  isOpened: boolean,
  isSelected: boolean,
  isLoading: boolean
}

export type Tree = {
  settings: TreeSettings,
  data: Array<Object>,
  raw: Array<Object>
}

export type Variables = {
  columns: Array<Object>,
  data: Array<Object>,
  source: Array<Object>
}

export type State = {
  harmonizationTableData: Object,
  tree: Tree,
  variables: Variables,
  cohorts: Array<Object>,
  harmonizations: Array<Object>,
  navbarLogo: string,
  error: string,
  selectedFeature: string
}

export type VuexContext = {
  commit: Function,
  dispatch: Function,
  getters: Function,
  state: State
}
