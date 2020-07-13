import React from 'react';
interface AddEmojiProps {
    onAddEmoji: Function;
}
interface AddEmojiState {
    hovered: boolean;
    show: boolean;
}
/**
 * AddEmoji component
 */
declare class AddEmoji extends React.Component<AddEmojiProps, AddEmojiState> {
    constructor(props: AddEmojiProps);
    onClick(): void;
    render(): JSX.Element;
}
export default AddEmoji;
