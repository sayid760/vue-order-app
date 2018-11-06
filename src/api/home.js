import {get, post} from '@/utils/api'
// 所有的接口的方法都加s

// 获取轮播图
export const getFocus = () => {
  return get('/api/focus')
}

// 获取轮播图
export const addUsername = (data) => {
  return post('/api/add', data)
}

// 增加人数
export const addPeopleInfo = (data) => {
  return post('/api/addPeopleInfo', data)
}




// //获取课程列表
// export const getLessons=(type,offset,limit)=>{
//     return get(url+`/lessonList/${type}/${offset}/${limit}`)
// }
