import api from '@molgenis/molgenis-api-client'
import EntityToTreeMapper from '../util/EntityToTreeMapper'
import {
  SET_TREE_DATA,
  SET_ERROR, SET_CORE_VARIABLE_COLUMNS, SET_CORE_VARIABLE_DATA, SET_COHORT_DATA, SET_HARMONIZATION_DATA
} from './mutations'
import EntityToCoreVariableMapper from '../util/EntityToCoreVariableMapper'

/* ACTION CONSTANTS */
export const GET_TREE_DATA = '__GET_TREE_DATA__'
export const GET_CORE_VARIABLES = '__GET_CORE_VARIABLE_DATA__'
export const GET_COHORTS = '__GET_COHORT_DATA__'
export const GET_HARMONIZATIONS = '__GET_HARMONIZATION_DATA__'

/* API PATHS */
const TREE_API_PATH = '/api/v2/UI_Menu'
const CORE_VARIABLE_API_PATH = '/api/v2/LifeCycle_CoreVariables'
const COHORT_API_PATH = '/api/v2/LifeCycle_Cohorts'
const HARMONIZATION_API_PATH = '/api/v2/UI_Menu'

export default {
  [GET_TREE_DATA] ({state, commit}) {
    api.get(TREE_API_PATH).then(response => {
      const data = EntityToTreeMapper.generateTreeData(response, state.tree.settings)
      commit(SET_TREE_DATA, data)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_CORE_VARIABLES] ({state, commit}, treeId) {
    console.log(treeId)


    const query = '?q=id=in=(' + entityId + ')'
    const request = CORE_VARIABLE_API_PATH + query
    api.get(request).then(response => {
      commit(SET_CORE_VARIABLE_COLUMNS, EntityToCoreVariableMapper.generateColumns(response.attributes))
      commit(SET_CORE_VARIABLE_DATA, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_COHORTS] ({state, commit}) {
    api.get(COHORT_API_PATH).then(response => {
      commit(SET_COHORT_DATA, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  },
  [GET_HARMONIZATIONS] ({state, commit}) {
    api.get(HARMONIZATION_API_PATH).then(response => {
      commit(SET_HARMONIZATION_DATA, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  }
}
