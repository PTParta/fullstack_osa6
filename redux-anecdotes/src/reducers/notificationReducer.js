const notificationAtStart = ''

const notificationReducer = (state = notificationAtStart, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return action.data
    case 'CLOSE_NOTIFICATION':
      return notificationAtStart
    default:
      return state
  }
}

export const setNotification = (notification, time) => {
  return dispatch => {
    dispatch({
      type: 'NOTIFY',
      data: notification
    })
    setTimeout(() => {
      dispatch(hideNotification())
    }, 1000 * time)
  }
}

export const hideNotification = () => {
  return {
    type: 'CLOSE_NOTIFICATION',
  }
}

export default notificationReducer