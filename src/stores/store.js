import { writable } from "svelte/store";
import { crossfade } from "svelte/transition";
import { flip } from "svelte/animate";

const [send, receive] = crossfade({});

const { update, subscribe } = writable({
  container1: [],
  container2: [
    { name: "d3-axis", id: 1 },
    { name: "d3-color", id: 2 },
    { name: "d3-transition", id: 3 },
    { name: "d3-zoom", id: 4 },
    { name: "d3-scale", id: 5 },
  ],
  send,
  receive,
  flip,
});

const store = {
  subscribe,
  updateContainers: (from, to, item) => {
    update((storeItems) => {
      return {
        [from]: [...storeItems[from].filter((e) => e.id !== item.id)],
        [to]: [...storeItems[to], item],
      };
    });
  },
};

export default store;
