function createElement(tag, config, children) {
    let propName;

    let ref = null;
    let type = null;
    let key = null;
    let props = null;
    
    if(config != null) {
        // has key
        // has ref
    }

    for (propName in config) {
        // 不是原型的 && 不是react de _selt key 
        props[propName] =  config[propName]
    }

    // children && childrenArray

    // default props

    

    return ReactElement(
        type,
        ref,
        key
    );
}