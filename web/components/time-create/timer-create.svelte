<script lang="ts">
  import TimeInput from "components/time-input/time-input.svelte";

  import "./timer-create.less";
</script>

<div class="timer-create">
  <h1>Add Timer</h1>

  <div class="timer-box-body">
    <div class="left-box">
      +
    </div>

    <div class="right-box">
      <input type="text" class="text-input" placeholder="Timer Name"/>

      <select class="select-input">
        <option value="" disabled selected>Select Action</option>
        <option value="open">Open URL</option>
        <option value="close">Close Tab</option>
      </select>

      <input type="text" class="text-input" placeholder="URL to open"/>

      <select class="select-input">
        <option value="" disabled selected>Select Tab to Close</option>
        <option value="tab1">tab1</option>
        <option value="tab2">tab2</option>
      </select>

      <div class="timer-inputs">
        <TimeInput/>

        <p class="time-input-divider">~</p>

        <TimeInput/>
      </div>

      <button>Add Timer</button>
    </div>
  </div>
</div>