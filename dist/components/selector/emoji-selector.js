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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
            allEmojiList: __spreadArrays(emojiList),
            filteredEmojiList: __spreadArrays(emojiList)
        };
        _this.onInput = _this.onInput.bind(_this);
        return _this;
    }
    EmojiSelector.prototype.onInput = function (e) {
        var value = e.target.value;
        var emojiList = __spreadArrays(this.state.allEmojiList);
        var filteredList = emojiList.filter(function (element) {
            var key = String(element.key);
            if (key) {
                return key.startsWith(value);
            }
            return true;
        });
        this.setState({
            filteredEmojiList: filteredList
        });
    };
    EmojiSelector.prototype.render = function () {
        return (React.createElement(EmojiSelectorStyle, { show: this.props.show },
            React.createElement("input", { type: 'text', onInput: this.onInput, placeholder: '検索', className: "filter" }),
            React.createElement("div", { className: "emojiList" }, this.state.filteredEmojiList)));
    };
    return EmojiSelector;
}(React.Component));
/**
 * EmojiSelector styles
 */
var EmojiSelectorStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 22px;\n  box-sizing: border-box;\n  width: 360px;\n  height: 200px;\n  overflow-y: scroll;\n  border: 1px solid rgba(29, 28, 29, 0.2);\n  word-wrap: break-word;\n  position: absolute;\n  top: 30px;\n  background: #ffffff;\n  z-index: 1000;\n  ", ";\n\n  .emojiList {\n    text-align: center;\n  }\n\n  .filter {\n    border: 1px solid rgba(29,28,29,0.2);\n    line-height: 25px;\n    margin-top: 5px;\n    width: 325px;\n    border-radius: 5px;\n\n    &:focus {\n      outline: 0;\n    }\n  }\n"], ["\n  font-size: 22px;\n  box-sizing: border-box;\n  width: 360px;\n  height: 200px;\n  overflow-y: scroll;\n  border: 1px solid rgba(29, 28, 29, 0.2);\n  word-wrap: break-word;\n  position: absolute;\n  top: 30px;\n  background: #ffffff;\n  z-index: 1000;\n  ",
    ";\n\n  .emojiList {\n    text-align: center;\n  }\n\n  .filter {\n    border: 1px solid rgba(29,28,29,0.2);\n    line-height: 25px;\n    margin-top: 5px;\n    width: 325px;\n    border-radius: 5px;\n\n    &:focus {\n      outline: 0;\n    }\n  }\n"])), function (_a) {
    var show = _a.show;
    return show ? '' : 'display: none;';
});
export default EmojiSelector;
var templateObject_1;
//# sourceMappingURL=emoji-selector.js.map