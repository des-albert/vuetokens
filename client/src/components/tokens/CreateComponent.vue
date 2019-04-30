<template>
  <div class="container">
    <h1>New Token</h1>
    <form @submit.prevent="addToken">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Recipient: &nbsp;&nbsp;</label>
            <select
              v-model="token.recipient"
            >
              <input
                v-model="token.recipient"
                type="hidden"
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
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Activity: &nbsp;&nbsp;</label>
            <select
              v-model="action"
            >
              <input
                v-model="action"
                type="hidden"
              >
              <option
                v-for="act in actions"
                :key="act"
              >
                {{ act }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Subject: &nbsp;&nbsp;</label>
            <select
              v-model="token.subject"
            >
              <input
                v-model="token.subject"
                type="hidden"
              >
              <option
                v-for="{ name } in filterSubjects"
                :key="name"
              >
                {{ name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Request:</label>
            <textarea
              v-model="token.request"
              class="form-control"
              rows="5"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">
          Create
        </button>
      </div>
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action: '',
      token: {},
      users: [],
      subjects: []
    };
  },
  computed: {
    actions: function() {
      return  [...new Set(this.subjects.map(p => p.activity))];
    },
    filterSubjects: function() {
      return this.subjects.filter(m => m.activity === this.action);
    }
  },
  created() {
    let uri = '/users';
    this.axios.get(uri).then(response => {
      this.users = response.data;
    });
    let urs = '/subjects';
    this.axios.get(urs).then(response => {
      this.subjects = response.data;
    });
  },

  methods: {
    addToken() {
      if (this.$store.getters.user) {
        this.token.creator = this.$store.getters.user;
        let uri = '/tokens/add';
        this.axios.post(uri, this.token).then(() => {
          this.$router.push({ name: 'index' });
        });
      }
    }
  }
};
</script>
