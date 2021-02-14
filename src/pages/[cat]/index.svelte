<script>
	import { fetchInfo } from '../../components/store.js';
	import { params, metatags } from '@roxi/routify';

	let data;

	// Get page data
	async function getData(item) {
		$fetchInfo(item).then((e) => {
			data = e;
			metatags.title = 'My Routify app';
			metatags.description = 'Description coming soon...';
		});
	}

	$: slug = $params.cat;
	$: if (slug) getData(slug);
</script>

{#if data}
	<div id="products" class="tc grid up bold">
		{#each data['items'] as item}
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
