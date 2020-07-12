import { action } from 'typesafe-actions'
import { ActionTypes } from './types'

export const addEmoji = (name = '') => action(
  ActionTypes.ADD_EMOJI,
  { name }
)
