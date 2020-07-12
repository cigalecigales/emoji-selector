import { Reducer } from 'redux'
import { ActionTypes } from './types'

// initial state
export const initialState = {
  emojis: []
}

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EMOJI: {
      const currentState = { ...state }
      const emojis = [...currentState.emojis]
      const name = action.payload.name

      const target = emojis.filter((emoji: any) => emoji.name === name)

      if (target.length === 0) {
        emojis.push({
          name: name,
          count: 1
        })
      } else {
        for(const e of emojis) {
          if (e.name === name) {
            e.count++
            break
          }
        }
      }

      return { ...state, emojis: emojis }
    }
    default: {
      return state
    }
  }
}

export { reducer }
