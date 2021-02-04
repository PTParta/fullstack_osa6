import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementVotesOf } from '../reducers/anecdoteReducer'
import { blogVotedNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdote, handleClick }) => {
  //const anecdotes = useSelector(state => state.anecdotes)

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
    dispatch(incrementVotesOf(id))
    const anecdote = anecdotes.find(n => n.id === id)
    dispatch(blogVotedNotification(anecdote.content))
    setTimeout(() => {
      dispatch(blogVotedNotification(''))
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList