<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">T</span>
            </div>
            <span class="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tarshish
            </span>
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/') }"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/legit" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/legit') }"
          >
            Get Started
          </NuxtLink>

          <NuxtLink 
            to="/dashboard" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/dashboard') }"
          >
            Dashboard
          </NuxtLink>

          <NuxtLink 
            to="/simple" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/simple') }"
          >
            Rules
          </NuxtLink>
          <NuxtLink 
            to="/promotions" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/promotions') }"
          >
            <span class="flex items-center">
              Affiliate
              <span class="ml-2 px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full">
                coming...              </span>
            </span>
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/login') }"
          >
            Contact
          </NuxtLink>

        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink 
            to="/" 
            class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
            :class="{ 'text-blue-600 bg-blue-50': isActive('/') }"
            @click="isMobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/legit" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/legit') }"
          >
            Get Started
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/login') }"
          >
            Dashboard
          </NuxtLink>
         <NuxtLink 
            to="/simple" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/simple') }"
          >
            Rules
          </NuxtLink>
         <NuxtLink 
            to="/promotions" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/promotions') }"
          >
            <span class="flex items-center">
              Affiliate
              <span class="ml-2 px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full">
                coming...              </span>
            </span>
          </NuxtLink>
          <NuxtLink 
            to="/login" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            :class="{ 'text-blue-600': isActive('/login') }"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isMobileMenuOpen = ref(false)
const route = useRoute()

// Watch route changes to close mobile menu
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})

// Helper to check active route
const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
/* Active link indicator */
.router-link-active {
  position: relative;
}

.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  border-radius: 2px;
}
</style>