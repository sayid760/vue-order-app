/**
 * Created by Administrator on 2018/3/20 0020.
 */
var router = require('koa-router')()

// router.get('/',async (ctx)=>{
//     ctx.body="api接口";
// })
// module.exports=router.routes();

// var router=require('koa-router')();
// const DB=require('../module/db.js');
// const config=require('../module/config.js');
// const tools=require('../module/tools.js');

router.get('/', (ctx) => {
  ctx.body = {'title': '这是一个api'}
})

// 购物车
router.post('/add', async ctx => {
  var data = ctx.request.body
  console.log(data)
  ctx.body = {'result': data}
})

// 商品列表
router.get('/productlist', async ctx => {
  var pcate = await DB.find('productcate', {}, {'_id': 1, 'title': 1, 'pid': 1})
  var product = await DB.find('product', {}, {'_id': 1, 'cate_id': 1, 'catename': 1, 'title': 1, 'price': 1, 'img_url': 1})
  for (var i = 0; i < pcate.length; i++) {
    pcate[i].list = []
    for (var j = 0; j < product.length; j++) {
      if (pcate[i]._id == product[j].cate_id) {
        pcate[i].list.push(product[j])
      }
    }
  }
  ctx.body = {'result': pcate}
})

// 商品详情
router.get('/productcontent', async ctx => {
  try {
    var id = ctx.query.id
    var product = await DB.find('product', {'_id': DB.getObjectId(id)})
    ctx.body = {'result': product}
  } catch (err) {
    ctx.body = {'result': '', 'err': err}
  }
})

// 购物车
router.post('/addcart', async ctx => {
  var data = ctx.request.body

  // console.log(data);
  try {
    var uid = data.uid

    var product_id = data.product_id

    var hasData = await DB.find('cart', {'uid': uid, 'product_id': product_id})

    if (hasData.length > 0) {
      await DB.update('cart', {'uid': uid, 'product_id': product_id}, {'num': hasData[0].num + 1})
    } else {
      var result = await DB.insert('cart', data)
    }
    ctx.body = {'success': 'true', 'msg': '增加数据成功'}
  } catch (err) {
    ctx.body = {'success': 'false', 'msg': '增加数据失败'}
  }
})

// 购物车
router.get('/cartlist', async ctx => {
  var uid = ctx.query.uid
  var result = await DB.find('cart', {'uid': uid})

  ctx.body = {'success': 'true', 'result': result}
})

// 增加购物车数据
router.get('/incCart', async ctx => {
  var uid = ctx.query.uid
  var product_id = ctx.query.product_id

  var num = parseInt(ctx.query.num)

  var result = await DB.update('cart', {'uid': uid, 'product_id': product_id}, {'num': num + 1})
  ctx.body = {'success': true}
})

// 减少购物车数据
router.get('/decCart', async ctx => {
  var uid = ctx.query.uid
  var product_id = ctx.query.product_id
  var num = parseInt(ctx.query.num)

  if (num <= 1) {
    var result = await DB.remove('cart', {'uid': uid, 'product_id': product_id})
  } else {
    var result = await DB.update('cart', {'uid': uid, 'product_id': product_id}, {'num': num - 1})
  }
  ctx.body = {'success': true}
})

// 获取购物车数量
router.get('/cartCount', async ctx => {
  var uid = ctx.query.uid
  var result = await DB.find('cart', {'uid': uid})

  // console.log(result);
  var sum = 0
  for (var i = 0; i < result.length; i++) {
    sum += result[i].num
  }
  ctx.body = {'success': true, 'result': sum}
})

router.get('/focus', (ctx) => {
  ctx.body = {'title': '这是一个轮播图的api'}
})
module.exports = router.routes()
