function Component (props, content, updater) {

    this.props = props;

    this.content = content;

    this.updater = updater || ReactNoopUpdateQueue


}
Component.prototype.setState = function ( state, cb) {
    this.updater.enqueueSetState(this, state, cb, 'setState');
}
function PureComponent(props, content, updater) {
    this.props = props;
    this.conent = content;
    this.updater = updater || ReactNoopUpdateQueue
}

function ComponentDummy() {
    ComponentDummy.prototype = Component.prototype;
}
const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy()); //单例继承
pureComponentPrototype.constructor = PureComponent;
// 可枚举属性
Object.assign(pureComponentPrototype, Component.prototype); //  ?  todo -> https://segmentfault.com/q/1010000013579131 

pureComponentPrototype.isPureReactComponent = true;


