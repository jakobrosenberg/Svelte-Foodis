<script>
	import { params } from '@roxi/routify';
	import { api, data } from '../../components/store.js';

	async function getResult(e) {
		let response = await fetch($api + '?path=' + e);
		data.set(await response.json());
	}
	$: if ($params.cat) getResult($params.cat);
</script>

{#if $data.items}
	<div id="products" class="tc grid up bold">
		{#each $data.items as item}
			<a class="block" href={item.path}>
				<picture class="block">
					<source srcset={item.img[1]} type="image/webp" />
					<source srcset={item.img[0]} type="image/jpeg" />
					<img src={item.img[0]} alt={item.title} />
				</picture>
				<div class="title">
					{item.title}
				</div>
				<div class="price">
					{item.price} €
				</div>
			</a>
		{/each}
	</div>
{/if}
