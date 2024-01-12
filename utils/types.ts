import type { FilterTypes } from '~/utils/enums'

interface Filter {
    type: FilterTypes,
    title: string,
    options: Option[]
}

interface Option {
    name: string,
    checked: boolean,
    value: string | number,
}

export type { Filter, Option }