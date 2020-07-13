import React from 'react'
import EmojiList from './components/display/emoji-list'

interface EmojiSelectorProps {
  emojis: { name: string, count: number }[]
  onClickEmoji: Function
  onAddEmoji: Function

}

interface EmojiSelectorState {
  
}

class EmojiSelector extends React.Component<EmojiSelectorProps, EmojiSelectorState> {
  render() {
    return (
      <EmojiList
        emojis={this.props.emojis}
        onClickEmoji={this.props.onClickEmoji}
        onAddEmoji={this.props.onAddEmoji}
      />
    )
  }
}

export default EmojiSelector
