var events = require('events');
var eventEmitter = new events.EventEmitter();

/**
 * In different modules of application I can define:
 * 
 * 1) functions as event handlers
 * 2) I can connect (type of) events and handlers
 * 3) I can emit event when something needs to be notified to other (loaded) modules in application
 * 
 * 
 */
// (1) Create an event handler:
var myEventHandler = function (e) {
  console.log('Event detected: ',e);
}

//3) Assign the event handler to an event:
eventEmitter.on('notification', myEventHandler);

//2) Fire the 'scream' event:
eventEmitter.emit('notification',{data:'read your email'});