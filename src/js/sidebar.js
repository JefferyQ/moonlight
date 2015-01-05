'use strict';

var $ = require('jquery');

var sidebar = function () {
  var $sidebar = $('#sidebar');
  $sidebar.on('click', '.nav a', function (e) {
    $sidebar.find('.nav li.root-item').removeClass('active');
    $(this).closest('.root-item').addClass('active');
  });
}

module.exports = sidebar;
