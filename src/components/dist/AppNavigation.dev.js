"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppNavigation = void 0;

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _MainPage = require("./Screens/MainPage");

var _ZodiacSignPage = require("./Screens/ZodiacSignPage");

var _CompatibilityConfigurationPage = require("./Screens/CompatibilityConfigurationPage");

var _CompatibilityPage = require("./Screens/CompatibilityPage");

var Navigator = (0, _reactNavigationStack.createStackNavigator)({
  Main: _MainPage.MainPage,
  ZodiacSign: _ZodiacSignPage.ZodiacSignPage,
  CompatibilityConfiguration: _CompatibilityConfigurationPage.CompatibilityConfigurationPage,
  Compatibility: _CompatibilityPage.CompatibilityPage
}, {
  initialRouteName: 'Main',
  headerMode: 'none'
});
var AppNavigation = (0, _reactNavigation.createAppContainer)(Navigator);
exports.AppNavigation = AppNavigation;