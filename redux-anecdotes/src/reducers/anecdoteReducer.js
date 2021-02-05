import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'CREATE_BLOG':
      return [...state, action.data]

    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote).sort((a, b) => b.votes - a.votes)

    case 'INIT_ANECDOTES':
      return action.data.sort((a, b) => b.votes - a.votes)

    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE_BLOG',
      data: newAnecdote
    })
  }
}

export const incrementVotesOf = (content) => {
  return async dispatch => {
    await anecdoteService.voteAnecdote(content)
    dispatch({
      type: 'VOTE',
      data: content
    })
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer