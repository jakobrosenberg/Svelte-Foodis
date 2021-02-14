async function postData(url = '', token = '') {
	let headers = token ? {
		'Accept': 'application/json',
		'Authorization': 'Bearer ' + token,
		'Content-Type': 'application/x-www-form-urlencoded'
	} : { 'Accept': 'application/json' }

	const response = await fetch("http://foodis.dataline.fi/" + url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		headers: headers
	});
	var body = await response.json()
	return {
		status: response.status,
		body: body
	}
}
export default postData;


import { ready } from '@roxi/routify'
import { derived, writable } from 'svelte/store'

export const api = writable("https://sportti.org/sites/");

let fetchNum = 0
let resolvedNum = 0

export let fetchInfo = derived(
	ready,
	$ready => {
		return async function (url) {
			fetchNum++
			const result = await fetch(url)
				.then(response => response.json())
			resolvedNum++
			if (resolvedNum === fetchNum)
				$ready()
			return result
		}
	}
)