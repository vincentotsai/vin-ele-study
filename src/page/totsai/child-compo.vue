<template>
  <div class="child">
    <div class="msg">{{msg}}</div>
    <div class="todo">{{todo}}</div>
  </div>
</template>
<script>
export default {
  props: ['msg','todo']
}
</script>
