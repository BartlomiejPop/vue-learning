<script setup lang="ts">
const props = defineProps(["formState"]);
if (!props.formState) {
	throw new Error("formState is not provided");
}
const keys = Object.keys(props.formState);
</script>
<template>
	<section class="section">
		<dl>
			<li v-for="key in keys" :key="key">
				<b>{{ key }}</b
				>: <span>{{ props.formState[key] }}</span>
			</li>
		</dl>
	</section>
</template>
<style>
b {
	text-align: left;
	width: 300px;
}

span {
	width: 300px;
}
dl {
	width: 40%;
	list-style: none;
}

li {
	display: flex;
	justify-content: space-between;
}

.section {
	font-size: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
