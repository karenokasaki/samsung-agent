<script>
	import { activeNode, setActiveNode } from '../../store/flow';
	import { addStep } from '../../store/history';
	import Choice from '../icons/Choice.svelte';

	export let choice = {};
</script>

<button
	class="bg-grayscale-primary w-full rounded-2xl text-left flex items-center outline outline-2 outline-transparent hover:outline-skyblue-primary transition-all"
	on:click={() => {
		setActiveNode(choice.to);
		addStep({ node: $activeNode, answer: choice.text_button });
	}}
>
	<div class="p-[14px] border-r-2 border-grayscale-quinary">
		<Choice class="w-6 h-6" />
	</div>
	<div class="font-base font-normal leading-6 flex h-auto px-4">
		{choice.text_button}
	</div>
</button>

<style>
</style>
