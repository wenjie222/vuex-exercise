<template>
  <div class="hello">
    <h2>我是从页面上直接获取的{{this.$store.state.count}}</h2>
    <h2>我是从getters获取的计算属性值{{this.$store.getters.getStateCount}}</h2>
    <p>count的值:{{this.$store.state.count}}</p>
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>
    <div style="border:1px solid red;margin-top:50px;">
      {{count1}}
    </div>
  </div>
</template>

<script>
import{mapState,mapActions,mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState({
      count1:state=>state.count
    })
  },
  methods:{
    addFun(){
      this.$store.dispatch("addFun");
    },
    reductionFun(){
      var n = 10;
      this.$store.dispatch("reductionFun",n);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
