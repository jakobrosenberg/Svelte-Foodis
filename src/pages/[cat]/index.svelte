<script>
	import { params, ready } from '@roxi/routify';
	import { data } from '../../components/store.js';
	import postData from '../../components/fetch.js';

	function getResult(e) {
		postData(e).then((e) => {
			data.set(e);
			$ready();
		});
	}
	$: if ($params.cat) getResult('path=' + $params.cat);
</script>

{#if $data.items}
	<div id="products" class="tc grid bold">
		{#each $data.items as item}
			<a class="block" href={item.path}>
				<picture class="block">
					<source srcset={item.img[0][1]} type="image/webp" />
					<source srcset={item.img[0][0]} type="image/jpeg" />
					<img src={item.img[0][0]} alt={item.title} />
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
