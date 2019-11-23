<script>
  import { stores } from "@sapper/app";
  import * as api from "api";

  const { page } = stores();

  export let currentPage;

  let limit = 10;
  let stories;
  let storiesCount;
  let error = null;
  let loaded = false;

  $: sort = $page.query.sort || "recent";
  $: offset = (currentPage - 1) * limit;
  $: lastPage = storiesCount && Math.ceil(storiesCount / limit);

  $: currentPage && sort && loadData();

  async function loadData() {
    try {
      stories = null;
      const response = await api.returnsList.getReturnsList({
        // offset,
        // limit,
        // sort
      });
      stories = response.data;
      storiesCount = response.totalCount;
    } catch (e) {
      error = e;
    }
  }
</script>

{#if error}
  {error.message}
{:else if !stories}
  Loading returns list...
{:else if stories.length === 0}
  Returns list is empty
{:else}
  <ol class="story-list">
    {#each stories as story}
      <h1>story</h1>
    {/each}
  </ol>
{/if}
