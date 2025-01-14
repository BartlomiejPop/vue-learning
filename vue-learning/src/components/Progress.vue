<script setup lang="ts">
import { inject, ref, watch } from "vue";
import type { FormStateRef } from "../types";

const formState = inject<FormStateRef>("formState");
if (!formState) {
	throw new Error("formState is not provided");
}
let progressValue = ref<number>(0);

watch(
	() => formState,
	(newValue) => {
		progressValue.value = 0;
		const truthyValues = Object.values(newValue).filter(
			(el) => el.value !== "" && el.value !== null && el.value !== false
		);
		for (let i = 0; i < truthyValues.length; i++) {
			progressValue.value++;
		}
	},
	{
		deep: true,
	}
);
</script>

<template>
	<progress :value="progressValue" max="9"></progress>
</template>

<style scoped>
progress {
	width: 90%;
}
</style>
