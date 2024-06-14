"use client";
"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var action_1 = require("@/app/lib/action");
function Form(_a) {
    var players = _a.players;
    var initialState = { message: "", error: {} };
    var _b = react_dom_1.useFormState(action_1.createSubscribe, initialState), state = _b[0], dispatch = _b[1];
    return React.createElement("form", { action: dispatch });
}
exports["default"] = Form;
