<template>
  <div class="container">
    <div class="row">
      <!--
            Incoming Token
      -->
      <div class="table-responsive col-md-6 bg-custom">
        <h2 class="text-info">
          Incoming Tokens
        </h2>
        <table class="table table-hover table-striped text-info">
          <thead>
            <tr>
              <th>Status</th>
              <th>Creator</th>
              <th>Subject</th>
              <th>Request</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="token in tokens"
              :key="token._id"
            >
              <template
                v-if="token && token.status !== 'archived' && $store.getters.user === token.recipient"
              >
                <td>{{ token.status }}</td>
                <td>{{ token.creator }}</td>
                <td>{{ token.subject }}</td>
                <td>{{ token.request }}</td>
                <td>
                  <router-link
                    :to="{name: 'edit', params: { id: token._id }}"
                    class="btn btn-warning"
                  >
                    Edit
                  </router-link>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-responsive col-md-6 primary">
        <h2 class="text-success">
          Outgoing Tokens
        </h2>
        <table class="table table-hover table-striped text-success">
          <thead>
            <tr>
              <th>Status</th>
              <th>Recipient</th>
              <th>Subject</th>
              <th>Request</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="token in tokens"
              :key="token._id"
            >
              <template
                v-if="token && token.status !== 'archived' && $store.getters.user === token.creator"
              >
                <td> {{ token.status }} </td>
                <td>{{ token.recipient }}</td>
                <td>{{ token.subject }}</td>
                <td>{{ token.request }}</td>
                <td>
                  <router-link
                    class="btn btn-warning"
                    :to="{name: 'edit', params: { id: token._id }}"
                  >
                    Edit
                  </router-link>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tokens: []
    };
  },
  created() {
    let uri = '/tokens';
    if (process.env.NODE_ENV !== 'production') {
      uri = 'http://localhost:4000/tokens';
    }
    this.axios.get(uri).then(response => {
      this.tokens = response.data;
    });
  }
};
</script>
