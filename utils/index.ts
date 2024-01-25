import type { Filter, Option } from '~/utils/types'
import { FilterVariant } from '~/utils/enums'

export const transfersFilterData: Filter = {
    variant: FilterVariant.Square,
    title: 'Количество пересадок',
    options: [
        {
            name: 'Без пересадок',
            value: 0,
            checked: true
        },
        {
            name: '1 пересадка',
            value: 1,
            checked: true
        },
        {

            name: '2 пересадка',
            value: 2,
            checked: true
        },
        {
            name: '3 пересадка',
            value: 3,
            checked: true
        }
    ]
}

export const companyFilterData: Filter = {
    variant: FilterVariant.Circle,
    title: 'Компании',
    options: [],
}

export const sortData: Option[] = [
    {
        name: 'Самый дешевый',
        value: 'cheapest',
        checked: true,
    },
    {
        name: 'Самый быстрый',
        value: 'fastest',
        checked: false,
    },
    {
        name: 'Самый оптимальный',
        value: 'optimal',
        checked: false
    }
]