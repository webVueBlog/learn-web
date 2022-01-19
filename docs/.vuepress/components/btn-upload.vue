<template>
   <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
	<div>{{container.file}}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    container: {
      file: null
    }
  }),
  methods: {
     handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      Object.assign(this.$data, this.$options.data());
      this.container.file = file;
    },
    async handleUpload() {}
  }
};
</script>






