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
import Emoji from './emoji';
import styled from 'styled-components';
import { emojis } from '../data/emojis';
/**
 * EmojiSelector component
 */
var EmojiSelector = /** @class */ (function (_super) {
    __extends(EmojiSelector, _super);
    function EmojiSelector(props) {
        var _this = _super.call(this, props) || this;
        var emojiList = [];
        Object.keys(emojis).forEach(function (key) {
            emojiList.push(React.createElement(Emoji, { name: key, key: key, onAddEmoji: _this.props.onAddEmoji }));
        });
        _this.state = {
            fileter: '',
            emojiList: emojiList
        };
        return _this;
    }
    EmojiSelector.prototype.onChange = function (e) {
        var value = e.target.value;
        this.setState({
            fileter: value
        });
        console.log(value);
    };
    EmojiSelector.prototype.render = function () {
        return (React.createElement(EmojiSelectorStyle, { show: this.props.show },
            React.createElement("input", { type: 'text', onChange: this.onChange }),
            React.createElement("div", { className: "emojiList" }, this.state.emojiList)));
    };
    return EmojiSelector;
}(React.Component));
/**
 * EmojiSelector styles
 */
var EmojiSelectorStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 22px;\n  box-sizing: border-box;\n  width: 360px;\n  height: 200px;\n  overflow-y: scroll;\n  border: 1px solid rgba(29, 28, 29, 0.2);\n  word-wrap: break-word;\n  position: absolute;\n  top: 30px;\n  background: #ffffff;\n  z-index: 1000;\n  ", ";\n\n  .emojiList {\n    text-align: center;\n  }\n"], ["\n  font-size: 22px;\n  box-sizing: border-box;\n  width: 360px;\n  height: 200px;\n  overflow-y: scroll;\n  border: 1px solid rgba(29, 28, 29, 0.2);\n  word-wrap: break-word;\n  position: absolute;\n  top: 30px;\n  background: #ffffff;\n  z-index: 1000;\n  ",
    ";\n\n  .emojiList {\n    text-align: center;\n  }\n"])), function (_a) {
    var show = _a.show;
    return show ? '' : 'display: none;';
});
export default EmojiSelector;
var templateObject_1;
//# sourceMappingURL=emoji-selector.js.map