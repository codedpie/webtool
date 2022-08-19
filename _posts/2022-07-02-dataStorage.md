---
layout: post
title: Data Storage Converter
permalink: datastorage
---
<link rel="stylesheet" href="/assets/css/datastorage.css"/>
<script src="/assets/js/min.datastorage.js" defer></script>
{% include datastorageconverter.html %}
<ul class="dataStorage">{% for data in site.datastorage %}
  <li><a href="{{data.url}}">{{data.title}}</a></li>{% endfor %}
</ul>