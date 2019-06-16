<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarColor01"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              to="/tokens"
              class="nav-link"
            >
              Tokens
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/tokens/create"
              class="nav-link"
            >
              Create Token
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
            >
              Help
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav navbar-right">
          <div v-if="$store.getters.user">
            <li class="nav-item">
              <router-link
                to="/login"
                class="nav-link"
              >
                Current User: {{ $store.getters.user }}
              </router-link>
            </li>
          </div>
          <div v-else>
            <li class="nav-item">
              <router-link
                to="/login"
                class="nav-link"
              >
                Login
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
    <transition
      name="bounce"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script >
<style scoped>

root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkseagreen
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.bg-custom {
  background-color: #8fbc8f;
}
.table-striped>tbody>tr:nth-child(odd)>td,
.table-striped>tbody>tr:nth-child(odd)>th {
    background-color: lavender;
}

.table-striped>tbody>tr:nth-child(even)>td,
.table-striped>tbody>tr:nth-child(even)>th {
  background-color: mistyrose;
}

.table-striped>tbody>tr:hover>td,
.table-striped>tbody>tr:hover>th {
  background-color: darksalmon;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</stylescoped>
