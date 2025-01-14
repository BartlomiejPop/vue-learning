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
			<label>country </label>
			<input
				v-model="formState.country.value"
				id="country"
				type="text"
				placeholder="country" />
		</div>
		<div class="form-item">
			<label>city </label>
			<input
				v-model="formState.city.value"
				id="city"
				type="text"
				placeholder="city" />
		</div>
		<div class="form-item">
			<label for="isAgree">term of licence </label>
			<input
				v-model="formState.isAgree.value"
				id="isAgree"
				class="checkbox"
				type="checkbox"
				name="isAgree"
				placeholder="isAgree" />
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
