> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

要使vue支持ts写法，我们需要用到vue-property-decorator，这个组件完全依赖于vue-class-componet

首先安装：

```js
npm i -D vue-property-decorator
```

@Prop(options: (PropOptions | Constructor[] | Constructor) = {}) 

> @Prop装饰器接收一个参数，这个参数可以有三种写法：

PropOptions ，包含以下选项：type(类型), required(必填), default(默认值), validator(验证函数)

> Constructor[]， 指定prop的可选类型；

Constructor，如String，Number，Boolean，Array，Object，Date，Function，Symbol或自定义函数类型等，指定prop的类型
 
如下面例子：

```js
import { Vue, Component, Prop } from 'vue-property-decorator'
 
@Component
export default class Component extends Vue {
  // number类型
  @Prop(Number) readonly propA: number | undefined
  // 默认值为'default value'
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined
  @Prop({
        default: () => {
            return [];
        }
  })
  readonly propD: {}[]
}
```

注：属性的类型后面需要加上`undefined` 类型；或者在属性名后面加上`!`，表示非`null` 和 非`undefined`的断言，否则编译器会给出错误提示；

以上代码等同于：

```js
export default {
  props: {
    propA: {
      type: Number,
    },
    propB: {
      default: 'default value',
    },
    propC: {
      type: [String, Boolean],
    },
    propD: {
      default () {
           return []
      }
    }
  },
}
```
