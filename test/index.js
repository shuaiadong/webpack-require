(function (modules) {
    // 缓存
    const installedModule = {};

    function _webpack_require_ (moduleId) {
        
        // 是否有缓存
        if (installedModule[moduleId]) {
            return installedModule[moduleId];
        }

        // 注册模块
        let module = installedModule[moduleId] = {
            i: moduleId,
            l: false, // 是否加载
            exports: {}
        };

        // 运行
        modules[moduleId].call(module.exports, module, module.exports, _webpack_require_);

        module.l = true; // 模块已加载

        return module.exports;
    }

    return _webpack_require_(_webpack_require_.r = 'index')
})
({
    'index': function () {
        console.log('index')
    }
})