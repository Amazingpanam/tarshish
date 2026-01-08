<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top Banner -->
    <Navbar></Navbar>

    <div class="max-w-6xl mx-auto px-8 py-16 md:px-16 md:py-20 lg:py-24">
      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 min-h-[500px] lg:min-h-[600px]">
        <!-- Right Column - Product Image -->
        <div class="flex items-center h-full">
          <!-- Product Image -->
          <div class="w-full h-full flex items-center">
            <img 
              src="/images/acct.png" 
              alt="Trading Platform Interface"
              class="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        
        <!-- Left Column - Product Info -->
        <div class="flex flex-col justify-center h-full">
          <!-- Product Details -->
          <div class="space-y-8">
            <div class="space-y-4">
              <h4 class="text-3xl md:text-4xl font-bold text-gray-900">Trade with N600k</h4>
              <div class="flex items-center">
                <h5 class="text-4xl md:text-5xl font-bold text-gray-900">N28,000.00</h5>
                <span class="ml-6 px-4 py-2 bg-green-100 text-green-800 text-sm font-bold rounded-full">
                  Available
                </span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-6 pt-8">
              <!-- Buy Now Button - Light Red -->
              <button class="w-full py-5 bg-gradient-to-r from-red-400 to-red-500 text-white font-bold text-xl rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:from-red-500 hover:to-red-600">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
// Component logic here
</script>