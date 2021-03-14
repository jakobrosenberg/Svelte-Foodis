<script>
	import { cart, data } from '../components/store';
	import Opt from '../components/option.svelte';
	import { onMount } from 'svelte';
	import postData from '../components/fetch.js';

	if (!$cart.products[0]) window.location.replace('/');

	$cart.customer = {
		name1: 'Timo',
		name2: 'Anttila',
		street: 'Testikuja 8',
		postal: 37130,
		area: 'Nokia',
		phone: '0407746121',
		email: 'timo@tuspe.com',
	};

	if (!$cart.customer)
		$cart.customer = {
			name1: 'Timo',
			name2: 'Anttila',
			street: 'Testikuja 8',
			postal: 37130,
			area: 'Nokia',
			phone: '0407746121',
			email: 'timo@tuspe.com',
		};
	$data = {};
	$: item = '';
	let ready = 0;
	let title = 'Kassa';
	let delivery = { price: 0 };

	function getResult(e, body) {
		postData(e, body).then((e) => {
			if (e.redirect || e.message) {
				if (typeof e.redirect !== 'undefined')
					window.location.replace(e.redirect);
				else if (e.message) ready = e.message;
			} else data.set(e);
			data.set(e);
		});
	}

	onMount(async () => {
		getResult('path=kassa');
	});

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
	async function sendSubmit(event) {
		let body = {
			cart: JSON.stringify($cart.products),
			delivery: JSON.stringify(delivery),
			price: total,
			vat: vat,
		};
		console.log(body);

		getResult('path=kassa&payment=1', body);
	}

	if (window.location.search) {
		let item = window.location.search.substr(1).split('=');
		if (item[0] == 'id') ready = parseInt(item[1]);
		else ready = 0;
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

{#if $cart.products[0]}
	<div id="checkout" class="container rel">
		{#if ready == 0}
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
											{item.price2.toFixed(2)}
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
					{#if $data.delivery}
						<div id="shipping">
							<label>
								<span class="block"><h2>Toimitustapa</h2></span>
								<select bind:value={item}>
									{#each $data.delivery as item}
										<Opt
											id={item.id}
											name={item.name}
											price={item.price}
										/>
									{/each}
								</select>
							</label>
						</div>
					{/if}
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
							{#if delivery.price > 0}
								<tr>
									<td class="label tl">Kuljetus</td>
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
			<form class="items" on:submit|preventDefault={sendSubmit}>
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
										required
									/>
								</label>
							</div>
						{/each}
					</div>
				</div>

				<div id="payment" class="tc">
					<button id="ready" class="end" name="ready" type="submit"
						>Vahvista tilaus</button
					>
				</div>
			</form>
		{:else}
			<h1>Kiitos tilauksesta</h1>
			{#if typeof ready !== 'number'}
				<p>{ready}</p>
			{:else}
				<p>
					Tilaus on vahvistettu ja tilaustiedot on lähetetty
					sähköpostiin.
					<br />
					Tilausnumerosi on {ready}.
				</p>
			{/if}
		{/if}
	</div>
{/if}
