import { reactive } from 'vue';

export default {
  data: reactive({
    username: '',
    password: '',
  }),
  logon() {
    alert(this.data.username + '\n' + this.data.password);
  },
};
