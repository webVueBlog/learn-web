> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

要使vue支持ts写法，我们需要用到vue-property-decorator，这个组件完全依赖于vue-class-componet

首先安装：

```js
npm i -D vue-property-decorator
```

@Model(event?: string, options: (PropOptions | Constructor[] | Constructor) = {})

> @Model装饰器允许我们在一个组件上自定义v-model，接受两个参数:

1. event: string类型，表示事件名；
2. options: PropOptions | Constructor[] | Constructor与@Prop的第一个参数一致；

看下面例子：

```js
import { Vue, Component, Model } from 'vue-property-decorator'
 
@Component
export default class YourComponent extends Vue {
  @Model('change', { type: Boolean }) readonly checked!: boolean
}
```

等同于以下代码：

```js
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
    },
  },
}
```

看下面父子组件例子： 

```js
// 父组件
<template>
  <div class="Model">
    <ModelComponent v-model="val" value="some value"></ModelComponent>
    <div>父组件 value: {{val}}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModelComponent from './ModelComponent.vue';
 
@Component({ components: {ModelComponent} })
export default class ModelPage extends Vue {
  private val = 'hello';
}
</script>
 
// 子组件
<template>
  <div class="child">
    子组件:<input type="text" :value="inputValue" @input="inputHandle($event)"/>
  </div>
</template>
 
<script lang="ts">
import {Component, Vue, Model} from 'vue-property-decorator';
 
@Component
export default class ModelComponent extends Vue {
   @Model('change', { type: String }) readonly inputValue!: string
 
   public inputHandle(event): void {
     this.$emit('change', event.target.value); 
   }
}
</script>
```
