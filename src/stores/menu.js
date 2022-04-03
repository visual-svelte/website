import { writable } from "svelte/store";
import sidebarData from "$data/dynamicData.js";
export const showHideMenu = writable(false);
export const navOpen = writable(false);
export const treeData = writable(sidebarData);
