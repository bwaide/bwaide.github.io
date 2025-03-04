---
layout: default
title: All Categories
---

<div>
  <header class="text-center py-10 mb-12 bg-slate-50 rounded-xl">
    <h1 class="text-4xl font-bold mb-4">Browse All Categories</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto">Find European alternatives to US-based services across all categories.</p>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {% for category in site.categories %}
    <div class="category-card flex flex-col h-full">
      <h2 class="text-2xl font-semibold mb-3">
        <a href="{% include category-link.html category=category.category_name %}" class="text-gray-900 hover:text-primary">
          {{ category.title }}
        </a>
      </h2>
      <p class="text-gray-600 mb-4 flex-grow">{{ category.description | truncate: 150 }}</p>
      <a href="{% include category-link.html category=category.category_name %}" class="read-more mt-auto">
        View alternatives →
      </a>
    </div>
    {% endfor %}
  </div>
</div>