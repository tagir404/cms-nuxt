<script setup lang="ts">
import type { Ticket } from "~/utils/types"

const props = defineProps<{
    ticket: Ticket
}>()
</script>

<template>
    <div class="ticket">
        <div class="ticket__head">
            <p class="ticket__price">
                {{ getFormattedPrice(props.ticket.price) }} Р
            </p>
            <img
                class="ticket__logo"
                :src="props.ticket.logo"
                :alt="`Логотип авикомпании ${props.ticket.company.name}`"
            />
        </div>
        <div class="ticket__info">
            <div class="ticket__info-block">
                <p>
                    {{ props.ticket.departure.code }} -
                    {{ props.ticket.arrival.code }}
                </p>
                <p>
                    {{ props.ticket.departure.time }} -
                    {{ props.ticket.arrival.time }}
                </p>
            </div>
            <div class="ticket__info-block">
                <p>В пути</p>
                <p>{{ getFlightTimeText(props.ticket.flightTimeInMinutes) }}</p>
            </div>
            <div class="ticket__info-block">
                <p>Пересадки</p>
                <p>{{ getTransfersText(props.ticket.transfers) }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ticket {
    padding: 25px 40px;
    border-radius: 10px;
    background: var(--color-light-lavender);
    height: 174px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 25px;
        flex: 1;
    }

    &__price {
        font-size: 32px;
        font-weight: bold;
        align-self: flex-end;
    }

    &__info {
        display: flex;
        justify-content: space-between;
    }

    &__info-block {
        display: flex;
        flex-direction: column;
        gap: 8px;

        p:first-child {
            color: var(--color-lavender);
        }
    }
}

@media (max-width: 768px) {
    .ticket {
        padding: 25px;
        height: auto;

        &__price {
            font-size: 20px;
            align-self: center;
        }

        &__info-block {
            font-size: 12px;
        }

        &__logo {
            width: 50%;
            max-width: min-content;
        }
    }
}
</style>
