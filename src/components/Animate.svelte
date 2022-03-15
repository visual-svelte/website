<script>
  import { fade, fly } from "svelte/transition";
</script>

<div in:fly={{ y: 200, duration: 1000 }} out:fly={{ x: 200, duration: 1000 }}>
  <slot />
</div>
