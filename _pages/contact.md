---
layout: page
title: Contact Us
---
<style>
  .contact_form{width:60%;margin:auto;padding:40px;border-radius:5px}.contact_form form{flex-direction:column}input,textarea{border:1px solid var(--shadow)}@media(max-width:768px){.contact_form{width:100%}}
</style>
<div class="contact_form">
  <form method="post" autocomplete="off" name="webtool">
    <input type="text" name="Name" placeholder="Name*" required/>
    <input type="email" placeholder="Email*" name="Email" required/>
    <textarea cols="30" rows="10" name="Message" placeholder="Message"></textarea>
    <input type="submit"/>
  </form>
</div>
<script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwXdHZVNvRqvyhxjo5cmwvXN5qUu65L5L30ZQqEEJ40w2OF_85dAq0XPcNZsQqh6Njr4g/exec',
      form = document.forms['webtool']
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => form.reset())
        .catch(error => console.error('Error!', error.message))
    })
</script>