<script>
	import { params, ready } from '@roxi/routify';
	import { data, cart, postData } from '../../../components/store.js';

	$: amount = 1;
	$: min = 1;
	$: price = $data.price;
	$: total = amount * price;

	function cartIt() {
		let item = {
			id: $data.id,
			title: $data.title,
			price: $data.price,
			current: price,
			amount: amount,
			vat: 14,
			total: total,
		};
		if ($data.amountDiscounts) item.amountDiscounts;
		$cart.total += total;
		$cart.amount += amount;
		$cart.products.push(item);
	}

	$: slug = $params.slug.replace(/<\/?[^>]+(>|$)/g, '');
	
	let check;

	$: if (slug != check) {
		check = slug;
		postData(slug).then(function (result) {
			data.set(result);
			if ($data.amountDiscounts && $data.amountDiscounts[0])
				amount = min = $data.amountDiscounts[0].amount;
			$ready()
		});
	}

	$: if ($data && amount) {
		// Has many discounts
		if ($data.amountDiscounts) {
			price = $data.price;
			$data.amountDiscounts.forEach(function (e) {
				if (e.amount <= amount) price = e.price;
			});
		}
		total = price * amount;
	}
</script>

{#if $data}
	<div id="product" class="container double grid">
		<div id="img">
			{#if $data.img}
				<picture class="block">
					<source srcset={$data.img[0][1]} type="image/webp" />
					<source srcset={$data.img[0][0]} type="image/jpeg" />
					<img src={$data.img[0][0]} alt={$data.title} />
				</picture>
			{/if}
		</div>
		<div id="productInfo">
			{#if $data.price}
				<div id="price">
					Hinta: <strong>{price.toFixed(2)} €</strong>
					{#if amount > 1}
						<br />
						<small>
							Yhteensä: <strong>{total.toFixed(2)} €</strong>
						</small>
					{/if}
				</div>
			{/if}
			<div id="inputs">
				<div id="cartIt" class="border grid">
					<div>
						<input
							name="amount"
							type="number"
							bind:value={amount}
							{min}
							step="1"
							required
						/>
					</div>
					<div>
						<button class="w100" on:click={cartIt}>
							Lisää ostoskoriin
						</button>
					</div>
				</div>
			</div>
			<div class="content">
				{#if $data.body}
					<div id="body">{@html $data.body}</div>
				{/if}
				{#if $data.docs}
					<div id="docs">
						<ul>
							{#each $data.docs as item}
								<li>
									<a href={item.value} rel="nofollow">
										{item.label} &rarr;
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if $data.extra}
					<div id="extra">
						<ul>
							{#each $data.extra as item}
								<li>{@html item.name}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
