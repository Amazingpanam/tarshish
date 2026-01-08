<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          What Our Traders Say
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Join thousands of successful traders who have transformed their trading careers with us
        </p>
        
        <!-- Trust Score -->
        <!-- <div class="mt-8 flex items-center justify-center">
          <div class="text-center mr-8">
            <div class="text-5xl font-bold text-green-600">4.9</div>
            <div class="text-gray-600">Trustpilot Score</div>
          </div>
          <div class="flex">
            <svg v-for="i in 5" :key="i" class="w-8 h-8 text-yellow-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div> -->
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Testimonial 1 -->
        <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              JM
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg">James M.</h4>
              <div class="flex items-center">
                <span class="text-gray-600 text-sm mr-2">Funded Trader</span>
                <span class="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded">$50K Account</span>
              </div>
            </div>
          </div>
          <p class="text-gray-700 mb-6 italic leading-relaxed">
            "After struggling with other prop firms, I found Tarshish. The 20% drawdown limit is a game-changer. Made my first $5,000 withdrawal in 2 weeks!"
          </p>
          <div class="flex items-center">
            <div class="flex text-yellow-500 mr-2">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span class="text-sm text-gray-600">Verified Review</span>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              SR
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg">Sarah R.</h4>
              <div class="flex items-center">
                <span class="text-gray-600 text-sm mr-2">Day Trader</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded">$25K Account</span>
              </div>
            </div>
          </div>
          <p class="text-gray-700 mb-6 italic leading-relaxed">
            "The simplicity of rules allowed me to focus on trading instead of worrying about restrictions. Payouts are actually fast - received mine in 24 hours!"
          </p>
          <div class="flex items-center">
            <div class="flex text-yellow-500 mr-2">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span class="text-sm text-gray-600">Verified Review</span>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              TK
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-lg">Tom K.</h4>
              <div class="flex items-center">
                <span class="text-gray-600 text-sm mr-2">Swing Trader</span>
                <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded">$100K Account</span>
              </div>
            </div>
          </div>
          <p class="text-gray-700 mb-6 italic leading-relaxed">
            "No daily drawdown pressure means I can trade my strategy properly. The support team is incredibly responsive. Best decision I made for my trading career."
          </p>
          <div class="flex items-center">
            <div class="flex text-yellow-500 mr-2">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span class="text-sm text-gray-600">Verified Review</span>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <!-- <div class="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2">2,500+</div>
            <div class="text-blue-100">Traders Funded</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2">$15M+</div>
            <div class="text-blue-100">Payouts Processed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
            <div class="text-blue-100">Customer Rating</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold mb-2">24h</div>
            <div class="text-blue-100">Avg Payout Time</div>
          </div>
        </div>
      </div> -->

      <!-- Trust Badges -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Trusted By Traders Worldwide</h3>
        <!-- <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div class="text-gray-400 font-bold text-xl">TRUSTPILOT</div>
          <div class="text-gray-400 font-bold text-xl">GOOGLE REVIEWS</div>
          <div class="text-gray-400 font-bold text-xl">FOREX FACTORY</div>
          <div class="text-gray-400 font-bold text-xl">BABYPIPS</div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>