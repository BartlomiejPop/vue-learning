import { ref } from "vue";
import type { Ref } from "vue";

export type Gender = "male" | "female" | null;

export type FormState = {
	name: String;
	lastName: String;
	age: Number | null;
	gender: Gender;
	height: Number | null;
	hobby: String;
	country: String;
	city: String;
	isAgree: Boolean;
};

export type FormStateRef = {
	[K in keyof FormState]: ReturnType<typeof ref<FormState[K]>>;
} & {
	[key: string]: Ref<any>;
};
