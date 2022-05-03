<template>
	<div>
		<template v-for="field of availableFields" :key="field.name">
			<button class="field" @click="selectedField = field">
				{{ field.name }}
			</button>
			<div v-if="selectedField === field">
				<button v-for="subField of field.subFields"
						:key="`${field.name}-${subField}`"
						class="subField"
						@click="selectedSubField = field">
					{{ subField }}
				</button>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		props: {
			availableFields: { type: Array, required: true }
		},
		data: () => ({
			selectedField: "",
			selectedSubField: ""
		})
	};
</script>
