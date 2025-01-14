<script setup lang="ts">
import { inject } from "vue";
import type { FormStateRef } from "../types";

const formState = inject<FormStateRef>("formState");

if (!formState) {
	throw new Error("formState is not provided");
}
</script>

<template>
	<section class="section">
		<div class="form-item">
			<label>Name </label>
			<input
				v-model="formState.name.value"
				id="name"
				type="text"
				placeholder="name" />
		</div>
		<div class="form-item">
			<label>Last Name </label>
			<input
				v-model="formState.lastName.value"
				id="last-name"
				type="text"
				placeholder="last name" />
		</div>
		<div class="form-item">
			<label for="age">Age </label>
			<input
				v-model="formState.age.value"
				id="age"
				type="number"
				name="age"
				placeholder="age" />
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
