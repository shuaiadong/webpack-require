// require 函数
(function (modules) {

    var installedModule = {};

    function _webpack_require_(moduleId) {
        console.log(moduleId, 'src')
        // todo 判断缓存
        if( installedModule[moduleId]) {
            return installedModule[moduleId].exports;
        };

        // 注册模块
        var module = installedModule[moduleId] = {
            i: moduleId,
            l: false,                  // 是否已加载
            exports: {}
        }

        // 调用模块
        modules[moduleId].call(module.exports, module, module.exports, _webpack_require_);

        // 标记已加载
        module.l = true;

        return module.exports;
    }
    return _webpack_require_(_webpack_require_.prototype.r = 'src')
})
({
    'src': function (module, exports, _webpack_require_) { console.log(module, exports, _webpack_require_, 'src')}
});


// react
function createElement (type, config, children) {
    let propName;

    let props = key =  ref = null;

    let props = {};
        
        // 有的话
        key
        ref 

    for(propName in  config) {
        if( //不是原型上的属性 && 不是react的自带属性 ref key..
            Object.hasOwnProperty.call(config, propName) &&
            !RESERVED_PROPS.hasOwnProperty(propName)
        ){
            props[propName] = config[propName]
        }
    }

    let childrenLength = arguments.length -2;


    if (childrenLength = 1) {
        props.children = children
    }
    else if(childrenLength > 1) {
        const childrenArray = [];
        for (let index = 0; index < childrenLength; index++) {
            childrenArray.push(arguments[ index+ 2]);
        }
        props.children = childrenArray
    }


    if(type && type.defaultProps) {
        // 默认属性 null 不进来
    }

    return ReactElement(
        type,
        key,
        ref,
        props,
        // ...
    )
}


function  Component (props, content, updater) {

    this.props = props
    this.content = content
    this.updater = updater || ''// 其他平台的更新模式
}
Component.prototype.setDate = function (stere, cb) {
    // 判断 提示

    // 跟新
     /**
     * 
     * var t = { a: 
            { fun: function (){console.log(this)}},
            fun: function (){console.log(this)},
            name: 'a'
        }

        t.fun() this = t
        t.a.fun this = a
     */
    this.updater.enqueueSetState(this,stere, cb, 'setState' )

   
}

function ComponentDummy() {
    this.prototype = Component.prototype
}

function pureComponent(props, content, updater){
    this.props = props
    this.content = content
    this.updater = updater || ''// 其他平台的更新模式
}
// 单粒模式
const pureComponentPrototype = (pureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = pureComponentPrototype;
// 避免一直往原型链上找
Object.assign(pureComponentPrototype, Component.prototype);
// 标记
pureComponentPrototype.isPureReactComponent = true;