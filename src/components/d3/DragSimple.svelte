<script>
  let left = 50;
  let top = 50;
  let moving = false;

  function onMouseDown(e) {
    moving = true;
  }
  function onMouseUp(e) {
    moving = false;
  }
  function onMouseMove(e) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }
</script>

<div class="frame">
  <div
    style="left: {left}px; top: {top}px;"
    on:mousedown={onMouseDown}
    class="draggable"
  >
    Drag me
  </div>
</div>
<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style lang="scss">
  .frame {
    width: 300px;
    height: 300px;
    position: relative;
    border: 1px solid black;
    background-color: pink;
    .draggable {
      padding: 20px;
      border: 1px solid black;
      position: absolute;
      user-select: none;
      cursor: move;
      background-color: white;
    }
  }
</style>
