<script setup lang="ts">
import type { Gender } from "../types";
import Form1 from "./Form1.vue";
import Form2 from "./Form2.vue";
import Form3 from "./Form3.vue";
import Navigation from "./Navigation.vue";
import Result from "./Result.vue";
import Progress from "./Progress.vue";
import { ref, provide } from "vue";

const currentForm = ref<number>(1);

const formState = {
	name: ref<string>(""),
	lastName: ref<string>(""),
	age: ref<number | null>(null),
	gender: ref<Gender>(null),
	height: ref<number | null>(null),
	hobby: ref<string>(""),
	country: ref<string>(""),
	city: ref<string>(""),
	isAgree: ref<boolean>(false),
};

provide("formState", formState);

const sendForm = () => {
	formState.name.value = "";
	formState.lastName.value = "";
	formState.age.value = null;
	formState.gender.value = null;
	formState.height.value = null;
	formState.hobby.value = "";
	formState.country.value = "";
	formState.city.value = "";
	formState.isAgree.value = false;
};
</script>

<template>
	<div class="container">
		<Navigation
			@select-form="(formNumber:number) => (currentForm = formNumber)"></Navigation>
		<form>
			<h1>Form</h1>
			<Form1 v-if="currentForm === 1"></Form1>
			<Form2 v-if="currentForm === 2"></Form2>
			<Form3 v-if="currentForm === 3"></Form3>
			<Result v-if="currentForm === 4" :form-state="formState"></Result>
			<button v-if="currentForm === 4" type="submit" @click.prevent="sendForm">
				submit
			</button>
		</form>
		<Progress :form-state="formState"></Progress>
	</div>
</template>

<style scoped>
.container {
	border: 1px solid #fff;
}

form {
	width: 800px;
	height: 400px;
}

button {
	margin-top: 50px;
}
</style>
