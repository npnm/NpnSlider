#!/usr/bin/env node

const fs = require('fs-extra');
const jsdom = require('jsdom');
const {
    JSDOM
} = jsdom;
const path = require('path');

fs.readJson(__dirname + '/build-config.json', (err, config) => {
    if (err) {
        console.error(err);
        return;
    }
    var source = "";
    var destination = "";
    if (config.copyDir) {
        if (config.basePath && config.basePath != "") {
            source = path.join(__dirname, config.basePath, config.copyDir.source);
            destination = path.join(__dirname, config.basePath, config.copyDir.destination);
        } else {
            source = config.copyDir.source;
            destination = config.copyDir.destination;
        }
    }
    if (source != "" && destination != "") {
        //copy directory
        fs.copy(source, destination, err => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Files are copied successfully from ${config.copyDir.source} to ${config.copyDir.destination}`);
            if (config.htmlBaseUrl) {
                updateIndexPage(destination, config.htmlBaseUrl);
            }
        });
    } else {
        console.error("no valid source and destination!");
    }
});


function updateIndexPage(fileocation, htmlBaseUrl) {
    var filePath = path.join(fileocation, "index.html");
    fs.exists(filePath, exists => {
        if (exists) {
            JSDOM.fromFile(filePath, {}).then(dom => {
                dom.window.document.querySelector("base").setAttribute("href", htmlBaseUrl);
                var finalHtml = dom.serialize();
                fs.writeFile(filePath, finalHtml, err => {
                    if (err) {
                        console.err(err);
                        return;
                    }
                    console.log("Updated index page successfully");
                })
            })
        }
    })
}