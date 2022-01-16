> 点击勘误[issues](https://github.com/webVueBlog/learn-web/issues)，哪吒感谢大家的阅读

效果如下：

<div class="container">
  <div>
    <span>Happy</span>
    <span>Wish</span>
  </div>
    <div>
    <span>New</span>
    <span>You</span>
  </div>
  <footer>
      <div>
    <span>Year</span>
    <span>Luck</span>
  </div> 
  <div>
    <span>2022</span>
    <span>Tomorrow</span>
  </div>
  </footer>
</div>
<style>
:root {
  font-size: 20px;
  font-family: Times New Roman;
}
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  perspective: 35rem;
}
.container footer {
  perspective: 35rem;
  transform: translateY(-1.4rem);
}
.container div {
  font-size: 6rem;
  height: 6rem;
  overflow: hidden;
  text-transform: uppercase;
}
.container div>span {
  display: block;
  height: 6rem;
  padding: 0 1rem;
  font-weight: bold;
  letter-spacing: .2rem;
  text-align: center;
  transition: .3s;
}
.container:hover div>span {
  transform: translateY(-100%);
}
.container div:nth-child(odd) {
  background-color: #eee;
  transform: rotateX(30deg);
}
.container div:nth-child(even) {
  background-color: #ccc;
  transform: translateY(-.6rem) rotateX(-30deg);
}
</style>





