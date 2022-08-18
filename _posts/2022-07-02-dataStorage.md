---
layout: post
title: Data Storage Converter
permalink: datastorage
---

<style>
  .dataStorage {
    display: grid;
    gap: 15px;
    margin-top: 50px;
  }
  @media(min-width:639px) {
    .dataStorage {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
<ul class="dataStorage">{% for data in site.datastorage %}
  <li><a href="{{data.url}}">{{data.title}}</a></li>{% endfor %}
</ul>