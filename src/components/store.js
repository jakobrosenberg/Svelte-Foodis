import { readable, writable } from 'svelte/store'

export const api = readable("http://foodis.dataline.fi/api");
export const info = writable({});