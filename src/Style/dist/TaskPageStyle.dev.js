"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    padding: 5
  },
  notificationAndBlockTask: {
    flexDirection: 'row'
  },
  globalContainerTask: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    width: 347
  },
  blocksInTasks: {
    flexDirection: 'row',
    borderColor: 'silver',
    borderBottomWidth: 1,
    width: 320
  },
  statusAndNumberTaskAndPeriodOfExecution: {
    width: 230
  },
  taskName: {
    borderColor: 'silver',
    borderBottomWidth: 1,
    width: 320,
    marginBottom: 5
  },
  customerAndExecutor: {
    color: 'silver'
  },
  blockTaskPeriodOfExecution: {
    flexDirection: 'row'
  },
  notification: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 76
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