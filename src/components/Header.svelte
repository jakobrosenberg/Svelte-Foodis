<script>
	export let data;
</script>

{#if data && data.nav}
	<header class="block w100 bgw">
		<div class="grid content mx">
			<a id="logo" class="block bgw" href="/" rel="home">
				<picture class="block">
					<source srcset={data.site.logo[1]} type="image/webp" />
					<source srcset={data.site.logo[0]} type="image/jpeg" />
					<img src={data.site.logo[0]} alt={data.site.title} />
				</picture>
			</a>
			<button id="menuToggle" />
			<nav id="menu">
				<ul>
					<li class="nav-item">
						<a class="nav-link block" href="/" rel="home">Etusivu</a
						>
					</li>
					{#each data.nav as item}
						<li class="nav-item">
							<a class="nav-link block" href={item.path}>
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</header>
{/if}

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
	}
	header .content {
		position: relative;
		max-width: 1200px;
		margin: 0 auto;
	}
	@media screen and (min-width: 1200px) {
		header {
			text-align: right;
		}
		#logo {
			position: absolute;
			width: 290px;
			top: 0;
			left: 0;
			padding: 10px 20px 20px;
		}
		#menuToggle {
			display: none;
		}
		#menu li {
			display: inline-block;
		}
		#menu a {
			padding: 20px 10px;
		}
		#menu a:not(.active) {
			color: var(--black);
		}
	}
</style>
