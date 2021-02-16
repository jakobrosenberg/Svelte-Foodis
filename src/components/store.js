import { readable, writable } from 'svelte/store'

export const api = readable("http://foodis.dataline.fi/pw/");
export const info = writable({});