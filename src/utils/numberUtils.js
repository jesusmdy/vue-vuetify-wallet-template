export function formatBalance (balance) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: balance.currency
  })
  return formatter.format(balance.total)
}
