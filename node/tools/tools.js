// tools.js
var exec = require('child_process').exec;

module.exports = {
  tvOn: function () {
    exec("sudo python /home/pi/share/python/tvOn.py")
  },
  tvOff: function () {
    exec("sudo python /home/pi/share/python/tvOff.py")
  },
  livingRoomLampOn: function () {
    exec("sudo python /home/pi/share/python/livingRoomLampOn.py")
  },
  livingRoomLampOff: function () {
    exec("sudo python /home/pi/share/python/livingRoomLampOff.py")
  },
  nasOn: function () {
    exec("sudo sh /home/pi/share/wakenas.sh")
  },
  usbOff: function () {
    exec("sudo python /home/pi/share/python/usbOff.py")
  },
  usbOn: function () {
    exec("sudo python /home/pi/share/python/usbOn.py")
  },
};


