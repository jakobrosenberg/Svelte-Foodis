import { readable, writable } from 'svelte/store'

export const api = readable("http://foodis.dataline.fi/pw/");
export const site = readable("Foodis");
export const info = writable({});
export const data = writable({});