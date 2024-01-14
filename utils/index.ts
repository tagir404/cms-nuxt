import type { Filter, Option } from '~/utils/types'
import { FilterVariant } from '~/utils/enums'

export const asideFiltersData: Filter[] = [
    {
        type: FilterVariant.Square,
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
                checked: false
            },
            {
                
                name: '2 пересадка',
                value: 2,
                checked: false
            },
            {
                name: '3 пересадка',
                value: 3,
                checked: false
            }
        ]
    },
    {
        type: FilterVariant.Circle,
        title: 'Компании',
        options: [
            {
                name: 'Победа',
                value: 'pobeda',
                checked: true
            },
            {
                name: 'Red Wings',
                value: 'red-wings',
                checked: true
            },
            {
                name: 'S7 Airlines',
                value: 's7-airlines',
                checked: true
            },
        ]
    }
]

export const priceFilterData: Option[] = [
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

export { getTransfersText, getFormattedPrice, getFlightTimeText } from '~/utils/utils'
