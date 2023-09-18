#!/usr/bin/env node
const figlet = require("figlet");
const data = require("./lib/data");
const { render } = require("prettyjson");

const renderOptions = {
    dashColor: "cyan",
    keysColor: "magenta",
    stringColor: "white"
}

console.log(figlet.textSync(
    "DustyCode!",
    {
        font: "Chunky",
        horizontalLayout: "universal smushing",
        verticalLayout: "default",
        width: 110,
        whitespaceBreak: true
    }
));

console.log(render(data, renderOptions))