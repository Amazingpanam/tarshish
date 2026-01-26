<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <div v-for="(account, index) in accounts" :key="index">
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
        <!-- Image Section -->
        <div class="h-48 overflow-hidden bg-gray-100">
          <img 
            src="/images/acct.png" 
            alt="Trading Platform Dashboard"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <!-- Content Section -->
        <div class="p-6">
          <!-- Use click event on the heading instead of NuxtLink -->
          <h3 
            class="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer"
            @click="sendParam(account)"
          >
            Trade with ₦{{ account.display_price }}
          </h3>
          
          <!-- Price -->
          <div class="mb-6">
            <div class="text-2xl font-bold text-gray-900">₦{{ account.actual_price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from '#imports'

const router = useRouter()

function sendParam(obj) {
  // Navigate to payments page with account data as query params
  router.push({
    path: '/payments',
    query: {
      display_price: obj.display_price,
      actual_price: obj.actual_price
    }
  })
}

const accounts = [
  {
    display_price: '200k',
    actual_price: '8,500'
  },
  {
    display_price: '400k',
    actual_price: '17,500'
  },
  {
    display_price: '600k',
    actual_price: '26,000'
  },
  {
    display_price: '800k',
    actual_price: '36,500'
  },
  {
    display_price: '1m',
    actual_price: '55,000'
  },
  {
    display_price: '1.5m',
    actual_price: '94,000'
  },
  {
    display_price: '3m',
    actual_price: '175,000'
  }
]
</script>