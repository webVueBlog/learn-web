<script lang="tsx">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class TypeScript extends Vue {
  msg: string = 'Hello TypeScript and tsx!'
  render() {
    return (
      <h1>
        {this.msg}
      </h1>
    )
  }
}
</script>