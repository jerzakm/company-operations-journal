<script lang="ts">
  import Router from 'svelte-spa-router'
  import Login from './views/Login.svelte'

  const routes = {
    '/login': Login,
  }
</script>

<main>
  <h1 class="bg-po">asd2</h1>
  <Router {routes} />
</main>
