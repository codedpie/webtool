---
layout: length
title: m to km Converter
---

<style>
  .km-m {
    display: flex;
    gap: 20px;
    padding: 40px 0;
    background: var(--shadow);
    align-items: center;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }
  .input,
  .output {
    display: grid;
    gap: 10px;
  }
  i {
    color: var(--theme);
    font-size: 1.4rem;
  }
  .km-m label{
    font-size: 1.2rem;
  }
  @media (min-width: 640px) {
    .km-m {
      flex-direction: row;
    }
  }
</style>
<div class="km-m">
  <div class="input">
    <input type="number" id="inpval" placeholder="m" />
    <label>meter</label>
  </div>
  <div>
    <a href="/length/km-to-m-converter/">
      <i class="bi bi-arrow-left-right"></i>
    </a>
  </div>
  <div class="output">
    <input type="number" id="outval" placeholder="km" />
    <label>Kilometer</label>
  </div>
</div>
<script>
  const
    m = document.querySelector('#inpval'),
    km = document.querySelector('#outval')
  km.oninput = () => m.value = Number(km.value) / 1000
  m.oninput = () => km.value = Number(m.value) * 1000
</script>

## How to convert m to km?

1 km = 1000 m

1 m = 0.001 km
