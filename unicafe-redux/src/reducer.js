const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let changedState = state
  switch (action.type) {
    case 'GOOD':
      changedState = {
        good: state.good + 1,
        ok: state.ok,
        bad: state.bad
      }
      return changedState
    case 'OK':
      changedState = {
        good: state.good,
        ok: state.ok + 1,
        bad: state.bad
      }
      return changedState
    case 'BAD':
      changedState = {
        good: state.good,
        ok: state.ok,
        bad: state.bad + 1
      }
      return changedState
    case 'ZERO':
      changedState = {
        good: 0,
        ok: 0,
        bad: 0
      }
      return changedState
    default: return state
  }

}

export default counterReducer