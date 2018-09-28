import * as types from './mutation-types'
import api from '../api'

export default {
  async getCategoryGoods ({ commit, state }, categoryId) {
    commit(types.SET_ISLOADING, true)
    if (state.categoryGoodsBackup.length > 0) {
      for (let i = 0; i < state.categoryGoodsBackup.length; i++) {
        if (state.categoryGoodsBackup[i][categoryId]) {
          commit(types.SET_CATEGORY_GOODS, state.categoryGoodsBackup[i][categoryId])
          commit(types.SET_ISLOADING, false)
          return true
        }
      }
    }
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    const result = await api.getGoodsByCategoryId(categoryId)
    if (result.code === 0) {
      commit(types.SET_CATEGORY_GOODS, result.data)
      commit(types.SET_CATEGORY_GOODS_BACKUP, [...state.categoryGoodsBackup, {[categoryId]: result.data}])
    }
    commit(types.SET_ISLOADING, false)
    wx.hideLoading()
  }
}
