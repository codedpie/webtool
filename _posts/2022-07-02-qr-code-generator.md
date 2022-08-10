---
layout: post
title: QR Code Generator
---

<style>
  .qrcode_generator {
    text-align: center;
  }
  .qrcode_generator span {
    display: block;
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.5);
  }
  .qr_output {
    display: grid;
    margin-top: 40px;
    place-items: center;
  }
  .qr_output img {
    padding: 12px;
    border-radius: 5px;
    background: rgba(99, 102, 241, 0.1);
  }
</style>
<div class="qrcode_generator">
  <span>Enter URL or Text to Generate QR Code</span>
  <div class="qr_input">
    <input type="url" id="URL_input" placeholder="Enter Text/URL" title="Enter text and URL to create QR code" />
    <button class="btn" id="qr_btn" title="Generate new QR code">Generate</button>
  </div>
  <div class="qr_output">
    <a id="qr_link">
      <img id="qr_img" loading="lazy" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://frontendnode.com/" />
    </a>
  </div>
</div>
<script>
  const
    URL_input = document.querySelector('#URL_input'),
    qr_img = document.querySelector('#qr_img'),
    qr_link = document.querySelector('#qr_link'),
    qr_btn = document.querySelector('#qr_btn')

  qr_btn.onclick = () => {
    const myqr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${URL_input.value}`
    qr_img.src = myqr
    qr_link.href = myqr
  }
</script>
