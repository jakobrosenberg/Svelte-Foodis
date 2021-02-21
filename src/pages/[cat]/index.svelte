<script>
	import { params } from '@roxi/routify';
	import { api, data } from '../../components/store.js';

	async function getResult(e) {
		try {
			let response = await fetch($api + '?path=' + e);
			data.set(await response.json());
		} catch (error) {
			console.error(error);
		}
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
					{item.price.toFixed(2)} €
				</div>
				{#if item.extra}
					<div class="extra">
						{#each item.extra as item}
							<div class="inl">
								<span class="grid cell">
									{item.abbr}
								</span>
							</div>
						{/each}
					</div>
				{/if}
			</a>
		{/each}
	</div>
{/if}
