// rfcredux

import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store//slicers/filterSlice'


import Filter from '../pure/Filter'


// ownProps son props que se le ingresan a esta funcion

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filterState
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    } 
  }
}


const FilterContainerSlice = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterContainerSlice;
