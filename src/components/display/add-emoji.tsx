import React from 'react'
import styled from 'styled-components'
import EmojiSelector from '../selector/emoji-selector'

interface AddEmojiProps {

}

interface AddEmojiState {
  hovered: boolean
  show: boolean
}

/**
 * AddEmoji component
 */
class AddEmoji extends React.Component<AddEmojiProps, AddEmojiState> {
  constructor(props: AddEmojiProps) {
    super(props)
    this.state = {
      hovered: false,
      show: false
    }
  }

  onClick() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <AddEmojiStyle hovered={this.state.hovered}>
        <div
          onMouseEnter={() => {this.setState({ hovered: true })}}
          onMouseLeave={() => {this.setState({ hovered: false })}}
          onClick={() => this.onClick()}
        >
          <span>+</span>
        </div>
        <EmojiSelector show={this.state.show} />
      </AddEmojiStyle>
    )
  }
}

/**
 * AddEmoji styles
 */
const AddEmojiStyle = styled.div<{ hovered: boolean }>`
  font-size: 12px;
  width: 40px;
  height: 24px;
  line-height: 22px;
  border-radius: 15px;
  ${({ hovered }) => handleEmojiStyle(hovered)};
  box-sizing: border-box;
  user-select: none;
  display: inline-block;
  margin-left: 5px;
  text-align: center;
  position: relative;
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

export default AddEmoji
