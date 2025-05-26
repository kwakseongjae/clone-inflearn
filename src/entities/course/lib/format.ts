const formatPrice = (price: number) => {
  return `₩${price.toLocaleString()}`
}

const formatStudentCount = (count: number) => {
  if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}만+`
  }
  return count.toLocaleString()
}

export { formatPrice, formatStudentCount }
