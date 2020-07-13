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
 * Emoji component
 */
var Emoji = /** @class */ (function (_super) {
    __extends(Emoji, _super);
    function Emoji(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: false,
            count: _this.props.count
        };
        return _this;
    }
    Emoji.prototype.onClick = function () {
        this.setState({ count: this.state.count + 1 });
    };
    Emoji.prototype.render = function () {
        var _this = this;
        var name = this.props.name;
        return (React.createElement(EmojiStyle, { hovered: this.state.hovered },
            React.createElement("div", { onMouseEnter: function () { _this.setState({ hovered: true }); }, onMouseLeave: function () { _this.setState({ hovered: false }); }, onClick: function () { return _this.props.onClickEmoji(name); }, className: "container" },
                React.createElement("span", null, emoji.get(this.props.name)),
                React.createElement("span", { className: "count" }, this.state.count))));
    };
    return Emoji;
}(React.Component));
/**
 * Emoji styles
 */
var EmojiStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 22px;\n  width: 45px;\n  height: 24px;\n  line-height: 22px;\n  border-radius: 15px;\n  ", ";\n  padding: 2px;\n  box-sizing: border-box;\n  user-select: none;\n  display: inline-block;\n  margin-left: 5px;\n\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .count {\n      font-size: 11px;\n      margin-left: 3px;\n    }\n  }\n"], ["\n  font-size: 22px;\n  width: 45px;\n  height: 24px;\n  line-height: 22px;\n  border-radius: 15px;\n  ", ";\n  padding: 2px;\n  box-sizing: border-box;\n  user-select: none;\n  display: inline-block;\n  margin-left: 5px;\n\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .count {\n      font-size: 11px;\n      margin-left: 3px;\n    }\n  }\n"])), function (_a) {
    var hovered = _a.hovered;
    return handleEmojiStyle(hovered);
});
var handleEmojiStyle = function (hovered) {
    var borderColor = 'rgba(29, 28, 29, 0.04)';
    var backgroundColor = 'rgba(29, 28, 29, 0.04)';
    var cursor = 'initial';
    if (hovered) {
        borderColor = 'rgba(29, 28, 29, 0.2)';
        backgroundColor = '#ffffff';
        cursor = 'pointer';
    }
    return "\n    border: 1px solid " + borderColor + "; \n    background: " + backgroundColor + ";\n    cursor: " + cursor + "\n  ";
};
export default Emoji;
var templateObject_1;
//# sourceMappingURL=emoji.js.map