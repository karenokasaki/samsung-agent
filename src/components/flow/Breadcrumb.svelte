<script>
	import HomeIcon from '../icons/Home.svelte';
	import GreaterThanIcon from '../icons/GreaterThan.svelte';
	import InfoIcon from '../icons/Info.svelte';
	import { setNewBreadcrumbTail, breadcrumb } from '../../store/history';
	import { setActiveNode } from '../../store/flow';
	import { tree } from '../../store/flow';
	export let toggleHistory = () => {};

	function truncateString(str, num = 10) {
		if (str.length <= num) {
			return str;
		}
		return str.slice(0, num) + '...';
	}
</script>

<div class="bg-grayscale-secondary w-full h-8 flex flex-row gap-2 pl-4 overflow-hidden relative">
	<button
		on:click={() => {
			setNewBreadcrumbTail();
			setActiveNode($tree.rootNode);
		}}
	>
		<span class="w-fit h-fit my-auto">
			<HomeIcon />
		</span>
	</button>
	{#if $breadcrumb.size}
		<span class="w-fit h-fit my-auto">
			<GreaterThanIcon />
		</span>
	{/if}
	{#each $breadcrumb as { data, id }, idx}
		<button
			on:click={() => {
				setNewBreadcrumbTail(id);
				setActiveNode(data.node.id);
			}}
		>
			<p
				class="text-grayscale-tertiary text-[10px] whitespace-nowrap flex flex-col align-middle justify-center overflow-hidden overflow-ellipsis"
			>
				<span class="text-grayscale-quaternary text-[10px] font-normal">
					{#if !data.node.choices.length}
						{truncateString(data.answer)}
					{/if}

					{#if data.node.choices.length > 0}
						{truncateString(data.node.name)}
					{/if}
				</span>
			</p>
		</button>
		{#if idx < $breadcrumb.size - 1}
			<span class="w-fit h-fit my-auto">
				<GreaterThanIcon />
			</span>
		{/if}
	{/each}
	<button
		class="history text-grayscale-tertiary text-[12px] font-bold"
		on:click={toggleHistory}
		id="history-button"
	>
		<InfoIcon />
		History
	</button>
</div>

<style>
	.history {
		position: absolute;
		right: 22.5px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2px;
	}
</style>
