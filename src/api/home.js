import {get} from '@/utils/api'
//所有的接口的方法都加s

//获取轮播图
export const getFocus=()=>{
    return get('/api/focus')
}

// //获取课程列表
// export const getLessons=(type,offset,limit)=>{
//     return get(url+`/lessonList/${type}/${offset}/${limit}`)
// }