<script>
	import ArrowLeftIcon from '../icons/ArrowLeft.svelte';
	import { tree, setActiveNode } from '../../store/flow';
	import { popBreadcrumb, breadcrumb } from '../../store/history';

	function backOne() {
		if ($breadcrumb.size === 0) return;

		if ($breadcrumb.size === 1) {
			popBreadcrumb();
			setActiveNode($tree.rootNode);
		} else {
			popBreadcrumb();
			setActiveNode($breadcrumb.head.data.data.node.id);
		}
	}
</script>

<div class="bg-grayscale-primary w-full h-[120px] flex flex-row align-middle justify-between">
	<!-- Arrow Back -->

	<div class="w-[100px] flex flex-col justify-center align-middle">
		<button class="appearance-none w-fit h-fit mx-auto" on:click={backOne}>
			<ArrowLeftIcon />
		</button>
	</div>

	<!-- Text -->
	<div class="flex flex-col gap-[7px] justify-center">
		<h3 class="text-center font-samsung-sharp-sans text-xl leading-none">{$tree.name}</h3>
		<p class="text-samsung-sharp-regular text-sm text-grayscale-tertiary leading-none">
			Your reference is: <span class="font-bold">555-5555</span>
		</p>
	</div>
	<!-- Thumbnail -->
	<div class="w-[100px] flex justify-center items-center">
		<img src={$tree.productThumb} alt="" class="object-contain w-1/2" />
	</div>
</div>
