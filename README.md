# [TypeScript + React] :watermelon: Emoji Selector
This is an emoji selector like slack.<br>

![image](https://user-images.githubusercontent.com/7352476/87250506-50585880-c4a0-11ea-922d-34bee8516eab.png)

## how to install

```bash
$ npm i @cigalecigales/emoji-selector

# or

$ yarn add @cigalecigales/emoji-selector
```

## sample

```typescript
import React from 'react'
import EmojiSelector from '@cigalecigales/emoji-selector'

interface SampleProps {

}

interface SampleState {
  emojis: { name: string, count: number }[]
}

class Sample extends React.Component<SampleProps, SampleState> {
  constructor(props: SampleProps) {
    super(props)

    // initial emoji list
    this.state = {
      emojis: [
        {
          name: 'coffee',
          count: 1
        }, {
          name: 'heart',
          count: 5
        }
      ]
    }
  }

  /**
   * clicked emoji event
   */
  onClickEmoji(name: string) {
    const emojiList = [ ...this.state.emojis ]
    for (const e of emojiList) {
      if (e.name === name) {
        e.count++
        break
      }
    }
    this.setState({
      emojis: emojiList
    })
  }

  /**
   * added emoji event
   */
  onAddEmoji(name: string) {
    const emojiList = [ ...this.state.emojis ]
    emojiList.push({
      name: name,
      count: 1
    })
    this.setState({
      emojis: emojiList
    })
  }

  render() {
    return (
      <EmojiSelector
        emojis={this.state.emojis}
        onClickEmoji={(name: string) => this.onClickEmoji(name)}
        onAddEmoji={(name: string) => this.onAddEmoji(name)}
      />
    )
  }
}

export default Sample
```
