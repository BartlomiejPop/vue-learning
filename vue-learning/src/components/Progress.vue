<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps(["formState"]);
const formInputsStatus01 = {
	name: 0,
	lastName: 0,
	age: 0,
	gender: 0,
	height: 0,
	hobby: 0,
	country: 0,
	city: 0,
	isAgree: 0,
};
let progressValue = ref<number>(0);

watch(
	() => props.formState,
	(newValue) => {
		progressValue.value = 0;
		if (newValue.name.value === "") {
			formInputsStatus01.name = 0;
		} else {
			formInputsStatus01.name = 1;
		}
		if (newValue.lastName.value === "") {
			formInputsStatus01.lastName = 0;
		} else {
			formInputsStatus01.lastName = 1;
		}
		if (newValue.age.value === null) {
			formInputsStatus01.age = 0;
		} else {
			formInputsStatus01.age = 1;
		}
		if (newValue.gender.value === null) {
			formInputsStatus01.gender = 0;
		} else {
			formInputsStatus01.gender = 1;
		}
		if (newValue.height.value === null) {
			formInputsStatus01.height = 0;
		} else {
			formInputsStatus01.height = 1;
		}
		if (newValue.hobby.value === "") {
			formInputsStatus01.hobby = 0;
		} else {
			formInputsStatus01.hobby = 1;
		}
		if (newValue.country.value === "") {
			formInputsStatus01.country = 0;
		} else {
			formInputsStatus01.country = 1;
		}
		if (newValue.city.value === "") {
			formInputsStatus01.city = 0;
		} else {
			formInputsStatus01.city = 1;
		}
		if (newValue.isAgree.value === false) {
			formInputsStatus01.isAgree = 0;
		} else {
			formInputsStatus01.isAgree = 1;
		}
		Object.values(formInputsStatus01).forEach(
			(value: number) => (progressValue.value += value)
		);
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
