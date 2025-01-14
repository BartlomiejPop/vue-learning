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
			<label>gender </label>
			<select v-model="formState.gender.value" id="gender" placeholder="gender">
				<option>male</option>
				<option>female</option>
			</select>
		</div>
		<div class="form-item">
			<label>height </label>
			<input
				v-model="formState.height.value"
				id="height"
				type="text"
				placeholder="height" />
		</div>
		<div class="form-item">
			<label for="hobby">hobby </label>
			<input
				v-model="formState.hobby.value"
				id="hobby"
				type="text"
				name="hobby"
				placeholder="hobby" />
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

select {
	width: 314px;
}

input {
	padding: 5px;
	width: 300px;
}

label {
	font-size: 25px;
}
</style>
