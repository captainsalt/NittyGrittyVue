<template>
  <div>
    <div>Hello from component</div>
    <div>Component Data: {{name}}</div>
    <input type="texr" v-model="name">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: "I'm data from the component"
    };
  }
};
</script>

