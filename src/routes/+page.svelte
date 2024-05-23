<script>
	import Choice from '../components/icons/Choice.svelte';
	import { goto } from '$app/navigation';

	let idTreePublish = '';

	const trees = [
		{
			id: 'test1',
			name: 'Test one'
		},
		{
			id: 'samsung',
			name: 'Samsung'
		}
	];

	function handleNavigation(idTree) {
		goto(`/tree/${idTree}`);
	}
</script>

<div
	class="flex flex-col mx-auto my-6 w-[905px] min-h-[500px] font-samsung-one justify-center border border-gray-300"
>
	<div class="flex flex-col align-baseline h-[500px]">
		<div class="bg-grayscale-primary h-24 flex justify-center items-center">
			<h1 class="text-3xl font-bold">Welcome to the D-tree</h1>
		</div>
		<div class="flex flex-col gap-16 p-12">
			<div class="flex flex-col gap-2">
				<h3 class="text-2xl font-semibold mb-4">Please choose your topic</h3>

				<div class="flex gap-4">
					{#each trees as tree}
						<button
							class="bg-grayscale-primary w-[200px] rounded-2xl text-left flex items-center outline outline-2 outline-transparent hover:outline-skyblue-primary transition-all"
							on:click={() => handleNavigation(tree.id)}
						>
							<div class="p-[14px] border-r-2 border-grayscale-quinary">
								<Choice />
							</div>
							<div class="font-base font-normal leading-6 flex h-auto px-4">
								{tree.name}
							</div>
						</button>
					{/each}
				</div>
			</div>

			<div class="">
				<h3 class="text-2xl font-semibold mb-4">Access a tree that was published</h3>

				<div class="flex flex-row gap-4">
					<input
						type="text"
						class="border border-gray-300 rounded w-[50%] px-2 py-2"
						placeholder="Please enter the tree ID you want to access"
						bind:value={idTreePublish}
					/>
					<button
						class="bg-grayscale-primary p-2 rounded-2xl text-left flex items-center outline outline-2 outline-transparent hover:outline-skyblue-primary transition-all"
						on:click={() => handleNavigation(idTreePublish)}
					>
						<div class="p-[8px] border-t-2 border-grayscale-quinary rotate-90">
							<Choice />
						</div>
						<div class="font-base font-normal leading-6 flex h-auto px-4">Load Tree</div></button
					>
				</div>
				<small>for testing: d2aac77b-38c6-4a9d-8ab7-b982071950ab</small>
			</div>
		</div>
	</div>
</div>
