import React from 'react'
import emoji from 'node-emoji'
import styled from 'styled-components'

interface EmojiProps {
  name: string
  onAddEmoji: Function
}

interface EmojiState {
  hovered: boolean
}

/**
 * [Selector] Emoji component
 */
class Emoji extends React.Component<EmojiProps, EmojiState> {
  constructor(props: EmojiProps) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  render() {
    const { name } = this.props

    return (
      <EmojiStyle hovered={this.state.hovered}>
        <div
          onMouseEnter={() => {this.setState({ hovered: true })}}
          onMouseLeave={() => {this.setState({ hovered: false })}}
          onClick={() => this.props.onAddEmoji(name)}
          className="container"
        >
          <span>{emoji.get(this.props.name)}</span>
        </div>
      </EmojiStyle>
    )
  }
}

/**
 * Emoji styles
 */
const EmojiStyle = styled.div<{ hovered: boolean }>`
  font-size: 22px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  ${({ hovered }) => handleEmojiStyle(hovered)};
  padding: 2px;
  box-sizing: border-box;
  user-select: none;
  display: inline-block;
  margin: 1px;
  cursor: pointer;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const handleEmojiStyle = ( hovered: boolean ) => {
  let borderColor = '#ffffff'
  let backgroundColor = '#ffffff'
  
  if (hovered) {
    borderColor = '#b9e3ed'
    backgroundColor = '#b9e3ed'
  }

  return `
    border: 1px solid ${borderColor}; 
    background: ${backgroundColor};
  `  
}

export default Emoji
