<script setup lang="ts">
import type { Option } from "~/utils/types";

const props = defineProps<{
    type: string;
    option: Option;
}>();

const emit = defineEmits<{
    toggle: [];
}>();
</script>

<template>
    <label :class="type">
        <input
            type="checkbox"
            :checked="props.option.checked"
            @input="emit('toggle')"
        />
        <div></div>
        <p>
            {{ props.option.name }}
        </p>
    </label>
</template>

<style scoped>
label {
    display: flex;
    align-items: center;
    gap: 19px;
    cursor: pointer;
}

input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

label.square div {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid var(--color-purple);
}

label.square input:checked ~ div {
    background: url("~/assets/icons/checked.svg") no-repeat center;
}

label.circle div {
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 1px solid var(--color-purple);
    display: flex;
    align-items: center;
    justify-content: center;
}

label.circle input:checked ~ div::after {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--color-purple);
}

p {
    color: var(--color-lavender);
}
</style>
