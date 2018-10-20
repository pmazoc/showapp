'use strict';

angular.module('myApp.version', [
  'showapp.version.interpolate-filter',
  'showapp.version.version-directive'
])

.value('version', '0.1');
