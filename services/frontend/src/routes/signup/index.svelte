<script>
  import { goto, stores } from "@sapper/app";
  import axios from "axios";
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import HelperText from "@smui/textfield/helper-text/index";
  import Card from "@smui/card";
  import Button, { Label } from "@smui/button";

  const { session } = stores();

  let user = { username: "", password: "" };
  let inProgress = false;
  let error = null;

  async function submit() {
    try {
      inProgress = true;
      const response = await axios.post("/auth/register", user);
      $session.user = response.data;
      inProgress = false;
      error = null;
      user = { username: "", password: "" };
      goto("/");
    } catch (err) {
      error = err.response.data.message;
      inProgress = false;
    }
  }
</script>

<style>
  .signup-form {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      width: calc(100% - 20px);
      margin: 50px auto;
      padding: 50px;
      border-radius: 2px;
    }
</style>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<form class="signup-form" on:submit|preventDefault={submit}>
  <Card padded>
    {#if error}
      <span class="error-message">{error}</span>
    {/if}
    <div>
      <Textfield
        withLeadingIcon
        bind:value={user.username}
        label="Username"
        input$aria-controls="helper-text-standard-b"
        input$aria-describedby="helper-text-standard-b"
        type="text"
        aria-required="true"
        style="width: 100%;"
        />
      <HelperText id="helper-text-standard-b">Enter your username</HelperText>
    </div>

    <div>
      <Textfield
        withLeadingIcon
        bind:value={user.password}
        label="Password"
        input$aria-controls="helper-text-standard-b"
        input$aria-describedby="helper-text-standard-b"
        type="password"
        style="width: 100%;"
        aria-required="true" />
      <HelperText id="helper-text-standard-b">Enter your password</HelperText>
    </div>
  <Button variant="raised" style="margin-top: 20px;"><Label>Sign up</Label></Button>
  </Card>
</form>
