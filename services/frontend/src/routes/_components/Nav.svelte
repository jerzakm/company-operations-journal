<script>
  import { goto, stores } from "@sapper/app";
  import axios from "axios";
  import Button, { Group, GroupItem, Label, Icon } from "@smui/button";
  import Menu from "@smui/menu";
  import List, { Item, Separator, Text } from "@smui/list";

  const { session } = stores();

  async function logout() {
    await axios.post("/auth/logout");
    $session.user = null;
    goto("/");
  }
</script>

<style>
  .navbar {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }

  .navbar .logo {
    font-size: 22px;
    font-weight: 500;
    color: #121212;
    text-decoration: none;
  }

  .navbar .username {
    color: #121212;
  }
</style>

<nav class="navbar mdc-elevation--z2 flexy-boy">
  <div class="navbar-left">
    <a class="logo" href="/">Company Operations Journal</a>
  </div>
  <div class="navbar-right">
    {#if $session.user}
      <span class="username">
        {$session.user.username}
        <span class="logout-button" on:click={logout}>logout</span>
      </span>
    {:else}
      <a class="navbar-link" href="/login">
        <Button>
          <Label>Log In</Label>
        </Button>
      </a>
      <a class="navbar-link" href="/signup">
        <Button>
          <Label>Sign up</Label>
        </Button>
      </a>
    {/if}
  </div>
</nav>
