> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

[[toc]]

- MVVM 是 Model-View-ViewModel 的缩写
- Model: 代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑。我们可以把 Model 称为数据层，因为它仅仅关注数据本身，不关心任何行为
- View: 用户操作界面。当 ViewModel 对 Model 进行更新的时候，会通过数据绑定更新到 View
- ViewModel： 业务逻辑层，View 需要什么数据，ViewModel 要提供这个数据；View 有某些操作，ViewModel 就要响应这些操作，所以可以说它是 Model for View.

总结： 

- MVVM 模式简化了界面与业务的依赖，解决了数据频繁更新。
- MVVM 在使用当中，利用双向绑定技术，使得 Model 变化时，ViewModel 会自动更新，而 ViewModel 变化时，View 也会自动变化。

