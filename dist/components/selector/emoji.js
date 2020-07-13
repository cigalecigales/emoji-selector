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
import emoji from 'node-emoji';
import styled from 'styled-components';
/**
 * [Selector] Emoji component
 */
var Emoji = /** @class */ (function (_super) {
    __extends(Emoji, _super);
    function Emoji(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: false
        };
        return _this;
    }
    Emoji.prototype.render = function () {
        var _this = this;
        var name = this.props.name;
        return (React.createElement(EmojiStyle, { hovered: this.state.hovered },
            React.createElement("div", { onMouseEnter: function () { _this.setState({ hovered: true }); }, onMouseLeave: function () { _this.setState({ hovered: false }); }, onClick: function () { return _this.props.onAddEmoji(name); }, className: "container" },
                React.createElement("span", null, emoji.get(this.props.name)))));
    };
    return Emoji;
}(React.Component));
/**
 * Emoji styles
 */
var EmojiStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 22px;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 5px;\n  ", ";\n  padding: 2px;\n  box-sizing: border-box;\n  user-select: none;\n  display: inline-block;\n  margin: 1px;\n  cursor: pointer;\n\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  font-size: 22px;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  border-radius: 5px;\n  ", ";\n  padding: 2px;\n  box-sizing: border-box;\n  user-select: none;\n  display: inline-block;\n  margin: 1px;\n  cursor: pointer;\n\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])), function (_a) {
    var hovered = _a.hovered;
    return handleEmojiStyle(hovered);
});
var handleEmojiStyle = function (hovered) {
    var borderColor = '#ffffff';
    var backgroundColor = '#ffffff';
    if (hovered) {
        borderColor = '#b9e3ed';
        backgroundColor = '#b9e3ed';
    }
    return "\n    border: 1px solid " + borderColor + "; \n    background: " + backgroundColor + ";\n  ";
};
export default Emoji;
var templateObject_1;
//# sourceMappingURL=emoji.js.map