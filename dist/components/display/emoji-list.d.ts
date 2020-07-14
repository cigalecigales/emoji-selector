import React from 'react';
export interface EmojiInfo {
    name: string;
    count: number;
}
interface EmojisProps {
    emojis: EmojiInfo[];
    onClickEmoji: Function;
    onAddEmoji: Function;
}
/**
 * EmojiList component
 */
declare class EmojiList extends React.Component<EmojisProps> {
    test(e: React.MouseEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export default EmojiList;
