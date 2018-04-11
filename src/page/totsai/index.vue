<template>
  <div class="vin">
    <!-- <div v-if="name==1" v-for="name in names" :key="name" @click="fullName = 'Hello World'">{{name}}.{{firstName}},{{lastName}} -- {{fullName}}</div> -->
    <!-- <textarea v-model="message" placeholder="add multiple lines"></textarea> -->
		<div style="position: fixed;bottom:30px;right:20px;background:red;color:white;border-radius:5px;border-shadow:2px 2px 2px gray;" @click="toHome">home</div>
    

    <div id="example-5">
      <select v-model="selected" style="background:white;">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option value="b">B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <vin-compo></vin-compo>
    <!-- <my-compo></my-compo> -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: 'vin',
      lastName: 'Tsai',
      showName: true,
      names: [1, 2, 3, 4],
      message: 'hello world young dreams',
      selected: 'b',
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this)
  },
  created() {
    console.log('Create', this)
  },
  beforeMount() {
    console.log('beforeMount el->', this.$el)
  },
  mounted() {
    console.log('mounted el->', this.$el)
  },
  
  watch: {},
  methods: {
    toHome() {
      this.$router.push({
        path:'/'
      })
    }
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      set: function(val) {
        let names = val.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.vin {
  background: white;
  font-size: 14px;
}
</style>


