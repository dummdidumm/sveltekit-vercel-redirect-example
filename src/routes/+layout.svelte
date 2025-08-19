<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/outdated">Outdated Page (should redirect to new page)</a></li>
		<li><a href="/new-page">New Page</a></li>
	</ul>
</nav>

<main>
	{@render children?.()}
</main>
