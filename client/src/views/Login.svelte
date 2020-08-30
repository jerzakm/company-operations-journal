<script>
  import { userAuth } from '../stores.ts'
  // import { onMount } from 'svelte'

  userAuth.subscribe((u) => {
    console.log(u)
  })

  // onMount(() => {})

  function login() {}
</script>

<container class="fixed h-screen w-screen flex items-center justify-center">
  <div>
    <h2 class="pl-4">Zaloguj się</h2>
    <div
      class="flex flex-col w-full max-w-sm mx-auto p-4 border border-gray-200
      bg-white">
      <div class="flex flex-col mb-4">
        <label
          for="name"
          class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          Login
        </label>

        <div class="relative">

          <input
            name="userId"
            type="text"
            placeholder="Login"
            value=""
            class="text-sm sm:text-base relative w-full border rounded
            placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2
            pr-2 pl-4" />

        </div>
      </div>
      <div class="flex flex-col mb-4">
        <label
          for="name"
          class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          Hasło
        </label>

        <div class="relative">

          <input
            name="password"
            type="password"
            placeholder="Hasło"
            value=""
            class="text-sm sm:text-base relative w-full border rounded
            placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2
            pr-2 pl-4 border-red-500" />

        </div>

        <span
          class="flex items-center font-medium tracking-wide text-red-500
          text-xs mt-1 ml-1">
          Invalid username field !
        </span>
        <button
          type="button"
          class="btn-primary transition duration-300 ease-in-out
          focus:outline-none focus:shadow-outline bg-porange-500 text-white
          font-normal py-2 px-4 mr-1 rounded">
          Zaloguj się
        </button>
      </div>
    </div>
  </div>
</container>
