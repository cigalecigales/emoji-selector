var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import EmojiList from './components/display/emoji-list';
var EmojiSelector = /** @class */ (function (_super) {
    __extends(EmojiSelector, _super);
    function EmojiSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiSelector.prototype.render = function () {
        return (React.createElement(EmojiList, { emojis: this.props.emojis, onClickEmoji: this.props.onClickEmoji, onAddEmoji: this.props.onAddEmoji }));
    };
    return EmojiSelector;
}(React.Component));
export default EmojiSelector;
//# sourceMappingURL=EmojiSelector.js.map