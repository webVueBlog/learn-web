> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

要使vue支持ts写法，我们需要用到vue-property-decorator，这个组件完全依赖于vue-class-componet

首先安装：

```js
npm i -D vue-property-decorator
```

> @Emit(event?: string)

@Emit装饰器接收一个可选参数，作为事件名；如果没有提供这个参数，$emit会将回调函数的camelCase(驼峰式)转为kebab-case（短横线命名），并将其作为事件名；

@Emit会将回调函数的返回值作为第二个参数，如果返回值是一个Promise对象，$emit会将Promise对象状态为resolved之后触发；

@Emit的回调函数的参数，会放在其返回值之后，一起被$emit当作参数使用；

看下面例子：

```js
import { Vue, Component, Emit } from 'vue-property-decorator'
 
@Component
export default class YourComponent extends Vue {
  count = 0
 
  @Emit()
  addToCount(n: number) {
    this.count += n
  }
 
  @Emit('reset')
  resetCount() {
    this.count = 0
  }
 
  @Emit()
  returnValue() {
    return 10
  }
 
  @Emit()
  onInputChange(e) {
    return e.target.value
  }
 
  @Emit()
  promise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }
}
```

以上代码等同于：

```js
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    addToCount(n) {
      this.count += n
      // 将addToCount转成add-to-count
      this.$emit('add-to-count', n)
    },
    resetCount() {
      this.count = 0
      this.$emit('reset')
    },
    returnValue() {
      this.$emit('return-value', 10)
    },
    onInputChange(e) {
      this.$emit('on-input-change', e.target.value, e)
    },
    promise() {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(20)
        }, 0)
      })
 
      promise.then((value) => {
        this.$emit('promise', value)
      })
    },
  },
}
```
