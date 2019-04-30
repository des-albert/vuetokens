<template>
  <div class="container">
    <h3>User Login</h3>
    <form @submit.prevent="login">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>User &nbsp;</label>
            <select v-model="selected">
              <input
                v-model="selected"
                type="hidden"
                name="selectedName"
              >
              <option
                v-for="user in users"
                :key="user.name"
              >
                {{ user.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <br>
      <div class="form-group">
        <button
          class="btn btn-primary"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      selected: ''
    };
  },
  created() {
    let uri = '/users';
    this.axios.get(uri).then(response => {
      this.users = response.data;
    });
  },
  methods: {
    login() {
      this.$store.commit('change', this.selected );
    }
  }
};
</script>
