import type { FilterVariant } from '~/utils/enums'

interface Filter {
    type: FilterVariant,
    title: string,
    options: Option[]
}

interface Option {
    name: string,
    checked: boolean,
    value: string | number,
}

interface Ticket {
    price: number,
    departure: {
        code: string,
        time: string
    },
    arrival: {
        code: string,
        time: string
    },
    flightTimeInMinutes: number,
    transfers: number,
    company: string
}

export type { Filter, Option, Ticket }