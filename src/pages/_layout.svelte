<script>
	import { api, info, data, cart } from '../components/store.js';
	import postData from '../components/fetch.js';
	import { metatags, params, page } from '@roxi/routify';
	import Header from '../components/Header.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		postData().then((e) => {
			info.set(e);
		});
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
