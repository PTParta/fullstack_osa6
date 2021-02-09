import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'
import anecdotes from '../services/anecdotes'



const Filter = (props) => {

  const handleChange = (event) => {
    console.log('props', props)
    props.filterChange(event.target.value)
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const style = {
  marginBottom: 10
}



/* const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
} */

const mapDispatchToProps = {
  filterChange
}

export default connect(
  /* mapStateToProps, */
  null,
  mapDispatchToProps
)(Filter)










/* const Filter = () => {
  useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(filterChange(event.target.value))

  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter */