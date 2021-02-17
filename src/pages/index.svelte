<script>
	import { info, data } from '../components/store.js';
	if ($info.site)
		data.set({ title: $info.site.title, slogan: $info.site.slogan });
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
