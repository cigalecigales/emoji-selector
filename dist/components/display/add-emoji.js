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
import EmojiSelector from '../selector/emoji-selector';
/**
 * AddEmoji component
 */
var AddEmoji = /** @class */ (function (_super) {
    __extends(AddEmoji, _super);
    function AddEmoji(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: false,
            show: false
        };
        return _this;
    }
    AddEmoji.prototype.onClick = function () {
        this.setState({
            show: !this.state.show
        });
    };
    AddEmoji.prototype.render = function () {
        var _this = this;
        return (React.createElement(AddEmojiStyle, { hovered: this.state.hovered },
            React.createElement("div", { onMouseEnter: function () { _this.setState({ hovered: true }); }, onMouseLeave: function () { _this.setState({ hovered: false }); }, onClick: function () { return _this.onClick(); } },
                React.createElement("span", null, "+")),
            React.createElement(EmojiSelector, { show: this.state.show, onAddEmoji: this.props.onAddEmoji })));
    };
    return AddEmoji;
}(React.Component));
/**
 * AddEmoji styles
 */
var AddEmojiStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 12px;\n  width: 40px;\n  height: 24px;\n  line-height: 22px;\n  border-radius: 15px;\n  ", ";\n  box-sizing: border-box;\n  user-select: none;\n  display: inline-block;\n  margin-left: 5px;\n  text-align: center;\n  position: relative;\n"], ["\n  font-size: 12px;\n  width: 40px;\n  height: 24px;\n  line-height: 22px;\n  border-radius: 15px;\n  ", ";\n  box-sizing: border-box;\n  user-select: none;\n  display: inline-block;\n  margin-left: 5px;\n  text-align: center;\n  position: relative;\n"])), function (_a) {
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
export default AddEmoji;
var templateObject_1;
//# sourceMappingURL=add-emoji.js.map