<template>
  <div class="container">
    <h2>Edit Token</h2>
    <form @submit.prevent="updateToken">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>
              Current Status: &nbsp;&nbsp; <b class="text-uppercase text-danger">
                {{ token.status }}
              </b>
              <br>
              Recipient: <span class="text-primary">
                {{ token.recipient }}
              </span>
              Creator: <span class="text-primary">
                {{ token.creator }}
              </span>
            </label>
            <br>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Subject:</label>
            <input
              v-model="token.subject"
              class="form-control"
              type="text"
            >
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
            >
            </textarea>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Reply:</label>
            <textarea
              v-model="token.reply"
              class="form-control"
              rows="5"
            >
            </textarea>
          </div>
        </div>
      </div>
      <br>
      <!--
          Outgoing Tokens
      -->
      <div class="form-group">
        <template
          v-if="$store.getters.user === token.creator"
        >
          <button
            class="btn btn-warning"
            @click="() => { token.status = 'draft' }"
          >
            Draft
          </button> &nbsp;
          <button
            class="btn btn-info"
            @click="() => { token.status = 'sent' }"
          >
            Sent
          </button> &nbsp;
          <button
            class="btn btn-primary"
            @click="() => { token.status = 'archived'}"
          >
            Archive
          </button>
        </template>
        <!--
          Incoming Tokens
        -->

        <template
          v-else
        >
          <button
            class="btn btn-warning"
            @click="() => { token.status = 'accepted' }"
          >
            Accept
          </button> &nbsp;
          <button
            class="btn btn-info"
            @click="() => { token.status = 'rejected' }"
          >
            Reject
          </button> &nbsp;
          <button
            class="btn btn-primary"
            @click="() => { token.status = 'completed' }"
          >
            Complete
          </button>
        </template>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: {}
    };
  },
  created() {
    let uri = `/tokens/edit/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.token = response.data;
    });
  },
  methods: {
    updateToken() {
      let uri = `/tokens/update/${this.$route.params.id}`;
      this.axios.post(uri, this.token).then(() => {
        this.$router.push({name: 'index'});
      });
    }
  }
};
</script>
