import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { incrementVotesOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const vote = (id) => {
    console.log('vote', id)
    const anecdote = props.anecdotes.find(n => n.id === id)

    props.incrementVotesOf(anecdote)

    props.setNotification(`you voted '${anecdote.content}'`, 5)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} votes
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}



const mapStateToProps = (state) => {
  if (state.filter === '') {
    return {
      anecdotes: state.anecdotes,
      filter: state.filter
    }
  } else {
    return {
      anecdotes: state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())),
      filter: state.filter
    } 
  }
}

const mapDispatchToProps = {
  incrementVotesOf,
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes

/* const AnecdoteList = ({ anecdote, handleClick }) => {

  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    } else {
      return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
  })

  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    const anecdote = anecdotes.find(n => n.id === id)

    dispatch(incrementVotesOf(anecdote))

    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} votes
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
} */

//export default AnecdoteList