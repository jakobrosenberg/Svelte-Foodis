<script>
	import { ready } from '@roxi/routify';
	import postData from './fetch.js';

	let active;
	$: search = '';
	$: results = [];

	function getResult() {
		let item = search.replace(/[&\/\\#,()$~%@^'"!:*?<>{}]/g, '');
		item = item.replace(' ', '+');
		postData('search=' + item)
			.then((e) => {
				results = e;
			})
			.catch((err) => {
				console.log(err);
			});
		$ready();
	}

	$: if (search.length >= 3) getResult();
	$: if (search.length < 3 && results[0]) results = [];
</script>

<div id="searchIcon" class="rel">
	<button class="grid cell noBor" on:click={() => active = !active}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 24 24"
		>
			<path
				d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
			/>
		</svg>
	</button>
	{#if active}
		<div id="searchForm" class="abs">
			<input
				type="search"
				placeholder="hakusanat"
				minlength="3"
				maxlength="50"
				bind:value={search}
			/>
			{#if results[0]}
				<div id="results" class="bgw tl">
					{#each results as item}
						<a
							class="block"
							href={item.path}
							on:click={() => active = ''}>{item.title}</a
						>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</div>
