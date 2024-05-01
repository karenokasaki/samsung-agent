<script>
	import { onMount } from 'svelte';
	import { revalidateTree } from '../../store/flow';
	import Flow from '../../components/flow/Flow.svelte';

	export let data;
	onMount(() => revalidateTree(data.slug));
</script>

<div class="flex flex-row align-baseline justify-center">
	<Flow />
</div>
