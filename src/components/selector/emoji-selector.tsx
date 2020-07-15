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
  allEmojiList: JSX.Element[]
  filteredEmojiList: JSX.Element[]
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
      allEmojiList: [...emojiList],
      filteredEmojiList: [...emojiList]
    }

    this.onInput = this.onInput.bind(this)
  }

  onInput(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.target as HTMLInputElement

    const emojiList = [...this.state.allEmojiList]

    if (!value) {
      this.setState({
        filteredEmojiList: [...this.state.allEmojiList]
      })
      return
    }

    const filteredList = emojiList.filter((element: JSX.Element) => {
      const key = String(element.key)
      if (key) {
        return key.startsWith(value)
      }
      return true
    })

    this.setState({
      filteredEmojiList: filteredList
    })
  }

  render() {
    return (
      <EmojiSelectorStyle show={this.props.show}>
        <input type={'text'} onInput={this.onInput} placeholder={'検索'} className="filter" />
        <div className="emojiList">
          {this.state.filteredEmojiList}
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

  .filter {
    border: 1px solid rgba(29,28,29,0.2);
    line-height: 25px;
    margin-top: 5px;
    width: 325px;
    border-radius: 5px;

    &:focus {
      outline: 0;
      border: 1px solid rgba(29,28,29,0.5);
    }
  }
`

export default EmojiSelector
