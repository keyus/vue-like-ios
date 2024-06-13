<template>
  <nav>
    <router-link :to="{ name: 'page1' }">page 1</router-link>
    <router-link :to="{ name: 'page2' }">page 2</router-link>
    <router-link :to="{ name: 'page3' }">page 3</router-link>
  </nav>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  grid-template-rows: min-content;
  min-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #125b7f;
  position: sticky;
  top: 0;
  z-index: 1;
}

a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1em 0;
  margin: 0 1em;
  border-bottom: 2px solid transparent;
}

a.router-link-exact-active {
  border-color: inherit;
}

main {
  min-height: 100%;
  display: grid;
  grid-template: 'main';
  flex: 1;
  background-color: white;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
}

main > * {
  grid-area: main; /* Transition: make sections overlap on same cell */
  background-color: white;
  position: relative;
}

main > :first-child {
  z-index: 1; /* Prevent flickering on first frame when transition classes not added yet */
}

/* Transitions */

.next-leave-to {
  animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

.next-enter-to {
  animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-leave-to {
  animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.prev-enter-to {
  animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 0;
}

@keyframes leaveToLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-25%);
    filter: brightness(0.8);
  }
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-25%);
    filter: brightness(0.8);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leaveToRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes enterFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
