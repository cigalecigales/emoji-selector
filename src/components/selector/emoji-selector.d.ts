import React from 'react';
interface EmojiSelectorProps {
    show: boolean;
    onAddEmoji: Function;
}
interface EmojiSelectorState {
    fileter: string;
}
/**
 * EmojiSelector component
 */
declare class EmojiSelector extends React.Component<EmojiSelectorProps, EmojiSelectorState> {
    constructor(props: EmojiSelectorProps);
    render(): JSX.Element;
}
export default EmojiSelector;
