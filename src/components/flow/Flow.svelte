<script>
	import Header from './Header.svelte';
	import Breadcrumb from './Breadcrumb.svelte';
	import Interactive from './Interactive.svelte';
	import History from '../../components/history/History.svelte';
	import { onMount } from 'svelte';
	import { tree, modelChoosen, MODEL_GENERIC } from '../../store/flow';
	import { breadcrumb } from '../../store/history';

	let openHistory = false;
	let sliderRef;
	let hasModel = false;

	function toggleHistory() {
		openHistory = !openHistory;
	}

	function onWindowClick(e) {
		if (!sliderRef.contains(e.target) && e.target.id !== 'history-button') {
			openHistory = false;
		}
	}

	onMount(() => {
		sliderRef = document.querySelector('.slider');
	});

	$: $tree?.models?.length > 0 && (hasModel = true);

	$: console.log($modelChoosen);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex flex-col mx-auto my-6 w-[905px] min-h-[930px] font-samsung-one"
	on:click={onWindowClick}
>
	<div class="border border-gray-300 relative overflow-hidden min-h-[930px]">
		<Header />
		<Breadcrumb bind:openHistory {toggleHistory} />
		<div class="slider h-[777px]" data-openHistory={openHistory} bind:this={sliderRef}>
			<History />
		</div>
		<Interactive />
	</div>
	{#if hasModel && $tree?.models?.length > 0}
		<div class="w-full flex flex-col items-end justify-end footer mt-5">
			<p
				class="text-sm font-semibold text-gray-500 font-samsung-one hover:text-gray-700 transition duration-150 ease-in-out"
			>
				Choose a model
			</p>

			<select
				disabled={$breadcrumb.size > 0}
				bind:value={$modelChoosen}
				class="border border-gray-300 rounded-md w-[30%] px-2 py-2 bg-white text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
			>
				<option value={MODEL_GENERIC}>Generic</option>
				{#each $tree?.models as model}
					<option value={model}>{model}</option>
				{/each}
			</select>
		</div>
	{/if}
</div>

<style>
	.slider {
		position: absolute;
		right: -255px;
		transition: right 300ms ease-out;
		overflow-y: scroll;
	}

	.slider[data-openHistory='true'] {
		right: 0;
		transition: right 300ms ease-in;
	}

	::-webkit-scrollbar {
		width: 3px; /* Largura da barra de rolagem */
		background-color: #dddddd;
	}
	::-webkit-scrollbar-thumb {
		background-color: #bbbbbb; /* Cor de fundo do polegar */
		border-radius: 6px; /* Raio da borda do polegar */
	}

	select:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
</style>
