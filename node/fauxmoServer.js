'use strict';
 
const FauxMo = require('fauxmojs');
var tools = require('./tools/tools');

let fauxMo = new FauxMo(
  {
    ipAddress: '192.168.1.190',
    devices: [
      {
        name: 'Fernseher',
        port: 11000,
        handler: (action) => {
          if(action == "on") tools.tvOn();
          else if(action == "off") tools.tvOff();
          console.log('Fernseher action:', action);
        }
      },
      {
        name: 'Wohnzimmer Licht',
        port: 11001,
        handler: (action) => {
          if(action == "on") tools.livingRoomLampOn();
          else if(action == "off") tools.livingRoomLampOff();
          console.log('Wohnzimmer Licht action:', action);
        }
      },
      {
        name: 'Internet',
        port: 11002,
        handler: (action) => {
          if(action == "on") tools.usbOn();
          else if(action == "off") tools.usbOff();
          console.log('Internet action:', action);
        }
      },
      {
        name: 'Esszimmer Licht',
        port: 11003,
        handler: (action) => {
          console.log('Esszimmer Licht action:', action);
        }
      },
      {
        name: 'Wohnzimmer Steckdose',
        port: 11004,
        handler: (action) => {
          console.log('Wohnzimmer Steckdose action:', action);
        }
      },
      {
        name: 'Alexa',
        port: 11005,
        handler: (action) => {
          console.log('Alexa action:', action);
        }
      },
      {
        name: 'Multimediacenter',
        port: 11006,
        handler: (action) => {
          console.log("try turning NAS on ...");
          if(action == "on") tools.nasOn();
          console.log('NAS action:', action);
        }
      }
    ]
  });
 
console.log('started..');
