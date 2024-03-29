export const getFormattedPrice = (price: number): string => price.toLocaleString()
export const getTransfersText = (transfers: number): string => transfers === 0 ? "Без пересадок" : transfers === 1 ? "1 пересадка" : transfers >= 2 || transfers <= 4 ? `${transfers} пересадки` : `${transfers} пересадок`
export const getFlightTimeText = (minutes: number): string => `${Math.floor(minutes / 60)} ч ${minutes % 60} мин`
export const getCompanyFilterOptions = (tickets: Ticket[]): Option[] => {
    const options: Option[] = []

    tickets.forEach(ticket => {
        if (!options.find(option => option.value === ticket.company.key)) options.push({ name: ticket.company.name, value: ticket.company.key, checked: true })
    })

    return options
}

// export const getImageUrl = (path: string): string => new URL(`../assets/${path}`, import.meta.url).href