import { ready } from '@roxi/routify'
import { derived, writable } from 'svelte/store'

export const info = writable({});

let fetchNum = 0
let resolvedNum = 0

export let fetchInfo = derived(
	ready,
	$ready => {
		return async function (url = "") {
			fetchNum++
			if (url) url = "?path=" + url
			const result = await fetch("http://foodis.dataline.fi/" + url)
				.then(response => response.json())
			resolvedNum++
			if (resolvedNum === fetchNum)
				$ready()
			return result
		}
	}
)