import React from 'react'
import Emoji from './emoji'
import styled from 'styled-components'
import { emojis } from '../data/emojis'

interface EmojiSelectorProps {
  show: boolean
}

interface EmojiSelectorState {
  fileter: string
}

/**
 * EmojiSelector component
 */
class EmojiSelector extends React.Component<EmojiSelectorProps, EmojiSelectorState> {
  constructor(props: EmojiSelectorProps) {
    super(props)
    this.state = {
      fileter: ''
    }
  }

  render() {
    const emojiList: JSX.Element[] = []

    Object.keys(emojis).forEach((key: string) => {
      emojiList.push(<Emoji name={key} key={key} />)
    })

    return (
      <EmojiSelectorStyle show={this.props.show}>
        <div className="emojiList">
          {emojiList}
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
  ${({ show }) => {
    return show ? '' : 'display: none;'
  }};

  .emojiList {
    text-align: center;
  }
`

export default EmojiSelector
