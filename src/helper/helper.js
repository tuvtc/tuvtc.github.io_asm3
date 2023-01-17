// Format gia tien
export const renderPrice = (price) => {
    if(price === undefined || price === null) {
        return ''
    }
    const newPrice = Math.round(Number(price))
    const formatter = new Intl.NumberFormat('vi-VN')
    return formatter.format(newPrice)
}
