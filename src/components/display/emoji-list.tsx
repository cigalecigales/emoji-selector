import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Emoji from './emoji'
import AddEmoji from './add-emoji'

export interface EmojiInfo {
  name: string
  count: number
}

interface EmojisProps {
  emojis: EmojiInfo[]
}

/**
 * EmojiList component
 */
class EmojiList extends React.Component<EmojisProps> {
  render() {
    return (
      <EmojiListStyle>
        {this.props.emojis.map(({ name, count }) => (
          <Emoji name={name} count={count} key={name + count} />
        ))}
        <AddEmoji />
      </EmojiListStyle>
    )
  }
}

const mapStateToProps = (store: any) => ({
  emojis: store.emojis
})

/**
 * EmojiList styles
 */
const EmojiListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`

export default connect(
  mapStateToProps
)(EmojiList)
