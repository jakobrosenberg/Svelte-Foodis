<script>
	import { params } from '@roxi/routify';
	import { api, data } from '../../components/store.js';

	let amount = 1;
	let total = 0;

	async function getResult(e) {
		let response = await fetch($api + '?path=' + e);
		data.set(await response.json());
	}

	$: if ($params.slug) getResult($params.slug);

	$: if ($data && amount) {
		total = $data.price * amount;
	}
</script>

{#if $data}
	<div id="product" class="container double grid">
		<div id="img">
			<picture class="block">
				<source srcset={$data.img[1]} type="image/webp" />
				<source srcset={$data.img[0]} type="image/jpeg" />
				<img src={$data.img[0]} alt={$data.title} />
			</picture>
		</div>
		<div id="productInfo">
			{#if $data.price}
				<div id="price">
					Hinta: <strong>{total.toFixed(2)} €</strong>
				</div>
			{/if}
			<div id="cartIt" class="border grid">
				<div>
					<input
						name="amount"
						type="number"
						bind:value={amount}
						min="1"
						step="1"
						required
					/>
				</div>
				<div><button class="w100">Lisää ostoskoriin</button></div>
			</div>
			{#if $data.body}
				<div id="body">{@html $data.body}</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	#product {
		grid-template-columns: 1fr 1fr;
		grid-gap: 3em;
	}
	#price {
		margin-bottom: 2rem;
		font-size: 1.4rem;
	}
	#cartIt {
		grid-template-columns: 80px 1fr;
		grid-gap: 1rem;
		max-width: 400px;
	}
</style>
