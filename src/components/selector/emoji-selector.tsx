import React from 'react'
import Emoji from './emoji'
import styled from 'styled-components'
import { emojis } from '../data/emojis'

interface EmojiSelectorProps {
  show: boolean
  onAddEmoji: Function
}

interface EmojiSelectorState {
  fileter: string
  emojiList: JSX.Element[]
}

/**
 * EmojiSelector component
 */
class EmojiSelector extends React.Component<EmojiSelectorProps, EmojiSelectorState> {
  constructor(props: EmojiSelectorProps) {
    super(props)

    const emojiList: JSX.Element[] = []

    Object.keys(emojis).forEach((key: string) => {
      emojiList.push(<Emoji name={key} key={key} onAddEmoji={this.props.onAddEmoji} />)
    })

    this.state = {
      fileter: '',
      emojiList: emojiList
    }
  }

  onInput(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement
    console.log(value)
    this.setState({
      fileter: value
    })
  }

  render() {
    return (
      <EmojiSelectorStyle show={this.props.show}>
        <input type={'text'} onInput={this.onInput} />
        <div className="emojiList">
          {this.state.emojiList}
        </div>
      </EmojiSelectorStyle>
    )
  }
}

/**
 * EmojiSelector styles
 */
const EmojiSelectorStyle = styled.div<{ show: boolean }>`
  font-size: 22px;
  box-sizing: border-box;
  width: 360px;
  height: 200px;
  overflow-y: scroll;
  border: 1px solid rgba(29, 28, 29, 0.2);
  word-wrap: break-word;
  position: absolute;
  top: 30px;
  background: #ffffff;
  z-index: 1000;
  ${({ show }) => {
    return show ? '' : 'display: none;'
  }};

  .emojiList {
    text-align: center;
  }
`

export default EmojiSelector
