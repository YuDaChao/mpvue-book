import * as types from './mutation-types'
import api from '../api'

export default {
  // 根据分类id获取商品列表
  async getCategoryGoods ({ commit, state }, categoryId) {
    // 标示是否正在加载数据中
    commit(types.SET_ISLOADING, true)
    // 主要是用于优化 如果categoryGoodsBackup中已存在之前加载的数据
    // 那么直接从store中获取， 不需要再去请求接口
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
