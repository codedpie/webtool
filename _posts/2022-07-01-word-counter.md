---
layout: page
title: Word Counter
---

<style>
  .word_counter {
    margin: 40px 0;
    text-align: center;
  }
  .input_word textarea {
    width: 100%;
    min-height: 250px;
    padding: 12px;
    outline: none;
    margin: auto;
    border-radius: 5px;
    border: 1px solid var(--border);
  }
  .input_word textarea:focus {
    border: 1px solid var(--theme);
  }
  .output {
    width: 100%;
    margin: auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 30px;
    grid-auto-flow: column;
  }
  .output>div {
    padding: 10px 0;
    border-radius: 5px;
    background: rgba(99, 102, 241, 0.1);
  }
  .output>div span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
  .output>div h3 {
    font-size: 20px;
    font-weight: 600;
  }
  @media (max-width:768px) {
    .input_word textarea {
      width: 100%;
    }
    .output {
      width: 100%;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
<div class="word_counter">
  <div class="input_word">
    <textarea id="input_box" placeholder="Start typing..." cols="30" rows="10"></textarea>
  </div>
  <div class="output">
    <div>
      <span>Char w/o space</span>
      <h3 id="cws">00</h3>
    </div>
    <div>
      <span>Characters</span>
      <h3 id="chr">00</h3>
    </div>
    <div>
      <span>Words</span>
      <h3 id="wrd">00</h3>
    </div>
    <div>
      <span>Lines</span>
      <h3 id="lin">00</h3>
    </div>
  </div>
</div>
<script>
  const input_box = document.querySelector('#input_box'),
    cws = document.querySelector('#cws'),
    chr = document.querySelector('#chr'),
    wrd = document.querySelector('#wrd'),
    lin = document.querySelector('#lin')

  function wordCount(val) {
    var wom = val.match(/\S+/g);
    return {
      charactersNoSpaces: val.replace(/\s+/g, '').length,
      characters: val.length,
      words: wom ? wom.length : 0,
      lines: val.split(/\r*\n/).length
    };
  }

  input_box.oninput = () => {
    cws.innerText = wordCount(input_box.value).charactersNoSpaces
    chr.innerText = wordCount(input_box.value).characters
    wrd.innerText = wordCount(input_box.value).words
    lin.innerText = wordCount(input_box.value).lines
  }
</script>