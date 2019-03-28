// import barba from '@barba/core';

var socket = io();

// Dummy example to illustrate rules and hooks…
barba.init({
  debug: true,
  transitions: [{
    name: 'home',
  }, {
    name: 'about'
  }],
});
