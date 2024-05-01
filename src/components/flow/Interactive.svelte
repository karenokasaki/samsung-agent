<script>
	import { activeNode } from '../../store/flow';
	import AnswerButton from './AnswerButton.svelte';
</script>

{#if $activeNode}
	<div class=" py-10 flex flex-col align-middle items-center justify-center">
		<div class="max-w-[500px] flex flex-col gap-8 items-center justify-center">
			<p class="text-base w-fit flex flex-col items-start gap-2 content">
				{@html $activeNode.text}
			</p>
			<p class="font-samsung-sharp-sans text-lg font-bold text-center w-full">
				{$activeNode.question}
			</p>
			<div
				class="flex flex-col gap-2 max-h-[360px] w-[420px] items-center p-[3px] overflow-y-auto pe-6"
			>
				{#each $activeNode.choices as choice}
					<AnswerButton {choice} />
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	::-webkit-scrollbar {
		width: 3px; /* Largura da barra de rolagem */
		background-color: #dddddd;
	}
	::-webkit-scrollbar-thumb {
		background-color: #bbbbbb; /* Cor de fundo do polegar */
		border-radius: 6px; /* Raio da borda do polegar */
	}
</style>
