<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const lastName = ref("");
const age = ref("");
</script>

<template>
	<section class="section">
		<div class="form-item">
			<label>Name </label>
			<input v-model="name" type="text" placeholder="name" />
		</div>
		<div class="form-item">
			<label>Last Name </label>
			<input v-model="lastName" type="text" placeholder="last name" />
		</div>
		<div class="form-item">
			<label for="age">Age </label>
			<input v-model="age" type="text" name="age" placeholder="age" />
		</div>
	</section>
</template>

<style scoped>
.section {
	gap: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form-item {
	width: 60%;
	display: flex;
	justify-content: space-between;
}

input {
	padding: 5px;
	width: 300px;
}

label {
	font-size: 25px;
}
</style>
