import { readable, writable } from 'svelte/store'

export const api = readable("http://foodis.dataline.fi/pw/");
export const site = readable("Foodis");
export const info = writable({});
export const data = writable({});

const local = (key, startValue) => {
	const {
		subscribe,
		set,
		update
	} = writable(startValue);

	return {
		subscribe,
		set,
		update,
		useLocalStorage: () => {
			const json = localStorage.getItem(key);
			if (json) {
				set(JSON.parse(json));
			}

			subscribe(current => {
				localStorage.setItem(key, JSON.stringify(current));
			});
		}
	};
}

export const cart = local("cart", { total: 0, amount: 0, products: [] });