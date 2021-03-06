import React from 'react'
import styled from 'styled-components'
import Emoji from './emoji'
import AddEmoji from './add-emoji'

export interface EmojiInfo {
  name: string
  count: number
}

interface EmojisProps {
  emojis: EmojiInfo[],
  onClickEmoji: Function
  onAddEmoji: Function
}

/**
 * EmojiList component
 */
class EmojiList extends React.Component<EmojisProps> {
  render() {
    return (
      <EmojiListStyle>
        {this.props.emojis.map(({ name, count }) => (
          <Emoji name={name} count={count} key={name + count} onClickEmoji={this.props.onClickEmoji} />
        ))}
        <AddEmoji onAddEmoji={this.props.onAddEmoji} />
      </EmojiListStyle>
    )
  }
}

/**
 * EmojiList styles
 */
const EmojiListStyle = styled.div`
  display: flex;
  justify-content: left;
  align-items: start;
`

export default EmojiList
