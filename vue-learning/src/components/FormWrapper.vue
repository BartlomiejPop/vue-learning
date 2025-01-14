<script setup lang="ts">
import Form1 from "./Form1.vue";
import Navigation from "./Navigation.vue";
import Progress from "./Progress.vue";
import { ref } from "vue";

const currentForm = ref("form1");
</script>

<template>
	<div class="container">
		<Navigation></Navigation>
		<form>
			<h1>Form</h1>
			<Form1></Form1>
			<button type="submit">submit</button>
		</form>
		<Progress></Progress>
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
