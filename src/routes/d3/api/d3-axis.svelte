<script>
  import Tabs from "$components/Tabs.svelte";
  import AxisSimple from "$components/d3/AxisSimple.svelte";
  import ComingSoon from "$components/ComingSoon.svelte";
  let axisConfig = { margin: 40, svg_height: 300, svg_width: 400 };
</script>

<div class="container">
  <ComingSoon />

  <Tabs>
    <AxisSimple slot="tab1" config={axisConfig} />
    <div slot="tab2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi impedit
      explicabo vitae. Molestias perferendis ipsam optio ullam dolore, totam
      incidunt accusamus excepturi ipsum delectus laborum ipsa sed quos beatae
      soluta?
    </div>
    <!-- <AxisSimple config={axisConfig} /> -->
  </Tabs>
</div>

<style lang="scss">
  .container {
    padding: 10px;
  }
</style>
