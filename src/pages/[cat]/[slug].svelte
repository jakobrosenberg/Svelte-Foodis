<script>
	import { params, metatags } from '@roxi/routify';
	import { api } from '../../components/store.js';
	let data;
	async function getResult(e) {
		let response = await fetch($api + '?path=' + e);
		data = await response.json();
		return data;
	}

	$: if ($params.slug) getResult($params.slug);
</script>

{#if data}
	<div id="product" class="container double grid">
		<div id="img">
			<picture class="block">
				<source srcset={data.img[1]} type="image/webp" />
				<source srcset={data.img[0]} type="image/jpeg" />
				<img src={data.img[0]} alt={data.title} />
			</picture>
		</div>
		<div id="productInfo">
			<h1>{data.title}</h1>
			{#if data.price}
				<div id="price">{data.price} €</div>
			{/if}
			{#if data.body}
				<div id="body">{@html data.body}</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	#product {
		padding: 3rem;
		grid-template-columns: 1fr 1fr;
		grid-gap: 3em;
	}
</style>
