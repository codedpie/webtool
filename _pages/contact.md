---
layout: page
title: Contact Us
---
<style>
  .contact_form{width:60%;margin:auto;padding:40px;border-radius:5px}.contact_form form{flex-direction:column}input,textarea{border:1px solid var(--shadow)}@media(max-width:768px){.contact_form{width:100%}}
</style>
<div class="contact_form">
  <form method="post" autocomplete="off" name="fen-contact">
    <input type="text" name="Name" placeholder="Name*" required/>
    <input type="email" placeholder="Email*" name="Email" required/>
    <textarea cols="30" rows="10" name="Message" placeholder="Message"></textarea>
    <input type="submit"/>
  </form>
</div>
<script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzG5_0CTCAJxS-QPewegrbnRnY0LULwZtt85iSZz4CFGLVRds3xHpjcN9O76twwS2uR/exec',
      form = document.forms['fen-contact']
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => form.reset())
        .catch(error => console.error('Error!', error.message))
    })
</script>