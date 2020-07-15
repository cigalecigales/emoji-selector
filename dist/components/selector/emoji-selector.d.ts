import React from 'react';
interface EmojiSelectorProps {
    show: boolean;
    onAddEmoji: Function;
}
interface EmojiSelectorState {
    fileter: string;
    allEmojiList: JSX.Element[];
    filteredEmojiList: JSX.Element[];
}
/**
 * EmojiSelector component
 */
declare class EmojiSelector extends React.Component<EmojiSelectorProps, EmojiSelectorState> {
    constructor(props: EmojiSelectorProps);
    onInput(e: React.FormEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export default EmojiSelector;
