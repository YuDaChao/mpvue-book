import fly from '../utils/request'

/**
 * 获取分类列表
 * @returns {*}
 */
const getCategoryList = () => fly.get(`/categories`)

/**
 * 根据分类id获取商品信息
 * @param categoryId
 * @returns {FlyPromise<any>}
 */
const getGoodsByCategoryId = (categoryId) => fly.get(`/category?id=${categoryId}`)

export default {
  getCategoryList,
  getGoodsByCategoryId
}
