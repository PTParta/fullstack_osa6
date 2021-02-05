import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementVotesOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdote, handleClick }) => {

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
}

export default AnecdoteList