<script setup lang="ts">
import type { Filter, Option } from "~/utils/types"
import { ref as dbRef } from "firebase/database"

const tickets: Ref<Ticket[]> = useDatabaseList(dbRef(useDatabase()))
const companyFilter = ref<Filter>(companyFilterData)
const transfersFilter = ref<Filter>(transfersFilterData)
const sortInfo = ref<Option[]>(sortData)
const currentSortInfo = computed(
    () => sortInfo.value.find(option => option.checked)?.value
)
companyFilter.value.options = getCompanyFilterOptions(tickets.value)

watch(currentSortInfo, () => {
    let sortKey: "price" | "flightTimeInMinutes" | "transfers" = "price"
    switch (currentSortInfo.value) {
        case "cheapest":
            sortKey = "price"
            break
        case "fastest":
            sortKey = "flightTimeInMinutes"
            break
        case "optimal":
            sortKey = "transfers"
            break
    }

    tickets.value.sort((a, b) => a[sortKey] - b[sortKey])
})

const filteredTickets = computed(() => {
    const enabledCompanies = companyFilter.value.options.map(option => {
        if (option.checked) return option.value
    })

    const enabledTransfers = transfersFilter.value.options.map(option => {
        if (option.checked) return option.value
    })

    return tickets.value.filter(
        ticket =>
            enabledCompanies.includes(ticket.company.key) &&
            enabledTransfers.includes(ticket.transfers)
    )
})

function toggleOption(option: Option) {
    option.checked = !option.checked
}

function changeSortInfoValue(options: Option[], option: Option) {
    options.forEach(option => (option.checked = false))
    option.checked = true
}

const ticketsLength = ref(3)
function increaseTicketsLength() {
    ticketsLength.value = ticketsLength.value + 3
}

const slicedTickets = computed(() => filteredTickets.value.slice(0, ticketsLength.value))
</script>

<template>
    <div class="wrapper">
        <header>
            <div class="container">
                <img class="logo" src="~/assets/img/plane.png" alt="Логотип" />
                <h1>Поиск авиабилетов</h1>
            </div>
        </header>
        <section>
            <div class="container">
                <aside>
                    <div
                        class="aside-filter"
                        v-for="filter in [transfersFilter, companyFilter]"
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
                                    @toggle="toggleOption(option)"
                                    :option="option"
                                    :variant="filter.variant"
                                />
                            </li>
                        </ul>
                    </div>
                </aside>
                <main>
                    <div class="sort-info">
                        <FilterRadio
                            class="sort-info__option"
                            v-for="option in sortInfo"
                            :key="option.value"
                            :option="option"
                            name="sort-info"
                            @toggle="changeSortInfoValue(sortInfo, option)"
                        />
                    </div>
                    <div class="tickets">
                        <BaseTicket
                            class="tickets__item"
                            v-for="ticket in slicedTickets"
                            :key="ticket.id"
                            :ticket="ticket"
                        />
                    </div>
                    <button
                        class="show-more-tickets-btn"
                        v-if="slicedTickets.length !== filteredTickets.length"
                        @click="increaseTicketsLength"
                    >
                        Загрузить еще билеты
                    </button>
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

.sort-info {
    display: flex;
    margin-bottom: 29px;

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

.tickets {
    display: flex;
    flex-direction: column;
    gap: 47px;
    margin-bottom: 74px;
}

.show-more-tickets-btn {
    color: #fff;
    font-size: 24px;
    background: var(--color-purple);
    width: 100%;
    padding: 16px;
    border-radius: 10px;
    border: none;
    transition: all 200ms linear;
    border: 1px solid transparent;

    &:hover {
        background: #fff;
        color: var(--color-purple);
        border: 1px solid var(--color-purple);
    }
}

@media (max-width: 768px) {
    .wrapper {
        padding-top: 31px;
    }

    header .container {
        justify-content: center;
    }

    .logo {
        width: 80px;
    }

    h1 {
        font-size: 20px;
    }

    aside {
        display: none;
    }

    main {
        width: 100%;
    }

    .tickets {
        margin-bottom: 54px;
        gap: 35px;
    }

    .show-more-tickets-btn {
        font-size: 16px;
        padding: 14px;
    }
}
</style>
