<script>
	import { info } from '../components/store.js';
	import { metatags } from '@roxi/routify';
	metatags.title = $info.site.title + ' | ' + $info.site.slogan;
	metatags.description = 'Description coming soon...';
</script>

<div id="products" class="tc grid up bold">
	{#each $info.nav as item}
		<a class="block" href={item.path}>
			<figure class="block">
				<picture class="block">
					<source srcset={item.img[1]} type="image/webp" />
					<source srcset={item.img[0]} type="image/jpeg" />
					<img src={item.img[0]} alt={item.title} />
				</picture>
				<figcaption class="block">
					{item.title}
				</figcaption>
			</figure>
		</a>
	{/each}
</div>
