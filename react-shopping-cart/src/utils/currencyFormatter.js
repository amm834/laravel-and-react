const formatter = new Intl.NumberFormat('en-Us', {
    style:"currency",
    currency: 'USD',
})
export const format = (raw_number) => {
    return formatter.format(raw_number)
}