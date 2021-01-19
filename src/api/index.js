import { fetchGet,fetchPost } from '../utils/request.js'


/**
 * 首页热门差评
 */
export function negativeNCHotComment (data) {
  return fetchGet('/api/Negative/NCHotComment',data)
};
/**
 * 首页热门分类
 */
export function negativeNCHotType (data) {
  return fetchGet('/api/Negative/NCHotType',data)
};
/**
 * 首页热门产品
 */
export function negativeNCHotProduct (data) {
  return fetchGet('/api/Negative/NCHotProduct',data)
};
/**
 * 搜索
 */
export function negativeNCProductListByName (data) {
  return fetchGet('/api/Negative/NCProductListByName',data)
};
/**
 * 评论点赞
 */
export function negativeAddFabulous (data) {
  return fetchPost('/api/Negative/AddFabulous',data)
};
/**
 * 产品点赞
 */
export function ProductLikes (data) {
  return fetchGet('/api/HotType/ProductLikes',data)
};
/**
 * 投票
 */
export function vote (data) {
  return fetchGet('/api/HotType/VoteClick',data)
};
/**
 * 发布评论
 */
export function negativeAddNegativeComment (data) {
  return fetchPost('/api/Negative/AddNegativeComment',data)
};
/**
 * 产品详情
 */
export function negativeProductDetail (data) {
  return fetchGet('/api/Negative/ProductDetail',data)
};
/**
 * 产品评论
 */
export function negativeNCommentList (data) {
  return fetchPost('/api/Negative/NCommentList',data)
};
/**
 * 分类列表
 */
export function negativeNCType () {
  return fetchGet('/api/Negative/NCType')
};
/**
 * 根据类型id查询产品
 */
export function negativeNCProductListByType (data) {
  return fetchGet('/api/Negative/NCProductListByType',data)
};
/**
 * 产品比较
 */
export function compareToProduct (data) {
  return fetchPost('/api/HotType/CompareToProduct',data)
};

/**
 * 差评网站标签
 */
export function negativeNLabe (data) {
  return fetchGet('/api/Negative/NLabe',data)
};