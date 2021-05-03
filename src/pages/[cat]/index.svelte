<script>
	import { params } from '@roxi/routify';
	import { data, postData } from '../../components/store.js';

	$: slug = $params.cat.replace(/<\/?[^>]+(>|$)/g, '');
	let check;

	$: if (slug != check) {
		check = slug;
		$postData(slug).then(function (result) {
			data.set(result);
		});
	}
</script>

{#if $data.body}
	<div id="body">{@html $data.body}</div>
{/if}

{#if $data.items}
	<div id="products" class="tc grid bold">
		{#each $data.items as item}
			{#if item.img}
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
			{/if}
		{/each}
	</div>
{/if}
