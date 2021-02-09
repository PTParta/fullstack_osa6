const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export const filterChange = (filter) => {
  console.log('filter change filter value', filter)
  return dispatch => {
    dispatch({
      type: 'SET_FILTER',
      filter
    })
  }
}


/* export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
} */

export default filterReducer

