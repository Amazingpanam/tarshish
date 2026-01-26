<script setup lang="ts">
import AccountCard from '~/components/AccountCard.vue';
import Footer from '~/components/Footer.vue';
import Testimonials from '~/components/Testimonials.vue';

</script>

<template>
  <div>
    <Navbar></Navbar>
    <Features />
    <div class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
       <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
  <span class="italic">Prove Your Skill.</span> 
  <span class="not-italic"> We Fund The Capital</span>
</h1>
          <p class="text-3 xl text-gray-600 max-w-3xl mx-auto mb-4">
            Start With ₦8,500
          </p>
          
          <!-- Clean Image Container - No borders, no shadows -->
          <div class="mb-5 mx-auto max-w-4xl">
            <img 
              src="/images/download.png" 
              alt="Trading Platform Interface"
              class="w-full h-auto"
            />
          </div>
        </div>
        <About></About>
        <Testimonials></Testimonials>


        <!-- CTA Section -->
       
      </div>
      <Footer></Footer>
    </div>
    
  </div>
</template>