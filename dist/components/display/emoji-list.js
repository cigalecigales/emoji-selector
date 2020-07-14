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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import Emoji from './emoji';
import AddEmoji from './add-emoji';
/**
 * EmojiList component
 */
var EmojiList = /** @class */ (function (_super) {
    __extends(EmojiList, _super);
    function EmojiList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiList.prototype.test = function (e) {
        var target = e.currentTarget.name;
        console.log(target);
    };
    EmojiList.prototype.render = function () {
        var _this = this;
        return (React.createElement(EmojiListStyle, null,
            React.createElement("div", { style: { background: 'red' }, onClick: this.test },
                this.props.emojis.map(function (_a) {
                    var name = _a.name, count = _a.count;
                    return (React.createElement(Emoji, { name: name, count: count, key: name + count, onClickEmoji: _this.props.onClickEmoji }));
                }),
                React.createElement(AddEmoji, { onAddEmoji: this.props.onAddEmoji }))));
    };
    return EmojiList;
}(React.Component));
/**
 * EmojiList styles
 */
var EmojiListStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: start;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: start;\n"])));
export default EmojiList;
var templateObject_1;
//# sourceMappingURL=emoji-list.js.map