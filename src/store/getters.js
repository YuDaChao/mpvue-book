export default {
  isCheckAll (state) {
    return !state.carts.find(item => !item.checked)
  },
  disabledSettleBtn (state) {
    return !state.carts.find(item => item.checked)
  },
  settleCount (state) {
    let totalCount = 0
    state.carts.forEach(item => {
      if (item.checked) {
        totalCount += item.count
      }
    })
    return totalCount
  },
  totalMoney (state) {
    let total = 0
    state.carts.forEach(item => {
      if (item.checked) {
        total += item.count * item.price
      }
    })
    return total
  },
  cartLen (state) {
    return state.carts.length
  }
}
