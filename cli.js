#!/usr/bin/env node
const figlet = require("figlet");
const data = require("./lib/data");
const { render } = require("prettyjson");
const colors = require('colors');


function createBannerString(font) {
    return figlet.textSync(
        "DustyCode!",
        {
            font: font,
            horizontalLayout: "universal smushing",
            verticalLayout: "default",
            width: 110,
            whitespaceBreak: true
        }
    )
}

let renderOptions;
let font;
let banner;

const today = new Date()

if(today.getMonth() == 9) {
    font = "Poison"
    renderOptions = {
        dashColor: "red",
        keysColor: "yellow",
        stringColor: "white"
    }
    data["message"] = "Happy Halloween!"
    banner = colors.red(createBannerString(font));
} else {
    font = "Chunky"
    renderOptions = {
        dashColor: "cyan",
        keysColor: "magenta",
        stringColor: "white"
    }
    banner = colors.magenta(createBannerString(font));
}

console.log(banner);

console.log(render(data, renderOptions))