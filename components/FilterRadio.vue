<script setup lang="ts">
import type { Option } from "~/utils/types"

const props = defineProps<{
    option: Option
    name: string
}>()

const emit = defineEmits<{
    toggle: []
}>()
</script>

<template>
    <label>
        <input
            type="radio"
            :checked="props.option.checked"
            @input="emit('toggle')"
            @keyup="e => (e.key === 'Enter' ? emit('toggle') : '')"
            :name="name"
        />
        <div>
            <p>
                {{ props.option.name }}
            </p>
        </div>
    </label>
</template>

<style scoped>
label {
    display: flex;
    align-items: center;
    gap: 19px;
    cursor: pointer;
    user-select: none;
    border: 1px solid var(--color-purple);
    overflow: hidden;
}

input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

div {
    font-weight: bold;
    background: var(--color-light-lavender);
    padding: 18px;
    cursor: pointer;
    text-align: center;
    transition: all 200ms linear;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

div:hover {
    background: var(--color-light-purple);
}

input:checked ~ div {
    color: #fff;
    background: var(--color-purple);
}

@media (max-width: 768px) {
    label {
        flex: 1;
    }

    div {
        font-size: 12px;
        padding: 14px;
    }
}
</style>
