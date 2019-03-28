// import barba from '@barba/core';

var socket = io();

// Dummy example to illustrate rules and hooks…
barba.init({
  transitions: [
    {
      name: 'dummy transitions',
      // Apply only when leaving `[data-barba-namespace="home"]`.
      namespace: 'home',
      // Apply only when transitioning to `[data-barba-namespace="products | contact"]`.
      to: {
        namespace: ['products', 'contact'],
      },
      // Apply only if clicked link contains `.cta`.
      custom: ({ current, next, trigger }) =>
        trigger.classList && trigger.classList.contains('cta'),
      // Do leave and enter concurrently.
      sync: true,
      // Available hooks…
      beforeAppear() {},
      appear() {},
      afterAppear() {},
      beforeLeave() {},
      leave() {},
      afterLeave() {},
      beforeEnter() {},
      enter() {},
      afterEnter() {},
    },
  ],
});
