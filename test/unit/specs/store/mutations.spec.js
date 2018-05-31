import { expect } from 'chai'
import mutations from '@/store/mutations'
import EntityV2Response from '../mock-responses/EntityV2Response'
import ColumnsMapperResponse from '../mock-responses/ColumnsMapperResponse'

describe('mutations', () => {
  const state = {
    tree: {
      data: []
    },
    variables: {
      columns: [],
      data: [],
      source: []
    },
    cohorts: [],
    harmonizations: [],
    navbarLogo: '',
    error: undefined,
    selectedFeature: ''
  }

  it('should set the core variable columns in the state with the payload', () => {
    mutations.__SET_CORE_VARIABLE_COLUMNS__(state, ColumnsMapperResponse.mockColumns)
    expect(state.variables.columns).to.deep.equal(ColumnsMapperResponse.mockColumns)
  })

  it('should set the core variable data in the state with the payload', () => {
    mutations.__SET_CORE_VARIABLE_DATA__(state, EntityV2Response.mockCoreVariablesResponse.items)
    expect(state.variables.data).to.deep.equal(EntityV2Response.mockCoreVariablesResponse.items)
  })

  it('should set error message in state', () => {
    mutations.__SET_ERROR__(state, 'error')
    expect(state.error).to.equal('error')
  })

  it('should set navbar logo in state', () => {
    mutations.__SET_NAVBAR_LOGO__(state, EntityV2Response.mockAppSettingsData.logo_href_navbar)
    expect(state.navbarLogo).to.equal(EntityV2Response.mockAppSettingsData.logo_href_navbar)
  })
})
