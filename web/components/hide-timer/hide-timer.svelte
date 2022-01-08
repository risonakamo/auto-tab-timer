<script lang="ts">
  import cx,{Mapping} from "classnames";

  import "./hide-timer.less";

  const tempHiddenProp:boolean=false;

  const hideTimerDisplayClass:Mapping={
    hidden:tempHiddenProp
  };
</script>

<div class="hide-timer">
  <h1>Timer 1</h1>

  <div class={cx("hide-timer-display",hideTimerDisplayClass)}>
    <div class="inner">
      <div class="unit-block faded">
        <span class="digits">00</span>
        <span class="unit">h</span>
      </div>
      <div class="unit-block">
        <span class="digits">22</span>
        <span class="unit">m</span>
      </div>
      <div class="unit-block">
        <span class="digits">05</span>
        <span class="unit">s</span>
      </div>
    </div>
  </div>

  <p class="action-info">
    ⭢ open
    <a href="a" class="info-link">&lt;link&gt;</a>
  </p>

  <div class="cancel-zone">
    <a href="a" class="cancel-button">cancel</a>
  </div>
</div>