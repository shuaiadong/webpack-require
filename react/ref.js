createRef && ref

- React.createRef();
- string
- (ele) => (this.methodRef = ele)

// 纯组件 
// 您不能ref在功能组件上使用该属性，因为它们没有实例： 如下
/**
 * function MyFunctionalComponent() {
  return <input />;
}

class Parent extends React.Component {
  render() {
    // This will *not* work!
    return (
      <MyFunctionalComponent
        ref={(input) => { this.textInput = input; }} />
    );
  }
}

 * 
 */
react.forwardRed((props, ref)=> {

})


function createRef () {
    const refObject = {
        current: null,
    }
    return refObject;
}

function forwardRed (props, render) {

    return {
        $$typeof: 'forwardRedref',
        render
    }
}