<script lang="ts">
  import 'smelte/src/tailwind.css'
  export let name: string
  import Button from 'smelte/src/components/Button'
  import Treeview from 'smelte/src/components/Treeview'
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1 class="p-">Hello {name}!</h1>
  <Button>ok</Button>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
