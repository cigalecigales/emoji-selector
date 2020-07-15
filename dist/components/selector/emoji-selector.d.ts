import React from 'react';
interface EmojiSelectorProps {
    show: boolean;
    onAddEmoji: Function;
}
interface EmojiSelectorState {
    fileter: string;
    emojiList: JSX.Element[];
}
/**
 * EmojiSelector component
 */
declare class EmojiSelector extends React.Component<EmojiSelectorProps, EmojiSelectorState> {
    constructor(props: EmojiSelectorProps);
    onChange(e: React.ChangeEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
export default EmojiSelector;
