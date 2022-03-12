<script>
  import d3Axis from "$components/d3/AxisSimple.svelte";
  // import Tab2 from "./Tab2.svelte";

  import Tabs from "./Tabs.svelte";

  // List of tab items with labels, values and assigned components
  let items = [
    { label: "Visual", value: 1, component: d3Axis },
    { label: "Code", value: 2, component: d3Axis },
  ];
</script>

<Tabs {items} />
