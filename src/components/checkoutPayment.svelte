<script>
	import { ready } from '@roxi/routify';
	import { cart, postData } from './store';

	$: payment = [];

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

		$postData('payment', body).then(function (result) {
			if (result.redirect || result.message) {
				if (typeof result.redirect !== 'undefined')
					window.location.replace(result.redirect);
				else if (result.message) $cart.done = result.message;
			} else {
				$cart.orderId = result.orderId;
				$cart.total = result.total;
				$cart.vat = result.vat;
				payment = result.methods;
			}
			$ready();
		});
	}

	$: if (!payment[0]) getResult('methods');
</script>

{#if $cart.products}
	<div id="checkout" class="container rel">
		<div id="paymentInfo" class="grid">
			<div class="items">
				<h2 class="mb-4">Asiakastiedot</h2>
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
					<h2 class="mt-4 mb-4">Maksutiedot</h2>

					<table class="w100">
						<tbody>
							<tr>
								<td class="label tl"> Tuotteet yhteensä </td>
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
					<h2 class="mb-4">Maksuvaihtoehdot</h2>
					<div id="methods">
						{#each payment as item}
							<button
								class="inl noBor"
								name="paymentMethod"
								value={item.value}
								on:click={() => getResult('create', item.value)}
							>
								<img src={item.img} alt={item.name} />
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</div>
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
