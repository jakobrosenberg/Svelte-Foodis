<script>
	import { api, info, data } from '../components/store.js';
	import { metatags, params } from '@roxi/routify';
	import Header from '../components/Header.svelte';

	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await fetch($api);
		info.set(await res.json());
	});

	$: if ($params) {
		if ($info.site || $data.title) {
			metatags.title = $params.cat
				? $data.title + ' | ' + $info.site.title
				: $info.site.title + ' | ' + $info.site.slogan;
			if (data.summary || $info.site.summary)
				metatags.summary = $data.summary
					? $data.summary
					: $info.site.summary;
		}
	}
</script>

{#if $info && $info.site}
	<Header data={$info} />
	<main
		class="block"
		style={'background-image:url(' + $info.site.hero[0] + ')'}
	>
		<div id="hero" class="grid tw up tc">
			{#if $params.cat}
				<h1>{$data.title}</h1>
			{:else}
				<div>
					<h1>{$info.site.title}</h1>
					<h3>{$info.site.slogan}</h3>
				</div>
			{/if}
		</div>
		<div id="content" class="bgw py">
			<div class="container mx">
				<slot />
			</div>
		</div>
	</main>
{/if}

<style>
	main {
		background-position: left top;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	.container {
		max-width: 1200px;
		width: 90%;
	}
	.mx {
		margin-left: auto;
		margin-right: auto;
	}
	#hero {
		padding-top: 96px;
		height: 500px;
		place-content: center;
	}
	#hero h1,
	#hero h3 {
		margin: 0;
		line-height: 1.2;
	}
	#hero h1 {
		font-size: clamp(2rem, 4rem, 10vw);
		max-width: 600px;
	}
	#hero h3 {
		font-size: 1.8rem;
	}
	.tw {
		color: var(--white);
	}
</style>
