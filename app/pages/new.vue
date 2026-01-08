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
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            20% MAXIMUM DRAWDOWN
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Get an account with as little as ₦5,000
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