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
                src="~/assets/img/plane.png"
                :alt="`Логотип авикомпании ${props.ticket.company}`"
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

    &__head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    &__price {
        font-size: 32px;
        font-weight: bold;
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
</style>
