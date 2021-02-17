<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  created() {
    this.$axios({
      type: 'get',
      async: false,
      url: '/money/get',
    }).then((res) => {
      console.log(res);
    });
  },
};
</script>
