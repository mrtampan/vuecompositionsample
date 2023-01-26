<script>
import login from './login';

export default {
  name: 'App',
  setup() {
    return {
      login,
    };
  },
};
</script>
<template>
  <div>
    <form action="" @submit.prevent="login.logon">
      <input type="text" v-model="login.data.username" />
      <input type="text" v-model="login.data.password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
