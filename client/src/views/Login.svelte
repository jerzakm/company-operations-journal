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
          Name
        </label>

        <div class="relative">

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
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
          Name
        </label>

        <div class="relative">

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
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
      </div>
    </div>
  </div>
</container>
