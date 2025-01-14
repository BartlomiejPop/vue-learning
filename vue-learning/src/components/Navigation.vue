<script setup lang="ts">
const emit = defineEmits(["selectForm"]);
</script>
<template>
	<nav class="navigation">
		<button @click="$emit('selectForm', 1)" class="navigation-item">
			Form1
		</button>
		<button @click="$emit('selectForm', 2)" class="navigation-item">
			Form2
		</button>
		<button @click="$emit('selectForm', 3)" class="navigation-item">
			Form3
		</button>
		<button @click="$emit('selectForm', 4)" class="navigation-item">
			Result
		</button>
	</nav>
</template>

<style scoped>
.navigation {
	display: flex;
	justify-content: space-around;
	width: 100%;
}

.navigation-item {
	width: 24%;
}
</style>
