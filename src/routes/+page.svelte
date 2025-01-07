<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		// Dynamically import all game-related files only in the browser
		await Promise.all([
			import('$lib/data/l_Terrain.js'),
			import('$lib/data/l_Front_Renders.js'),
			import('$lib/data/l_Front_Renders_2.js'),
			import('$lib/data/l_Front_Renders_3.js'),
			import('$lib/data/l_Trees_1.js'),
			import('$lib/data/l_Trees_2.js'),
			import('$lib/data/l_Trees_3.js'),
			import('$lib/data/l_Trees_4.js'),
			import('$lib/data/l_Landscape_Decorations.js'),
			import('$lib/data/l_Landscape_Decorations_2.js'),
			import('$lib/data/l_Houses.js'),
			import('$lib/data/l_House_Decorations.js'),
			import('$lib/data/l_Characters.js'),
			import('$lib/data/l_Collisions.js'),
			import('$lib/data/collisions.js'),
			import('$lib/js/utils.js'),
			import('$lib/classes/CollisionBlock.js'),
			import('$lib/classes/Player.js'),
			import('$lib/classes/Monster.js'),
			import('$lib/classes/Heart.js'),
			import('$lib/classes/Sprite.js'),
			import('$lib/js/index.js'),
			import('$lib/js/eventListeners.js')
		]);
	});
</script>

<canvas style="image-rendering: pixelated"></canvas>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		vertical-align: baseline;
	}
	body {
		background: black;
		margin: 0;
	}

	canvas {
		width: 100%;
		height: 100%;
	}
</style>
