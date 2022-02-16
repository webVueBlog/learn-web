> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

要使vue支持ts写法，我们需要用到vue-property-decorator，这个组件完全依赖于vue-class-componet

首先安装：

```js
npm i -D vue-property-decorator
```

@Watch(path: string, options: WatchOptions = {}) 

> @Watch装饰器接受两个参数：

1. path: string类型，表示需要被监听的属性名；
2. options?: WatchOptions = {} 包含两个属性： 
	- immediate?: boolean 监听开始后是否立即调用该回调函数; 
	- deep?: boolean 表示是否深度监听

使用Demo如下：

```js
<template>
  <div class="watchPage">
    <h1>child: {{child}}<input type="text" v-model="child"/></h1>
    <h1>person.name: {{person.name}}<input type="text" v-model="person.name"/></h1>
  </div>
</template>
 
<script lang="ts">
// 从vue-property-decorator中引入Component、Watch、Vue
import { Component, Vue, Watch } from 'vue-property-decorator';
 
@Component
export default class WatchPage extends Vue {
  child = ''
  person = {
    name: 'zxx'
  }
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {
    console.log(val, oldVal);
  }
 
  @Watch('person', { immediate: true, deep: true })
  onPersonChanged(val: Person, oldVal: Person) {
    console.log(val, oldVal);
  }
}
</script>
```

以上script中代码等同于：

```js
export default {
  data() {
    return {
      child: '',
      person: {
        name: 'zxx'
      }
    }
  }
  watch: {
    child: [
      {
        handler: 'onChildChanged',
        immediate: false,
        deep: false,
      },
    ],
    person: [
      {
        handler: 'onPersonChanged',
        immediate: true,
        deep: true,
      }
    ],
  },
  methods: {
    onChildChanged(val, oldVal) {
      console.log(val ,oldVal);
    },
    onPersonChanged(val, oldVal) {
      console.log(val ,oldVal);
    }
  },
}
```

