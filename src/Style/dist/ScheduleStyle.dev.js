"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  globalBlockSchedule: {
    borderWidth: 2,
    width: 270,
    padding: 3.5,
    marginBottom: 5
  },
  blockCurrentDate: {
    flexDirection: 'row'
  },
  currentDate: {
    fontSize: 14,
    marginRight: 167,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 20,
    letterSpacing: 0.005
  },
  WorkedTime: {
    fontSize: 14,
    marginRight: 78,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 20,
    letterSpacing: 0.005
  },
  UserSchedule: {
    fontSize: 14,
    marginRight: 130,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 20,
    letterSpacing: 0.005,
    color: 'green'
  },
  Warning: {
    color: 'red'
  },
  buttonContainer: {
    //top:500,
    width: 600,
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    left: 25 //backgroundColor:'silver',

  },
  btnNavigation: {
    position: 'relative',
    margin: 10,
    alignItems: 'center',
    //width: 150,
    //margin:1,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    padding: 5,
    borderColor: '#C0C0C0'
  }
});

var _default = styles;
exports["default"] = _default;