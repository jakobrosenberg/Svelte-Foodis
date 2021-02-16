<script>
	import { api, info } from '../components/store.js';
	import Header from '../components/Header.svelte';

	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await fetch($api);
		info.set(await res.json());
	});
</script>

{#if $info && $info.site}
	<Header data={$info} />
	<main
		class="block"
		style={'background-image:url(' + $info.site.hero[0] + ')'}
	>
		<div id="content" class="bgw">
			<slot />
		</div>
	</main>
{/if}

<style>
	main {
		padding-top: 500px;
		background-position: left top;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
</style>
