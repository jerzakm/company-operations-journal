<script>
  import { stores } from "@sapper/app";
  import * as api from "api";
  import DataTable, { Head, Body, Row, Cell } from "@smui/data-table";

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
      console.log(response)
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
  <ol class="story-list" />
  <div>
    <DataTable table$aria-label="Returns list">
      <Head>
        <Row>
          <Cell>#</Cell>
          <Cell>Sender</Cell>
          <Cell>Time</Cell>
          <Cell>Product</Cell>
          <Cell>Sale source</Cell>
          <Cell>Return Reason</Cell>
          <Cell>Moved to</Cell>
          <Cell>Status</Cell>
        </Row>
      </Head>
      <Body>
        {#each stories as story}
          <Row>
            <Cell>{story.id}</Cell>
            <Cell>{story.address.name}</Cell>
            <Cell>Time</Cell>
            <Cell>Product</Cell>
            <Cell>Sale source</Cell>
            <Cell>Return Reason</Cell>
            <Cell>Moved to</Cell>
            <Cell>Status</Cell>
          </Row>
        {/each}
      </Body>
    </DataTable>
  </div>
{/if}
