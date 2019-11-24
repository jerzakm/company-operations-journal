<script>
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import Icon from "@smui/textfield/icon/index";
  import HelperText from "@smui/textfield/helper-text/index";
  import CharacterCounter from "@smui/textfield/character-counter/index";
  import { Icon as CommonIcon } from "@smui/common";
  import FloatingLabel from "@smui/floating-label";
  import LineRipple from "@smui/line-ripple";
  import NotchedOutline from "@smui/notched-outline";
  import Dialog, { Title, Content, Actions, InitialFocus } from "@smui/dialog";
  import Button, { GroupItem, Label } from "@smui/button";
  import Select from "@smui/select";
  import Card from "@smui/card";

  $: returnEntry = {
    id: 0,
    timestamp: 0,
    address: {
      name: "",
      street: "",
      city: "",
      postCode: ""
    },
    saleSource: "",
    attachedDocuments: [],
    returnReason: {
      group: "",
      name: "",
      desc: ""
    },
    pickupOrderId: 0,
    pickupOrderTimestamp: 0,
    productEntryList: [],
    movedTo: "",
    resolved: false,
    notepad: "",
    changeHistory: []
  };
</script>

<style>

</style>

<div class="module-content-centered">
  <Card>
    <Title>Sender</Title>
    <Content>
      <div>
        <Textfield
          variant="filled"
          bind:value={returnEntry.address.name}
          label="Name"
          style="width: 100%;" />
        <HelperText id="helper-text-filled-a">Enter sender's name</HelperText>
      </div>
      <div>
        <Textfield
          variant="filled"
          bind:value={returnEntry.address.street}
          style="width: 100%;"
          label="Street" />
        <HelperText id="helper-text-filled-a">
          Enter sender's street name and number
        </HelperText>
      </div>
      <div style="display: flex;">
        <div>
          <Textfield
            variant="filled"
            bind:value={returnEntry.address.postCode}
            style="margin-right: 5px; max-width: 140px;"
            label="Post Code" />
          <HelperText id="helper-text-filled-a">
            Enter sender's postal code
          </HelperText>
        </div>
        <div>
          <Textfield
            variant="filled"
            bind:value={returnEntry.address.city}
            style="width: 100%;"
            label="City" />
          <HelperText id="helper-text-filled-a">Enter sender's city</HelperText>
        </div>
      </div>
    </Content>
  </Card>

  <Card>
    <Title>Sender</Title>
    <Content>
      <div>
        <Textfield
          variant="filled"
          bind:value={returnEntry.address.name}
          label="Name"
          style="width: 100%;" />
        <HelperText id="helper-text-filled-a">Enter sender's name</HelperText>
      </div>
      <div>
        <Textfield
          variant="filled"
          bind:value={returnEntry.address.street}
          style="width: 100%;"
          label="Street" />
        <HelperText id="helper-text-filled-a">
          Enter sender's street name and number
        </HelperText>
      </div>
      <div style="display: flex;">
        <div>
          <Textfield
            variant="filled"
            bind:value={returnEntry.address.postCode}
            style="margin-right: 5px; max-width: 140px;"
            label="Post Code" />
          <HelperText id="helper-text-filled-a">
            Enter sender's postal code
          </HelperText>
        </div>
        <div>
          <Textfield
            variant="filled"
            bind:value={returnEntry.address.city}
            style="width: 100%;"
            label="City" />
          <HelperText id="helper-text-filled-a">Enter sender's city</HelperText>
        </div>
      </div>
    </Content>
  </Card>
</div>
