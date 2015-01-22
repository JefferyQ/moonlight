'use strict';

var $ = require('jquery');

var header = function () {
  var $moonlight = $('.moonlight');
  var $header = $('#header');
  $header.on('click', '.sidebar-collapsed', function (e) {
    if ($moonlight.hasClass('sidebar-collapsed')) {
      $moonlight.removeClass('sidebar-collapsed');
    } else {
      $moonlight.addClass('sidebar-collapsed');
    };
  });
  $header.on('click', '.sidebar-hidden', function (e) {
    if ($moonlight.hasClass('sidebar-hidden')) {
      $moonlight.removeClass('sidebar-hidden');
    } else {
      $moonlight.addClass('sidebar-hidden');
    };
  });
  $header.on('click', '.header-fixed', function (e) {
    if ($moonlight.hasClass('header-fixed')) {
      $moonlight.removeClass('header-fixed');
    } else {
      $moonlight.addClass('header-fixed');
    };
  });
}

module.exports = header;
