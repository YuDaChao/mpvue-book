import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.SET_CATEGORY_GOODS] (state, categoryGoods) {
    state.categoryGoods = categoryGoods
  },
  [types.SET_CATEGORY_GOODS_BACKUP] (state, categoryGoodsBackup) {
    state.categoryGoodsBackup = categoryGoodsBackup
  },
  [types.SET_ISLOADING] (state, isLoading) {
    state.isLoading = isLoading
  },
  [types.SET_ADD_CART] (state, { good }) {
    // 判断购物车中是否已存在改商品
    let _good = state.carts.find(item => item.id === good.id)
    if (_good) {
      _good.count++
    } else {
      if (!good.count) {
        Vue.set(good, 'count', 1)
        Vue.set(good, 'checked', true)
        state.carts.push(good)
      } else {
        _good.count++
      }
    }
  },
  [types.SET_CHECK_GOOD] (state, { good }) {
    if (good) {
      // 判断购物车中是否已存在改商品
      let _good = state.carts.find(item => item.id === good.id)
      if (_good) {
        _good.checked = !_good.checked
      }
    }
  },
  [types.SET_CHECK_ALL] (state, isCheckAll) {
    if (isCheckAll) {
      state.carts.forEach(item => {
        if (item.checked) {
          item.checked = false
        }
      })
    } else {
      state.carts.forEach(item => {
        if (!item.checked) {
          item.checked = true
        }
      })
    }
  },
  [types.SET_GOOD_COUNT] (state, { good, isAddCount }) {
    let _good = state.carts.find(item => item.id === good.id)
    if (isAddCount) {
      _good.count++
    } else {
      if (_good.count > 1) {
        _good.count--
      }
    }
  }
}
