<script setup lang="ts"></script>

<template>
	<nav class="navigation">
		<button class="navigation-item">Form1</button>
		<button class="navigation-item">Form2</button>
		<button class="navigation-item">Form3</button>
	</nav>
</template>

<style scoped>
.navigation {
	display: flex;
	justify-content: space-around;
	width: 100%;
}

.navigation-item {
	width: 30%;
}
</style>
