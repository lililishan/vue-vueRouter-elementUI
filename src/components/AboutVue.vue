<template>
  <div class="aboutCoent">
    <h3 v-on:click="getAlert">{{msg}}-{{count}}</h3>
    <h4>{{title}}</h4>
    <button @click="getLog">buttonCount</button>
  </div>
</template>
<script>
export default {
  props: ["msg"],
  data: () => {
    return {
      title: "",
      count: 0
    };
  },
  methods: {
    getAlert: function() {
      this.title = "Main =" + "About Vue";
    },
    getLog: function() {
      this.count++;
    }
  }
};
</script>
<style lang="less">
.aboutCoent {
  width: 300px;
  height: 300px;
  margin: 15px auto 0;
  background-color: #f8f8f8;
  border: 1px solid #f2f2f2;
  h4 {
      color: red;
  }
}
</style>
