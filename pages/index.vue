<script setup lang="ts">
import type { Filter, Option } from "~/utils/types";

const asideFilters = ref(asideFiltersData);
const priceFilter = ref(priceFilterData);

function toggleOption(filter: Filter, option: Option) {
    const filterIndex = asideFilters.value.indexOf(filter);
    const optionIndex = asideFilters.value[filterIndex].options.indexOf(option);
    asideFilters.value[filterIndex].options[optionIndex].checked =
        !option.checked;
}

function setPriceFilter(option: Option) {
    const optionIndex = priceFilter.value.indexOf(option);
    priceFilter.value = priceFilter.value.map(option => {
        return { ...option, checked: false };
    });
    priceFilter.value[optionIndex].checked = !option.checked;
}
</script>

<template>
    <div class="wrapper">
        <header>
            <div class="container">
                <img src="~/assets/img/plane.png" alt="Логотип" />
                <h1>Поиск авиабилетов</h1>
            </div>
        </header>
        <section>
            <div class="container">
                <aside>
                    <div
                        class="aside-filter"
                        v-for="filter in asideFilters"
                        :key="filter.title"
                    >
                        <p class="aside-filter__title">{{ filter.title }}</p>
                        <ul class="aside-filter__options">
                            <li
                                class="aside-filter__option"
                                v-for="option in filter.options"
                                :key="option.value"
                            >
                                <BaseCheckbox
                                    @toggle="toggleOption(filter, option)"
                                    :option="option"
                                    :type="filter.type"
                                />
                            </li>
                        </ul>
                    </div>
                </aside>
                <main>
                    <div class="price-filter">
                        <div
                            class="price-filter__option"
                            :class="{ active: option.checked }"
                            v-for="option in priceFilter"
                            :key="option.value"
                            @click="setPriceFilter(option)"
                        >
                            {{ option.name }}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    padding-top: 84px;
    padding-bottom: 59px;
}

header {
    margin-bottom: 20px;

    .container {
        display: flex;
        align-items: center;
        gap: 34px;
    }
}

h1 {
    font-weight: bold;
    font-size: 24px;
}

section {
    .container {
        display: flex;
        gap: 50px;
    }
}

aside {
    display: flex;
    flex-direction: column;
    gap: 47px;
}

.aside-filter {
    border-radius: 10px;
    padding: 18px;
    background: var(--color-light-lavender);

    &__title {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 26px;
    }

    &__options {
        display: flex;
        flex-direction: column;
        gap: 19px;
    }
}

.price-filter {
    display: flex;

    &__option {
        font-weight: bold;
        border: 1px solid var(--color-purple);
        background: var(--color-light-lavender);
        padding: 18px;
        cursor: pointer;
        min-width: 242px;
        flex: 1;
        text-align: center;
        transition: all 200ms linear;

        &:not(:last-child) {
            border-right: none;
        }

        &:first-child {
            border-radius: 10px 0 0 10px;
        }

        &:last-child {
            border-radius: 0 10px 10px 0;
        }

        &:hover {
            background: var(--color-light-purple);
        }

        &.active {
            color: #fff;
            background: var(--color-purple);
        }
    }
}
</style>
