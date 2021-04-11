<script>
	import { ready } from '@roxi/routify';
	import { cart } from '../components/store';
	import postData from '../components/fetch.js';

	let done = 0;
	$: payment = [];

	if (!$cart || !$cart.products[0]) {
		window.location.replace('/');
		$ready();
	}

	function getResult(e, i = '') {
		let body;

		if (!i) {
			body = $cart;
			body.paymentState = e;
		} else {
			body = {
				paymentState: e,
				paymentMethod: i,
				order: $cart.orderId,
			};
		}

		postData('payment', body)
			.then((e) => {
				if (e.redirect || e.message) {
					if (typeof e.redirect !== 'undefined')
						window.location.replace(e.redirect);
					else if (e.message) done = e.message;
				} else {
					$cart.orderId = e.orderId;
					$cart.total = e.total;
					$cart.vat = e.vat;
					payment = e.methods;
				}
				$ready();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	getResult('methods');

	if (window.location.search) {
		let item = window.location.search.substr(1).split('=');
		if (item[0] == 'id') done = parseInt(item[1]);
		else done = 0;
		$ready();
	}
</script>

{#if $cart.products}
	<div id="checkout" class="container rel">
		{#if done == 0}
			<div id="paymentInfo" class="grid">
				<div class="items">
					<h2>Asiakastiedot</h2>
					<p>
						{$cart.customer.name1}
						{$cart.customer.name2}<br />
						{$cart.customer.street}<br />
						{$cart.customer.postal}
						{$cart.customer.area}<br />
						{$cart.customer.phone}<br />
						{$cart.customer.email}
					</p>
					<div id="paymentInfo" class="item">
						<h2>Maksutiedot</h2>

						<table class="w100">
							<tbody>
								<tr>
									<td class="label tl">
										Tuotteet yhteensä
									</td>
									<td class="value tr">
										{$cart.total.toFixed(2)} €
									</td>
								</tr>
								{#if $cart.delivery}
									<tr>
										<td class="label tl"
											>Toimitus, {$cart.delivery.distance
												.text}
										</td>
										<td class="value tr">
											{$cart.delivery.price.toFixed(2)} €
										</td>
									</tr>
								{/if}
								{#if $cart.vat}
									<tr>
										<td class="label tl">ALV</td>
										<td class="value tr">
											{$cart.vat.toFixed(2)} €
										</td>
									</tr>
								{/if}
								<tr>
									<td class="label tl"> Tilaus yhteensä </td>
									<td class="value tr">
										{$cart.total.toFixed(2)} €
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				{#if payment}
					<div id="paymentMethods" class="tc">
						<h2>Maksuvaihtoehdot</h2>
						<div id="methods">
							{#each payment as item}
								<button
									class="inl noBor"
									name="paymentMethod"
									value={item.value}
									on:click={() =>
										getResult('create', item.value)}
								>
									<figure>
										<img src={item.img} alt={item.name} />
										<figcaption>{item.name}</figcaption>
									</figure>
								</button>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<h1>Kiitos tilauksesta</h1>
			{#if typeof done !== 'number'}
				<p>{done}</p>
			{:else}
				<p>
					Tilaus on vahvistettu ja tilaustiedot on lähetetty
					sähköpostiin.
					<br />
					Tilausnumerosi on {done}.
				</p>
			{/if}
		{/if}
	</div>
{/if}

<style>
	#paymentInfo {
		grid-template-columns: 320px 1fr;
		grid-gap: 3rem;
	}
	#paymentMethods button {
		background-color: transparent;
		margin: 0.4rem;
	}
</style>
