import { writable } from "svelte/store";
// import donationData from '$data/donations.js';

// import { data } from 'assets/data/donations.json';
/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const tableOfContents = writable([]);
