import type { FilterVariant } from '~/utils/enums'

interface Filter {
    variant: FilterVariant,
    title: string,
    options: Option[],
}

interface Option {
    name: string,
    checked: boolean,
    value: string | number,
}

interface Ticket {
    id: number,
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
    company: {
        key: string,
        name: string
    },
    logo: string
}

export type { Filter, Option, Ticket }