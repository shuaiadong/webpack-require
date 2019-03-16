// 最简单的webpack
// 1 自调用函数
// 2 参数传递对象
// 3 缓存

(function (modules)
{
    // 缓存
    var installedModules = {};

    function _webpack_require_ (moduleId) {

        // 判断是否在缓存中 yes return
        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }

        // 注册模块
        var module = installedModules[moduleId] = {
            i: moduleId, // 模块id
            l: false,    // loaded 是否已加载
            exports: {}  // 暴露的api
        }

        // 执行模块
        installedModules[moduleId].call(module.exports, module, module.exports, _webpack_require_)
        /**
         * installedModules[moduleId].call(
         *                                  module.exports,       // this
         *                                  module,               // 
         *                                  module.exports,
         *                                  _webpack_require_
         * )
         * 
         * 
         *  */
        

         // 添加已加载表标识
         module.l = true;
    }
    // 执行

    return _webpack_require_(_webpack_require_.s = './src/index.js')
})
({
    './src/index.js': function (module, exports, _webpack_require_) {},
    '.module1': function () {},
    '.module2': function () {},
    '.module3': function () {},
    '.module4': function () {},
    
})
/**
 * todo 
 * 待考虑问题
 *   静态属性？什么时候用？
 *         _webpack_require_ 
 *                  .m
 *                  .c
 * 静态方法？?
 *                 .d 
 *                 .r
 *                 .t 
 *                 .n 
 *                 .o 
 * 
 */