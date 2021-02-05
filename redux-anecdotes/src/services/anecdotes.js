import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  console.log('getAll')
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  console.log('response.data', response.data)
  return response.data
}

const voteAnecdote = async (content) => {
  const url = baseUrl + '/' + content.id
  const updatedAnecdote = {
    ...content,
    votes: content.votes + 1
  }
  const response = await axios.put(url, updatedAnecdote)
  return response.data
}

export default { getAll, createNew, voteAnecdote }