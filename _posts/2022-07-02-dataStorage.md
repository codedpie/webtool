---
layout: post
title: Data Storage Converter
permalink: datastorage
---

<style>
  .dataStorage{display:grid;gap: 15px;margin-top:50px}
  .dataStorageConverter{padding:50px 0;border-radius:5px;border:1px solid rgba(0,0,0,0.1);background:var(--bg1)}h2,h3,h4{font-weight:500}.dataStorageConverter,.input,.output{display:flex;align-items:center;justify-content:center;gap:8px}.switch a{width:100px;display:grid;place-items:center}th,td{padding: 0 10px;border:1px solid}@media(max-width:768px){.dataStorageConverter,.input,.output{display: grid}.switch a{width:100%;height:60px}}.myList{display:grid;gap:15px}input,select{border-color:rgba(0,0,0,0.1)}input:focus,select:focus{border-color:rgb(59 130 246)}@media(min-width:769px){.myList{grid-template-columns:1fr 1fr 1fr}.dataStorage{grid-template-columns:1fr 1fr 1fr}}
</style>
<script src="/assets/js/min.datastorage.js" defer></script>
<div class="dataStorageConverter">
  <div class="input">
    <input type="number" id="inputData" />
    <select id="selectInput">
      <option value="b">bit</option>
      <option value="B">Byte</option>
      <option value="kb">Kilobit</option>
      <option value="Kibit">Kibibit</option>
      <option value="KB">Kilobyte</option>
      <option value="KiB">Kibibyte</option>
      <option value="mb">Megabit</option>
      <option value="Mibit">Mebibit</option>
      <option value="MB">Megabyte</option>
      <option value="MiB">Mebibyte</option>
      <option value="gb">Gigabit</option>
      <option value="Gibit">Gibibit</option>
      <option value="GB">Gigabyte</option>
      <option value="GiB">Gibibyte</option>
      <option value="tb">Terabit</option>
      <option value="Tebit">Tebibit</option>
      <option value="TB">Terabyte</option>
      <option value="TiB">Tebibyte</option>
      <option value="pb">Petabit</option>
      <option value="Pibit">Pebibit</option>
      <option value="PB">Petabyte</option>
      <option value="PiB">Pebibyte</option>
    </select>
  </div>
  <div class="switch" id="switch">
    <a href="/datastorage/{{page.switch}}">
      <svg width="16" hight="16" viewBox="0 0 512 512">
        <path
          d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176zM480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z" />
      </svg>
    </a>
  </div>
  <div class="output">
    <input type="number" id="outputData" />
    <select id="selectOutput">
      <option value="b">bit</option>
      <option value="B">Byte</option>
      <option value="kb">Kilobit</option>
      <option value="Kibit">Kibibit</option>
      <option value="KB">Kilobyte</option>
      <option value="KiB">Kibibyte</option>
      <option value="mb">Megabit</option>
      <option value="Mibit">Mebibit</option>
      <option value="MB">Megabyte</option>
      <option value="MiB">Mebibyte</option>
      <option value="gb">Gigabit</option>
      <option value="Gibit">Gibibit</option>
      <option value="GB">Gigabyte</option>
      <option value="GiB">Gibibyte</option>
      <option value="tb">Terabit</option>
      <option value="Tebit">Tebibit</option>
      <option value="TB">Terabyte</option>
      <option value="TiB">Tebibyte</option>
      <option value="pb">Petabit</option>
      <option value="Pibit">Pebibit</option>
      <option value="PB">Petabyte</option>
      <option value="PiB">Pebibyte</option>
    </select>
  </div>
</div>
<ul class="dataStorage">{% for data in site.datastorage %}
  <li><a href="{{data.url}}">{{data.title}}</a></li>{% endfor %}
</ul>