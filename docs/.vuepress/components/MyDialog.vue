<!-- docs/.vuepress/components/MyDialog.vue -->
<!-- 这里直接使用Element官方弹窗的代码 -->
<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert("这是一段内容", "标题名称", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `action: ${action}`
            });
          }
        });
      }
    }
  };
</script>