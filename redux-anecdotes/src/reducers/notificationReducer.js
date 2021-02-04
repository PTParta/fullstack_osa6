const notificationAtStart = ''

const notificationReducer = (state = notificationAtStart, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'BLOG_CREATED':
      const blogCreatedNotification = action.data.content
      return blogCreatedNotification

    case 'BLOG_VOTED':
      const blogVotedNotification = action.data.content
      return blogVotedNotification

    default:
      return state
  }


}
export const blogCreatedNotification = (content) => {
  console.log('creating notification for anecdote creation')

  if (content === '') {
    return {
      type: 'BLOG_CREATED',
      data: {
        content: ''
      }
    }
  } else {
    return {
      type: 'BLOG_CREATED',
      data: {
        content: `you created anecdote '${content}'`
      }
    }
  }
}

export const blogVotedNotification = (content) => {
  console.log('creating notification for anecdote voting')

  if (content === '') {
    return {
      type: 'BLOG_VOTED',
      data: {
        content: ''
      }
    }
  } else {
    return {
      type: 'BLOG_VOTED',
      data: {
        content: `you voted anecdote '${content}'`
      }
    }
  }

}

export default notificationReducer