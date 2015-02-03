
// Imports
$ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var Pace = require('pace');
var sidebar = require('./sidebar');
var header = require('./header');

//
Pace.start();
//
sidebar();
header();
