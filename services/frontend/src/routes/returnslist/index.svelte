<script>
  import ReturnsList from "../_components/ReturnsList/index.svelte";
  import Card, { Content } from "@smui/card";
</script>

<style>
  .module-name {
    margin-bottom: 10px;
  }
</style>

<div class="module-content-centered">
  <Card>
    <Content>
      <div class="mdc-typography--headline5 module-name">Returns list</div>
      <ReturnsList currentPage={1} />
    </Content>
  </Card>
</div>
