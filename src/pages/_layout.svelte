<script>
	import { api, info, data, cart } from '../components/store.js';
	import { metatags, params, page } from '@roxi/routify';
	import Header from '../components/Header.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		try {
			const res = await fetch($api);
			info.set(await res.json());
		} catch (error) {
			console.error(error);
		}
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
		if ($cart.amount == 0 && $data.cart) {
			$cart = $data.cart;
		}
	}

	$: if ($cart.products) {
		let t = [0, 0];
		$cart.products = $cart.products
			.filter((item, index) => item.amount > 0 && item != null)
			.sort();
		Object.values($cart.products).forEach((val) => {
			// Has many discounts
			if (val.discounts) {
				val.price2 = val.price;
				val.discounts.forEach(function (e) {
					if (e.amount <= val.amount) val.price2 = e.price;
				});
			}
			t[0] += val.total = val.price2 * val.amount;
			t[1] += val.amount;
		});
		if (t[1] == 0 || t[1] == null) {
			$cart.products = [];
		} else {
			$cart.total = t[0];
			$cart.amount = t[1];
		}

		fetch($api + '?path=cart', {
			method: 'POST',
			body: JSON.stringify($cart),
		});
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
				<h1>{@html $data.title}</h1>
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
	{#if $cart.amount > 0 && $page.path != '/kassa'}
		<div id="cart" class="grid">
			<div>
				<div id="cartAmount">Tuotteita: {$cart.amount} kpl</div>
				<div id="cartAmount">Yhteensä: {$cart.total} €</div>
			</div>
			<a class="grid" href="/kassa" rel="nofollow">Kassalle</a>
		</div>
	{/if}
{/if}

<style type="text/scss">
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
		place-content: center;
		h1,
		h3 {
			margin: 0;
			line-height: 1.2;
		}
		h1 {
			font-size: clamp(2rem, 3.8rem, 8vw);
			max-width: 750px;
		}
		h3 {
			font-size: clamp(1.4rem, 2rem, 8vw);
		}
	}
	.tw {
		color: var(--white);
	}
	#cart {
		width: 300px;
		grid-template-columns: 1fr 120px;
		padding: 1rem;
		background: var(--white);
		border: 2px solid var(--orange);
		position: fixed;
		bottom: 15px;
		right: 10px;
		z-index: 100;
		a {
			place-content: center;
			background-color: var(--orange);
			color: var(--white);
			text-transform: uppercase;
		}
	}
</style>
