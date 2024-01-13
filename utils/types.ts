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

export type { Filter, Option }