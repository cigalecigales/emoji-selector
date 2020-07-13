import React from 'react';
interface EmojiProps {
    name: string;
    onAddEmoji: Function;
}
interface EmojiState {
    hovered: boolean;
}
/**
 * [Selector] Emoji component
 */
declare class Emoji extends React.Component<EmojiProps, EmojiState> {
    constructor(props: EmojiProps);
    render(): JSX.Element;
}
export default Emoji;
