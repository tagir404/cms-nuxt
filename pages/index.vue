<script setup lang="ts">
import type { Filter, Option } from "~/utils/types"
import tickets from "~/utils/tickets.json"

const asideFilters = ref(asideFiltersData)
const priceFilter = ref(priceFilterData)

function toggleOption(filter: Filter, option: Option) {
    const filterIndex = asideFilters.value.indexOf(filter)
    const optionIndex = asideFilters.value[filterIndex].options.indexOf(option)
    asideFilters.value[filterIndex].options[optionIndex].checked =
        !option.checked
}

function setPriceFilter(option: Option) {
    const optionIndex = priceFilter.value.indexOf(option)
    priceFilter.value = priceFilter.value.map(option => ({
        ...option,
        checked: false,
    }))
    priceFilter.value[optionIndex].checked = true
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
                                <FilterCheckbox
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
                        <FilterRadio
                            class="price-filter__option"
                            v-for="option in priceFilter"
                            :key="option.value"
                            :option="option"
                            name="price-filter"
                            @toggle="setPriceFilter(option)"
                        />
                    </div>
                    <div class="tickets">
                        <div
                            class="tickets__item"
                            v-for="(ticket, i) in tickets"
                            :key="i"
                        ></div>
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
        &:not(:last-child) {
            border-right: none;
        }

        &:first-child {
            border-radius: 10px 0 0 10px;
        }

        &:last-child {
            border-radius: 0 10px 10px 0;
        }
    }
}
</style>
