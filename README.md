# [PushUpsW3](http://alefteris.github.io/pushupsw3/) [![Build Status](https://api.travis-ci.org/alefteris/pushupsw3.png?branch=master)](https://travis-ci.org/alefteris/pushupsw3)

<a href="http://alefteris.github.io/pushupsw3/">
  <img src="http://alefteris.github.io/pushupsw3/apple-touch-icon-114x114-precomposed.png" width="114">
</a>

PushUpsW3 is a push-ups mobile web app.

## Features

 * Count your push-ups
 * more features coming in the future...

### Tools

 * [Yeoman](http://yeoman.io/): Collection of tools and best practices to make developing for the web better.
 * [generator-backbone](https://github.com/yeoman/generator-backbone): Yeoman generator for Backbone.js
 * [Grunt](http://gruntjs.com/): Used for building, previewing, deploying the app and [other tasks](https://github.com/alefteris/pushupsw3/blob/master/Gruntfile.js)
 * [Bower](http://bower.io/): Used for installing the third-party libraries
 * [SASS + Compass](http://compass-style.org/): Used for making CSS authoring easier

### Libs

Here are the JavaScript libraries I used. You can also see what I used in the [bower.json](https://github.com/alefteris/pushupsw3/blob/master/bower.json) file.

 * [jQuery](http://jquery.com/): Needs no introduction. Plain awesomeness
 * [Underscore.js](http://underscorejs.org/): Utility-belt library, provides functional programming support. Dependency of Backbone.js
 * [Backbone.js](http://backbonejs.org/): Lightweight MVC framework

## How to get it

### The usual way of the web

Just visit <a href="http://alefteris.github.io/pushupsw3/">http://alefteris.github.io/pushupsw3/</a> in your browser. Bookmark it if you like it.

### Install it as an app

To install it as an app, go to the app settings in the side panel. This is supported in Firefox for Android and Firefox OS.

### Install it from a web app store

Install it as an app from the Firefox Marketplace.

<a href="https://marketplace.firefox.com/app/pushupsw3/">
  <img src="http://alefteris.github.io/pushupsw3/images-other/firefox-marketplace-badge.png" width="206" height="45">
</a>

## Browser support

The list of browsers I have tested with are:

 * Firefox
 * Chrome
 * Firefox OS
 * Firefox for Android
 * Chrome for Android
 * Opera for Android
 * Android 4.1 browser

## Build Instructions

You will need to have [Node.js](http://nodejs.org/) installed in your system.

``` shell
npm install -g grunt-cli bower
git clone git://github.com/alefteris/pushupsw3.git
cd pushupsw3
npm install
bower install
grunt server
```

## License

Unless otherwise stated, this app is licensed as: MIT License. Copyright © Thanos Lefteris
