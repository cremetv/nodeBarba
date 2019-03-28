'use strict';

// import barba from '@barba/core';

var socket = io();

// Dummy example to illustrate rules and hooks…
barba.init({
  transitions: [{
    name: 'dummy transitions',
    // Apply only when leaving `[data-barba-namespace="home"]`.
    namespace: 'home',
    // Apply only when transitioning to `[data-barba-namespace="products | contact"]`.
    to: {
      namespace: ['products', 'contact']
    },
    // Apply only if clicked link contains `.cta`.
    custom: function custom(_ref) {
      var current = _ref.current,
          next = _ref.next,
          trigger = _ref.trigger;
      return trigger.classList && trigger.classList.contains('cta');
    },
    // Do leave and enter concurrently.
    sync: true,
    // Available hooks…
    beforeAppear: function beforeAppear() {},
    appear: function appear() {},
    afterAppear: function afterAppear() {},
    beforeLeave: function beforeLeave() {},
    leave: function leave() {},
    afterLeave: function afterLeave() {},
    beforeEnter: function beforeEnter() {},
    enter: function enter() {},
    afterEnter: function afterEnter() {}
  }]
});