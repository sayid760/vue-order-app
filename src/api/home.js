import {get, post} from '@/utils/api'
// 所有的接口的方法都加s

/**
 * 增加/更新就餐信息
 * @param {*} data uid 桌号
 */
export const addPeopleInfos = (data) => {
  return post('/api/addPeopleInfo', data)
}

/**
 * 获取就餐信息
 * @param {*} data uid 桌号
 */
export const peopleInfoLists = (data) => {
  return get('/api/peopleInfoList', data)
}

/**
 * 获取购物车数量
 * @param {*} data uid 桌号
 */
export const cartCounts = (data) => {
  return get('/api/cartCount', data)
}

//首页菜品列表
export const getProductlists = () => {
  return get('/api/productlist')
}

/**
 * 购物车列表
 * @param {*} data uid 桌号 （一个桌子有多位用户，他们的桌号一样）
 */
export const cartlists = (data) => {
  return get('/api/cartlist', data)
}

/**
 * 菜品详情
 * @param {*} data id 菜品 
 */
export const productcontents = (data) => {
  return get('/api/productcontent', data)
}

/**
 * 加入购物车
 * @param {*} data 
 * uid 桌号 （一个桌子有多位用户，他们的桌号一样）
 * title 菜品名称
 * product_id 菜品 id 
 * img_url 菜品图片
 * price 菜品价格
 * num 菜品数量
 * open_id 选传
 */
export const addcarts = (data) => {
  return post('/api/addcart', data)
}

/**
 * 增加购物车数量
 * 
 */
export const incCarts = (data) => {
  return get('/api/incCart', data)
}

/**
 * 减少购物车数量
 * 
 */
export const decCarts = (data) => {
  return get('/api/decCart', data)
}
