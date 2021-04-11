<script>
	import { ready, goto } from '@roxi/routify';
	import { cart, data } from '../components/store';
	import postData from '../components/fetch.js';

	let done;

	if (!done && !$cart.products[0]) {
		window.location.replace('/');
		$ready();
	}

	$data = {};
	let delivery = { title: 'Toimitusmaksu', price: 0 };
	let form;
	let error;

	$cart.customer = {
		name1: '',
		name2: '',
		street: '',
		postal: '',
		area: '',
		phone: '',
		email: '',
	};

	let deliveryPrices = {
		price: [
			{
				distance: 5,
				price: 4.9,
			},
			{
				distance: 10,
				price: 8.9,
			},
			{
				distance: 20,
				price: 12.9,
			},
		],
		pcs: [
			{
				amount: 5,
				discount: 0,
			},
			{
				amount: 7,
				discount: 1,
			},
			{
				amount: 10,
				discount: 2,
			},
			{
				amount: 14,
				discount: 3,
			},
		],
	};

	$: if (delivery.distance) {
		if (delivery.distance.value > 20) form = 1;
		else {
			if (form) form = '';

			deliveryPrices.price.forEach(function (v) {
				if (delivery.distance.value <= v.distance) {
					delivery.price = v.price;
					return true;
				}
			});

			deliveryPrices.pcs.forEach(function (v) {
				if ($cart.amount <= v.amount) {
					delivery.price = delivery.price - v.discount;
					return true;
				}
			});
		}
	}

	function getResult(e, body) {
		postData(e, body)
			.then((e) => {
				if (e.error) error = e.error;
				else if (e.distance)
					delivery.distance = {
						text: e.distance.text,
						value: e.distance.value / 1000,
					};
				else if (e.message) {
					done = e.message;
					cart.set({});
				} else data.set(e);
				$ready();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	// Delete item
	function del(i) {
		$cart.products = $cart.products
			.filter((item, index) => index !== parseInt(i) && item != null)
			.sort();
	}

	// Totals
	$: total = $cart.total + delivery.price;
	$: vat = (10 / 100) * total;

	let inputs = [
		{
			title: 'Etunimi',
			type: 'text',
			name: 'name1',
			min: 2,
			max: 30,
			req: 1,
		},
		{
			title: 'Sukunimi',
			type: 'text',
			name: 'name2',
			min: 2,
			max: 30,
			req: 1,
		},
		{
			title: 'Puhelin',
			type: 'text',
			name: 'phone',
			min: 5,
			max: 15,
			req: 1,
		},
		{
			title: 'Sähköposti',
			type: 'email',
			name: 'email',
			min: 6,
			max: 100,
			req: 1,
		},
		{
			title: 'Katuosoite',
			type: 'text',
			name: 'street',
			min: 5,
			max: 50,
		},
		{
			title: 'Postinumero',
			type: 'text',
			name: 'postal',
			min: 5,
			max: 5,
		},
		{
			title: 'Kaupunki',
			type: 'text',
			name: 'area',
			min: 3,
			max: 50,
		},
	];
	function sendSubmit(e) {
		if (delivery) $cart.delivery = delivery;
		$cart.total = total;
		$cart.vat = vat;
		if (parseInt(e) == 2) getResult('offer', $cart);
		else $goto('/maksu');
		$ready();
	}
</script>

<svelte:head>
	<title>Kassa - Tervetuloa maksamaan</title>
	<meta name="googlebot" content="noindex" />
</svelte:head>

{#if $cart.products[0]}
	<div id="checkout" class="container rel">
		{#if !done}
			{#if $data.body}
				<div class="body">{@html $data.body}</div>
			{/if}
			<div id="tables" class="grid">
				<div class="item">
					<h2>Tuotteet</h2>
					<table id="productList" class="w100" rules="rows">
						<thead>
							<tr>
								<th class="tl">Tuote</th>
								<th class="tc">Hinta</th>
								<th class="tc">Määrä</th>
								<th class="tc">Yhteensä</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{#each $cart.products as item, i}
								{#if item != null}
									<tr>
										<td class="product tl">
											<strong>
												{item.title}
												{#if item.size}
													- {item.size}
												{/if}
											</strong>
											<br />
											{#if item.id}
												<small>{item.id}</small>
											{/if}
										</td>
										<td class="price tc pt">
											<span>Hinta:</span>
											{item.current.toFixed(2)}
										</td>
										<td class="amount tc">
											<span>Määrä:</span>
											<input
												type="number"
												name="amount"
												bind:value={$cart.products[i]
													.amount}
											/>
										</td>
										<td class="total tc pt">
											<span>Yhteensä:</span>
											{item.total.toFixed(2)}
										</td>
										<td class="tr pt">
											<button
												class="del noBor"
												on:click={() => del(i)}
											>
												X
											</button>
										</td>
									</tr>
								{/if}
							{/each}
						</tbody>
					</table>
				</div>
				<div id="paymentInfo" class="item">
					<h2>Maksutiedot</h2>

					<table class="w100">
						<tbody>
							<tr>
								<td class="label tl"> Tuotteet yhteensä </td>
								<td class="value tr">
									{$cart.total.toFixed(2)} €
								</td>
							</tr>
							{#if delivery.distance && !form}
								<tr>
									<td class="label tl"
										>Toimitus, {delivery.distance.text}
									</td>
									<td class="value tr">
										{delivery.price.toFixed(2)} €
									</td>
								</tr>
							{/if}
							<tr>
								<td class="label tl">ALV 10%</td>
								<td class="value tr">
									{vat.toFixed(2)} €
								</td>
							</tr>
							<tr>
								<td class="label tl"> Tilaus yhteensä </td>
								<td class="value tr">
									{total.toFixed(2)} €
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="items">
				<div id="client" class="item">
					<h2>Asiakastiedot</h2>

					<div class="grid">
						{#each inputs as item}
							<div class="item">
								<label>
									<span class="block">{item.title}</span>
									<input
										id={item.name}
										class="w100"
										bind:value={$cart.customer[item.name]}
										name={item.name}
									/>
								</label>
							</div>
						{/each}
					</div>
				</div>
			</div>

			{#if $cart.customer.name1 && $cart.customer.name2 && $cart.customer.street && $cart.customer.postal && $cart.customer.area}
				<div id="payment" class="tc pad">
					{#if form}
						<p>
							Emme toimita verkkokaupasta yli 20 km säteelle,
							mutta voitte olla yhteydessä asiakaspalveluun.
						</p>
						<button
							id="done"
							class="end up"
							name="done"
							type="submit"
							on:click={() => sendSubmit(2)}
						>
							Lähetä tarjouspyyntö
						</button>
					{:else if delivery.distance}
						<button
							id="done"
							class="end up"
							name="done"
							type="submit"
							on:click={() => sendSubmit(1)}
						>
							Vahvista tilaus
						</button>
					{:else}
						{#if error}
							<p>{error}</p>
						{/if}
						<button
							id="done"
							class="end up"
							name="shipping"
							on:click={() =>
								getResult('distance', {
									address:
										$cart.customer.street +
										'+' +
										$cart.customer.postal +
										'+' +
										$cart.customer.area,
								})}
						>
							Laske tomituskulut
						</button>
					{/if}
				</div>
			{/if}
		{:else}
			{@html done}
		{/if}
	</div>
{/if}

<style>
	#payment button {
		border: 1px solid var(--black);
	}
</style>
