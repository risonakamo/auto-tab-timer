<script lang="ts">
  import cx,{Mapping} from "classnames";

  import "./hide-timer.less";

  const tempHiddenProp:boolean=true;
</script>

<div class="hide-timer">
  <h1>Timer 1</h1>

  <div class="timer-body timer-box-body">
    <div class="left-box">
      1
    </div>

    <div class="timer-display right-box">
      <div class="hide-timer-display" class:hidden={tempHiddenProp}>
        <div class="inner">
          <div class="timer-blocks">
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
          <div class="overlay-block">
            SHOW
          </div>
        </div>
      </div>

      <p class="action-info">
        ⭢ open
        <a href="a" class="info-link red">&lt;link&gt;</a>
      </p>

      <div class="cancel-zone">
        <a href="a" class="cancel-button">cancel</a>
      </div>
    </div>
  </div>
</div>