<script>
	export let primary = '';
	export let secondary = '';
	export let date = '';
</script>

<div class="min-h-[50px] w-full rounded-sm py-[7px] px-[10px] bg-white mb-[4px]">
	<div class="flex justify-between">
		<p class="overflow-ellipsis font-samsung-one-regular text-[11px] font-bold leading-6">
			{primary}
		</p>
	</div>
	<div class="flex justify-between">
		<p class="overflow-ellipsis font-samsung-one-regular text-[11px] font-normal leading-6">
			{secondary}
		</p>
		<p
			class="overflow-ellipsis font-samsung-one-regular text-[10px] font-normal leading-6 text-grayscale-quaternary"
		>
			{date}
		</p>
	</div>
</div>
