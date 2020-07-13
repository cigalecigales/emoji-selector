import React from 'react';
interface EmojiSelectorProps {
    emojis: {
        name: string;
        count: number;
    }[];
    onClickEmoji: Function;
    onAddEmoji: Function;
}
interface EmojiSelectorState {
}
declare class EmojiSelector extends React.Component<EmojiSelectorProps, EmojiSelectorState> {
    render(): JSX.Element;
}
export default EmojiSelector;
