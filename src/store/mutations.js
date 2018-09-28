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
  }
}
