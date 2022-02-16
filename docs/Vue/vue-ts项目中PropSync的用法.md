> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

要使vue支持ts写法，我们需要用到vue-property-decorator，这个组件完全依赖于vue-class-componet

首先安装：

```js
npm i -D vue-property-decorator
```

@PropSync(propName: string, options: (PropOptions | Constructor[] | Constructor) = {})

> @PropSync和@Prop用法类似，二者区别在于：

@PropSync装饰器接受两个参数：

propName: string类型，表示父组件传递过来的属性名；

```js
options: PropOptions | Constructor[] | Constructor 与@Prop中第一个参数一致；
```

@PropSync会生成一个新的计算属性

注意,使用@PropSync的时候是要在父组件配合`.sync`使用的

```js
import { Vue, Component, PropSync } from 'vue-property-decorator'
 
@Component
export default class YourComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
}
```

以上代码等同于：

```js
export default {
  props: {
    name: {
      type: String,
    },
  },
  computed: {
    syncedName: {
      get() {
        return this.name
      },
      set(value) {
        this.$emit('update:name', value)
      },
    },
  },
}
```

来看一个父子组件的例子：

```js
// 父组件
<template>
  <div class="PropSync">
    <h1>父组件</h1>
    <h2>{{name}}</h2>
    <Child :name.sync="name"></Child>
  </div>
</template>
 
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Child from './Child.vue';
 
@Component({components: { Parent }})
export default class ParentPage extends Vue {
  private name = '父组件名字';
}
</script>
 
// 子组件
<template>
  <div class="child">
    <h1>子组件:</h1>
    <h2>syncedName:{{ syncedName }}</h2>
    <button @click="changeName">修改name</button>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue, PropSync} from 'vue-property-decorator';
 
@Component
export default class ChildComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string; // 用来实现组件的双向绑定,子组件可以更改父组件穿过来的值
 
  changeName(): void {
    this.syncedName = '子组件修改过后的syncedName!'; // 双向绑定,更改syncedName会更改父组件的name
  }
}
</script>
```