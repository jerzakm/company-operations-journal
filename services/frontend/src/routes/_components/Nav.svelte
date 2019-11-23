<script>
  import { goto, stores } from "@sapper/app";
  import axios from "axios";
  import Button, { Group, GroupItem, Label, Icon } from "@smui/button";
  import Menu from "@smui/menu";
  import List, { Item, Separator, Text } from "@smui/list";
  import Tab from "@smui/tab";
  import TabBar from "@smui/tab-bar";

  const { session } = stores();

  async function logout() {
    await axios.post("/auth/logout");
    $session.user = null;
    goto("/");
  }

  let navLink = [
    {
      k: 1,
      icon: "home",
      label: "Home",
      route: "/"
    },
    {
      k: 1,
      icon: "format_list_numbered",
      label: "Packages",
      route: "/returnslist"
    },
    {
      k: 2,
      icon: "timeline",
      label: "Insights",
      route: "/insights"
    },
    {
      k: 3,
      icon: "code",
      label: "Test",
      route: "/"
    },
    {
      k: 4,
      icon: "code",
      label: "Test",
      route: "/"
    }
  ];

  $: navLinkActive = navLink[2];

  function click(tab) {
    goto(tab.route);
    navLinkActive = tab;
  }
</script>

<style>
  .navigation-tabs-container {
    background-color: #fff;
    padding-bottom: 10px;
  }

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

<nav class="mdc-elevation--z5">
  <nav class="navbar">
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

  <div class="navigation-tabs-container">
    <TabBar
      tabs={navLink}
      let:tab
      key={tab => tab.k}
      bind:active={navLinkActive}>
      <Tab {tab} on:click={() => click(tab)}>
        <Icon class="material-icons">{tab.icon}</Icon>
        <Label>{tab.label}</Label>
      </Tab>
    </TabBar>
  </div>
</nav>
