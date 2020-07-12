import React from 'react'
import emoji from 'node-emoji'
import styled from 'styled-components'

interface EmojiProps {
  name: string // emoji's name
  count: number
}

interface EmojiState {
  hovered: boolean
  count: number
}

/**
 * Emoji component
 */
class Emoji extends React.Component<EmojiProps, EmojiState> {
  constructor(props: EmojiProps) {
    super(props)
    this.state = {
      hovered: false,
      count: this.props.count
    }
  }

  onClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <EmojiStyle hovered={this.state.hovered}>
        <div
          onMouseEnter={() => {this.setState({ hovered: true })}}
          onMouseLeave={() => {this.setState({ hovered: false })}}
          onClick={() => this.onClick()}
          className="container"
        >
          <span>{emoji.get(this.props.name)}</span>
          <span className="count">{this.state.count}</span>
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
  width: 45px;
  height: 24px;
  line-height: 22px;
  border-radius: 15px;
  ${({ hovered }) => handleEmojiStyle(hovered)};
  padding: 2px;
  box-sizing: border-box;
  user-select: none;
  display: inline-block;
  margin-left: 5px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    .count {
      font-size: 11px;
      margin-left: 3px;
    }
  }
`

const handleEmojiStyle = ( hovered: boolean ) => {
  let borderColor = 'rgba(29, 28, 29, 0.04)'
  let backgroundColor = 'rgba(29, 28, 29, 0.04)'
  let cursor = 'initial'
  
  if (hovered) {
    borderColor = 'rgba(29, 28, 29, 0.2)'
    backgroundColor = '#ffffff'
    cursor = 'pointer'
  }

  return `
    border: 1px solid ${borderColor}; 
    background: ${backgroundColor};
    cursor: ${cursor}
  `  
}

export default Emoji
