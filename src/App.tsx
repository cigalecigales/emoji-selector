import React from 'react'
import EmojiList from './components/display/emoji-list'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './store/reducer'

const store = createStore(reducer)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <EmojiList />
    </Provider>
  )
}

export default App
