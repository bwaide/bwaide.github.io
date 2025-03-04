---
layout: default
---

<div>
  <!-- Hero Section -->
  <header class="text-center py-12 md:py-20 mb-12 bg-slate-50 rounded-xl">
    <h1 class="text-4xl md:text-5xl font-bold mb-6">European Alternatives to US-based Services</h1>
    <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-4">Find privacy-friendly and GDPR-compliant alternatives to US-based SaaS and Cloud services.</p>
    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
      These recommendations are linked from our
      <a href="https://freeyourdata.eu" class="text-primary hover:text-primary-dark font-medium hover:underline">
        Risk Assessment Calculator
      </a>
      based on your specific risk profile.
    </p>
  </header>

  <!-- Categories Section -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8 text-center">Browse by Category</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {% for category in site.categories %}
      <div class="category-card flex flex-col h-full">
        <h3 class="text-2xl font-semibold mb-3">
          <a href="{{ category.url | relative_url }}" class="text-gray-900 hover:text-primary">
            {{ category.title }}
          </a>
        </h3>
        <p class="text-gray-600 mb-4 flex-grow">{{ category.description | truncate: 100 }}</p>
        <a href="{% include category-link.html category=category.category_name %}" class="read-more mt-auto">
          View alternatives →
        </a>
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- Risk Levels Section -->
  <section class="mt-12 mb-16">
    <h2 class="text-3xl font-bold mb-8 text-center">Understanding Risk Levels</h2>
    
    <div class="space-y-4">
      <div class="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
        <div class="flex items-start">
          <div class="bg-red-100 p-3 rounded-xl mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-lg text-gray-800">High Risk</h4>
            <p class="text-gray-600 mt-1">Services with significant US connections, potentially subject to US surveillance laws like FISA 702, Executive Order 12333, and the CLOUD Act. Your data could be accessed without your knowledge or consent.</p>
          </div>
        </div>
      </div>
      
      <div class="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
        <div class="flex items-start">
          <div class="bg-amber-100 p-3 rounded-xl mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-lg text-gray-800">Medium Risk</h4>
            <p class="text-gray-600 mt-1">Services with some US connections but with strong privacy measures and EU data storage. These providers implement additional safeguards but may still have some exposure to foreign surveillance.</p>
          </div>
        </div>
      </div>
      
      <div class="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
        <div class="flex items-start">
          <div class="bg-green-100 p-3 rounded-xl mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
          </div>
          <div>
            <h4 class="font-semibold text-lg text-gray-800">Low Risk</h4>
            <p class="text-gray-600 mt-1">EU-based services with strong GDPR compliance, local data storage, and no US ties. These providers offer the highest level of data sovereignty and protection from foreign surveillance laws.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="mt-12 mb-12 max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-center">About This Resource</h2>
    <div class="max-w-none">
      <p>
        This database of alternatives is maintained by FreeYourData to help European organizations and individuals find privacy-respecting alternatives to common US-based services. Each alternative is assessed for its risk level based on jurisdiction, data storage location, and ownership structure.
      </p>
      <p>
        For a personalized risk assessment of your organization's specific needs, use our
        <a href="https://freeyourdata.eu" class="text-primary hover:text-primary-dark font-medium hover:underline">
          Risk Assessment Calculator
        </a>.
      </p>
    </div>
  </section>
</div>
