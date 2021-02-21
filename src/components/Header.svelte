<script>
	export let data;
	let y;
	let small;
	let active;

	$: if (y > 100) small = true;
	else small = '';
</script>

<svelte:window bind:scrollY={y} />

{#if data && data.nav}
	<header class="block w100 bgw" class:small>
		<div class="grid content mx">
			<a id="logo" class="block bgw" href="/" rel="home">
				<picture class="block">
					<source srcset={data.site.logo[1]} type="image/webp" />
					<source srcset={data.site.logo[0]} type="image/jpeg" />
					<img src={data.site.logo[0]} alt={data.site.title} />
				</picture>
			</a>
			<button
				id="menuToggle"
				class="noBor"
				on:click={() => (active = !active)}
				title="Open/close main navigation"
			>
				{#if !active}
					<svg viewBox="0 0 100 80" width="30" height="30">
						<title>Open or close navigation</title>
						<desc>
							Pressing the button in the mobile version opens the
							main navigation menu. Pressing again closes the
							menu.
						</desc>
						<rect width="100" height="20" /><rect
							y="30"
							width="100"
							height="20"
						/><rect y="60" width="100" height="20" /></svg
					>{:else}<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path
							d="M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
						/>
					</svg>
				{/if}
			</button>
			<nav id="menu" class:active>
				<ul>
					<li class="nav-item">
						<a class="nav-link block" href="/" rel="home">Etusivu</a
						>
					</li>
					{#each data.nav as item}
						<li class="nav-item">
							<a class="nav-link block" href={item.path}>
								{@html item.title}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</header>
{/if}
