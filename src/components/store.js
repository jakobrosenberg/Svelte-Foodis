import { readable, writable, derived } from 'svelte/store'
import { ready } from '@roxi/routify';

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

let fetchNum = 0
let resolvedNum = 0

export let postData = derived(
	ready,
	$ready => {
		return async function (url = "", data = null, token = null) {
			fetchNum++
			let method = data ? "POST" : "GET";
			const result = await fetch(`http://foodis.dataline.fi/pw/${url}`, {
				method: method,
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					...(token ? { Authorization: `Bearer ${token}` } : undefined),
				},
				body: data ? JSON.stringify(data) : null,
			})
				.then(response => response.json())
			resolvedNum++
			if (resolvedNum === fetchNum)
				$ready()
			return result
		}
	}
)