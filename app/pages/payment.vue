<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="flex items-center">
            <div class="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span class="ml-2 text-lg font-bold">PropFirm</span>
          </NuxtLink>
          <span class="text-gray-600">Secure Checkout</span>
        </div>
      </div>
    </nav>

    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h1 class="text-2xl font-bold mb-6">Complete Your Purchase</h1>
        
        <!-- Order Summary -->
        <div class="mb-8 p-4 bg-blue-50 rounded-lg">
          <h2 class="font-bold mb-2">Order Summary</h2>
          <div class="flex justify-between mb-1">
            <span>{{ plan }} Account</span>
            <span class="font-bold">${{ size.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between mb-1">
            <span>Challenge Fee</span>
            <span>${{ amount }}</span>
          </div>
          <div class="flex justify-between mb-1">
            <span>Processing Fee</span>
            <span>$2.99</span>
          </div>
          <div class="border-t mt-2 pt-2">
            <div class="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${{ total }}</span>
            </div>
          </div>
        </div>

        <!-- Payment Form -->
        <form @submit.prevent="submitPayment" class="space-y-6">
          <div>
            <label class="block mb-2 font-medium">Email Address</label>
            <input 
              type="email" 
              v-model="email"
              required
              class="w-full p-3 border rounded-lg"
              placeholder="your@email.com"
            >
          </div>

          <div>
            <label class="block mb-2 font-medium">Card Number</label>
            <input 
              type="text" 
              v-model="cardNumber"
              required
              class="w-full p-3 border rounded-lg"
              placeholder="1234 5678 9012 3456"
            >
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block mb-2 font-medium">Expiry Date</label>
              <input 
                type="text" 
                v-model="expiry"
                required
                class="w-full p-3 border rounded-lg"
                placeholder="MM/YY"
              >
            </div>
            <div>
              <label class="block mb-2 font-medium">CVC</label>
              <input 
                type="text" 
                v-model="cvc"
                required
                class="w-full p-3 border rounded-lg"
                placeholder="123"
              >
            </div>
          </div>

          <div class="flex items-center">
            <input type="checkbox" id="terms" v-model="agree" required class="mr-2">
            <label for="terms" class="text-sm">
              I agree to the terms and conditions
            </label>
          </div>

          <button 
            type="submit"
            :disabled="loading"
            class="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400"
          >
            <span v-if="!loading">Pay ${{ total }} Now</span>
            <span v-else>Processing...</span>
          </button>
        </form>

        <div class="mt-8 text-center">
          <NuxtLink to="/" class="text-blue-600 hover:underline">
            ← Back to Account Selection
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const route = useRoute()

// Get parameters from URL
const plan = ref(route.query.plan || 'standard')
const amount = ref(parseInt(route.query.amount) || 199)
const size = ref(parseInt(route.query.size) || 25000)

// Form data
const email = ref('')
const cardNumber = ref('')
const expiry = ref('')
const cvc = ref('')
const agree = ref(false)
const loading = ref(false)

// Calculate total
const total = computed(() => {
  return (amount.value + 2.99).toFixed(2)
})

// Submit payment
const submitPayment = () => {
  if (!agree.value) {
    alert('Please agree to terms and conditions')
    return
  }

  loading.value = true
  
  // Simulate payment processing
  setTimeout(() => {
    alert(`Payment successful! Your ${plan.value} account has been activated.`)
    loading.value = false
    
    // Reset form
    email.value = ''
    cardNumber.value = ''
    expiry.value = ''
    cvc.value = ''
    agree.value = false
  }, 1500)
}
</script>