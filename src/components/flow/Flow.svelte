<script>
	import Header from './Header.svelte';
	import Breadcrumb from './Breadcrumb.svelte';
	import Interactive from './Interactive.svelte';
	import History from '../../components/history/History.svelte';
	import { onMount } from 'svelte';

	let openHistory = false;
	let sliderRef;

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
</style>
