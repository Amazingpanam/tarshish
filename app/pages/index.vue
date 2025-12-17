<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">T</span>
            </div>
            <span class="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tarshish
            </span>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-gray-700 hover:text-blue-600 font-medium">
              Login
            </button>
            <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold mb-6">
          Trade with <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Capital</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Select your account size, pass our evaluation, and get funded. Keep up to 90% of your profits.
        </p>
      </div>

      <!-- Account Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Basic Account -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
          <div class="text-center mb-8">
            <div class="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              BASIC
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">₦100,000</h3>
            <p class="text-gray-500 mb-6">Starting Capital</p>
            <div class="text-4xl font-bold text-blue-600 mb-2">₦8,000</div>
            <p class="text-gray-500 text-sm">One-time challenge fee</p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Profit Target: <strong>10%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Daily Drawdown: <strong>3%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Maximum Drawdown: <strong>6%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Profit Split: <strong>Up to 80%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Minimum Trading Days: <strong>5</strong></span>
            </div>
          </div>

          <NuxtLink 
            to="/payment?plan=basic&amount=8000&size=100000"
            class="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
          >
            Get Started
          </NuxtLink>
        </div>

        <!-- Standard Account (Featured) -->
        <div class="bg-white rounded-2xl shadow-2xl border-2 border-blue-500 p-8 relative transform scale-105">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              MOST POPULAR
            </span>
          </div>

          <div class="text-center mb-8">
            <div class="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              STANDARD
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">₦250,000</h3>
            <p class="text-gray-500 mb-6">Starting Capital</p>
            <div class="text-4xl font-bold text-blue-600 mb-2">₦15,000</div>
            <p class="text-gray-500 text-sm">One-time challenge fee</p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Profit Target: <strong>8%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Daily Drawdown: <strong>4%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Maximum Drawdown: <strong>8%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Profit Split: <strong>Up to 85%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Minimum Trading Days: <strong>7</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700"><strong>1 Free Retry</strong> Included</span>
            </div>
          </div>

          <NuxtLink 
            to="/payment?plan=standard&amount=15000&size=250000"
            class="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </NuxtLink>
        </div>

        <!-- Pro Account -->
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300">
          <div class="text-center mb-8">
            <div class="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              PRO
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-2">₦500,000</h3>
            <p class="text-gray-500 mb-6">Starting Capital</p>
            <div class="text-4xl font-bold text-blue-600 mb-2">₦25,000</div>
            <p class="text-gray-500 text-sm">One-time challenge fee</p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Profit Target: <strong>6%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Daily Drawdown: <strong>5%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Maximum Drawdown: <strong>10%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Profit Split: <strong>Up to 90%</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700">Minimum Trading Days: <strong>10</strong></span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700"><strong>2 Free Retries</strong> Included</span>
            </div>
            <div class="flex items-center">
              <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-700"><strong>Priority Support</strong> 24/7</span>
            </div>
          </div>

          <NuxtLink 
            to="/payment?plan=pro&amount=25000&size=500000"
            class="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg"
          >
            Get Started
          </NuxtLink>
        </div>
      </div>

      <!-- Comparison Table -->
      <div class="mt-20 max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Account Comparison</h2>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-50">
                <th class="py-4 px-6 text-left">Features</th>
                <th class="py-4 px-6 text-center">Basic</th>
                <th class="py-4 px-6 text-center bg-blue-50">Standard</th>
                <th class="py-4 px-6 text-center">Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="py-4 px-6 font-medium">Account Size</td>
                <td class="py-4 px-6 text-center">₦100,000</td>
                <td class="py-4 px-6 text-center bg-blue-50">₦250,000</td>
                <td class="py-4 px-6 text-center">₦500,000</td>
              </tr>
              <tr class="border-b">
                <td class="py-4 px-6 font-medium">Challenge Fee</td>
                <td class="py-4 px-6 text-center">₦8,000</td>
                <td class="py-4 px-6 text-center bg-blue-50">₦15,000</td>
                <td class="py-4 px-6 text-center">₦25,000</td>
              </tr>
              <tr class="border-b">
                <td class="py-4 px-6 font-medium">Profit Target</td>
                <td class="py-4 px-6 text-center">10%</td>
                <td class="py-4 px-6 text-center bg-blue-50">8%</td>
                <td class="py-4 px-6 text-center">6%</td>
              </tr>
              <tr class="border-b">
                <td class="py-4 px-6 font-medium">Daily Drawdown</td>
                <td class="py-4 px-6 text-center">3%</td>
                <td class="py-4 px-6 text-center bg-blue-50">4%</td>
                <td class="py-4 px-6 text-center">5%</td>
              </tr>
              <tr class="border-b">
                <td class="py-4 px-6 font-medium">Max Drawdown</td>
                <td class="py-4 px-6 text-center">6%</td>
                <td class="py-4 px-6 text-center bg-blue-50">8%</td>
                <td class="py-4 px-6 text-center">10%</td>
              </tr>
              <tr class="border-b">
                <td class="py-4 px-6 font-medium">Profit Split</td>
                <td class="py-4 px-6 text-center">Up to 80%</td>
                <td class="py-4 px-6 text-center bg-blue-50">Up to 85%</td>
                <td class="py-4 px-6 text-center">Up to 90%</td>
              </tr>
              <tr class="border-b">
                <td class="py-4 px-6 font-medium">Free Retries</td>
                <td class="py-4 px-6 text-center">0</td>
                <td class="py-4 px-6 text-center bg-blue-50">1</td>
                <td class="py-4 px-6 text-center">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- How It Works -->
      <div class="mt-20 max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl font-bold text-blue-600">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Choose Account</h3>
            <p class="text-gray-600">Select your desired account size and pay the one-time challenge fee.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl font-bold text-green-600">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Pass Evaluation</h3>
            <p class="text-gray-600">Trade on our demo platform and reach the profit target within 30 days.</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl font-bold text-purple-600">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Get Funded</h3>
            <p class="text-gray-600">Receive a live funded account and start earning real profits.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <span class="text-white font-bold text-xl">T</span>
          </div>
          <h3 class="text-2xl font-bold mb-4">Tarshish Trading</h3>
          <p class="text-gray-400 max-w-2xl mx-auto mb-8">
            Empowering Nigerian traders with capital, technology, and opportunity to succeed in financial markets.
          </p>
          <div class="text-gray-400 text-sm">
            <p>© 2024 Tarshish Trading. All rights reserved.</p>
            <p class="mt-2">Trading involves risk. Past performance is not indicative of future results.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// This file has both template and script - it will work
</script>