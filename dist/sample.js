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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from 'react';
import EmojiSelector from './EmojiSelector';
var Sample = /** @class */ (function (_super) {
    __extends(Sample, _super);
    function Sample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            emojis: [
                {
                    name: 'coffee',
                    count: 1
                }, {
                    name: 'heart',
                    count: 5
                }
            ]
        };
        return _this;
    }
    Sample.prototype.onClickEmoji = function (name) {
        var emojiList = __spreadArrays(this.state.emojis);
        console.log(this.state);
        for (var _i = 0, emojiList_1 = emojiList; _i < emojiList_1.length; _i++) {
            var e = emojiList_1[_i];
            if (e.name === name) {
                e.count++;
                break;
            }
        }
        this.setState({
            emojis: emojiList
        });
    };
    Sample.prototype.onAddEmoji = function (name) {
        var emojiList = __spreadArrays(this.state.emojis);
        emojiList.push({
            name: name,
            count: 1
        });
        this.setState({
            emojis: emojiList
        });
    };
    Sample.prototype.render = function () {
        var _this = this;
        return (React.createElement(EmojiSelector, { emojis: this.state.emojis, onClickEmoji: function (name) { return _this.onClickEmoji(name); }, onAddEmoji: function (name) { return _this.onAddEmoji(name); } }));
    };
    return Sample;
}(React.Component));
//# sourceMappingURL=sample.js.map