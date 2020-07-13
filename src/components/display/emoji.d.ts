import React from 'react';
interface EmojiProps {
    name: string;
    count: number;
    onClickEmoji: Function;
}
interface EmojiState {
    hovered: boolean;
    count: number;
}
/**
 * Emoji component
 */
declare class Emoji extends React.Component<EmojiProps, EmojiState> {
    constructor(props: EmojiProps);
    onClick(): void;
    render(): JSX.Element;
}
export default Emoji;
