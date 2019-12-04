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
  import Select from 'svelte-select';
  import Card from "@smui/card";
  import DataTable, {Head, Body, Row, Cell} from '@smui/data-table';

  import * as api from "api";

  let products

  $: loadData();

  async function loadData() {
    try {
      products = null;
      const response = await api.products.getProducts();
      products = response.data;
      console.log(products)
    } catch (e) {
      console.log(e)
    }
  }

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

  const items = [
		{value: 'chocolate', label: '🍫 Chocolate', group: 'Sweet'},
    {value: 'pizza', label: '🍕 Pizza', group: 'Savory'},
    {value: 'cake', label: '🎂 Cake', group: 'Sweet'},
    {value: 'cookies', label: '🍪 Cookies', group: 'Savory'},
    {value: 'ice-cream', label: '🍦 Ice Cream', group: 'Sweet'}
  ];
  let selectedValue = undefined;
</script>

<style>
  .content-group {
    padding: 1rem;
  }
  .content-container {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="module-content-centered">
  <Card style="max-width: 80vw;">
  <div class="content-container">
  <div class="content-group">
    <Title>Sender</Title>
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
        </div>
        <div class="content-group">
          <Title>Product list</Title>
          <DataTable table$aria-label="Product list">
      <Head>
        <Row>
          <Cell>Product</Cell>
          <Cell>Quantity</Cell>
          <Cell>State</Cell>
          <Cell>Actions</Cell>
        </Row>
      </Head>
      <Body>
        <Row>
          <Cell>Office Chair 123125</Cell>
          <Cell>1</Cell>
          <Cell>45</Cell>
          <Cell>45</Cell>
        </Row>
        <Row>
          <Cell>Mack</Cell>
          <Cell>Blue</Cell>
          <Cell numeric>12</Cell>
          <Cell numeric>12</Cell>
        </Row>
      </Body>
    </DataTable>
        </div>
    <div class="content-group">
      <Title>Return reason</Title>
      <Select {items} bind:selectedValue></Select>
      <Title>Sale source</Title>
      <Select {items} bind:selectedValue></Select>
    </div>
    <div class="content-group">

    </div>
    </div>
  </Card>
</div>
