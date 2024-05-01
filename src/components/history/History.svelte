<script>
	import { history } from '../../store/history';
	import Card from './list/Card.svelte';
	import Tag from './list/Tag.svelte';
	import Item from './info/Item.svelte';
	import { dateToReadableTimestamp } from '$lib/fomat';
	import { tree } from '../../store/flow';

	$: console.log('history', $history);
</script>

{#if $tree}
	<div
		class="max-w-[250px] px-4 py-6 flex flex-col justify-start items-start gap-4 border border-gray-300 bg-grayscale-primary"
	>
		<h3 class="text-skyblue-primary font-samsung-one-regular text-xs font-bold capitalize">
			Model Information
		</h3>
		{#if $tree.productThumb}
			<img src={$tree.productThumb} alt="" class="max-w-20 mx-auto" />
		{/if}
		<table>
			<Item title="Product Type" value="Galaxy Phone" />
			<Item title="Model" value="s22" />
			<Item title="Name" value="Galaxy s22" />
			<Item title="Session Id" value="832-123/05" />
			<Item title="Date" value="05/01/24" />
		</table>
		<div class="h-[1px] w-full bg-grayscale-quinary mb-[3px]" />
		<h3 class="text-skyblue-primary font-samsung-one-regular text-xs font-bold capitalize">
			History
		</h3>
		<div class="w-full flex flex-col gap-1">
			{#each Object.keys($history) as date}
				<div class="mb-4">
					<Tag>{date}</Tag>
					{#each $history[date] as event}
						<Card
							primary={event.data?.node?.question}
							secondary={event.data?.answer}
							date={dateToReadableTimestamp(event?.timestamp)}
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>
{/if}
