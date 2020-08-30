<script lang="ts">
  import Router from 'svelte-spa-router'
  import Login from './views/Login.svelte'

  const routes = {
    '/login': Login,
  }
</script>

<main>
  <Router {routes} />
</main>
