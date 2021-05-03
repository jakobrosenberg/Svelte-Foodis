<script>
	import { info, data, cart, postData } from '../components/store.js';
	import { metatags, params, page } from '@roxi/routify';
	import Header from '../components/Header.svelte';

	if (window) {
		cart.useLocalStorage();
	}

	if (!$info.site) {
		postData().then(function (result) {
			info.set(result);
		});
	}

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
				val.current = val.price;
				val.discounts.forEach(function (e) {
					if (e.amount <= val.amount) val.current = e.price;
				});
			}
			t[0] += val.total = val.current * val.amount;
			t[1] += val.amount;
		});
		if (t[1] == 0 || t[1] == null) {
			$cart.products = [];
		} else {
			$cart.total = t[0];
			$cart.amount = t[1];
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
	{#if $cart.amount > 0 && $page.path != '/kassa' && $page.path != '/maksu'}
		<div id="cart" class="grid">
			<div>
				<div id="cartAmount">Tuotteita: {$cart.amount} kpl</div>
				<div id="cartAmount">Yhteensä: {$cart.total} €</div>
			</div>
			<a class="grid" href="/kassa" rel="nofollow">Kassalle</a>
		</div>
	{/if}
	{#if $info.site && $info.site.payment}
		<footer class="tc">
			<div class="container mx pad">
				<picture class="inl">
					<source src={$info.site.payment[1]} type="image/webp" />
					<source src={$info.site.payment[0]} type="image/jpeg" />
					<img
						class="inl"
						src={$info.site.payment[0]}
						alt="Visma Pay"
					/>
				</picture>
			</div>
		</footer>
	{/if}
{/if}
