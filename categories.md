---
layout: default
title: All Categories
permalink: /categories/
---

<div class="categories-page">
  <header class="categories-header">
    <h1>Browse All Categories</h1>
    <p>Find European alternatives to US-based services across all categories.</p>
  </header>

  <div class="categories-grid">
    {% for category in site.categories %}
    <div class="category-card">
      <h2><a href="{{ category.url | relative_url }}">{{ category.title }}</a></h2>
      <p>{{ category.description | truncate: 150 }}</p>
      <a href="{{ category.url | relative_url }}" class="read-more">View alternatives</a>
    </div>
    {% endfor %}
  </div>
</div>