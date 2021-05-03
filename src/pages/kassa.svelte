<script>
	import { cart } from '../components/store';
	import Checkout from '../components/checkout.svelte';
	import Payment from '../components/checkoutPayment.svelte';

	$cart.state = 1;
	let done;

	if (!done && (!$cart || !$cart.products[0])) window.location.replace('/');

	if (window.location.search) {
		let item = window.location.search.substr(1).split('=');
		if (item[0] == 'id') done = parseInt(item[1]);
		else done = '';
	}
</script>

<svelte:head>
	<title>Kassa - Tervetuloa maksamaan</title>
	<meta name="googlebot" content="noindex" />
</svelte:head>

{#if done}
	<h1>Kiitos tilauksesta</h1>
	{#if typeof $cart.done !== 'number'}
		<p>
			Tilauksenne on vastaanotettu ja tiedot on lähetetty sähköpostiin.
			Tilausnumeronne on <strong>{done}</strong>.
		</p>
	{:else}
		<p>
			Tilaus on vahvistettu ja tilaustiedot on lähetetty sähköpostiin.
			<br />
			Tilausnumerosi on {$cart.done}.
		</p>
	{/if}
{:else if $cart.state == 2}
	<Payment />
{:else}
	<Checkout />
{/if}
