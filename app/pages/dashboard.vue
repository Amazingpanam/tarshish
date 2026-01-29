<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Dashboard Header -->
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p class="text-gray-600 mt-1">Welcome back, Trader</p>
          </div>
          <div class="mt-4 sm:mt-0">
            <div class="flex items-center space-x-4">
              <div class="text-right">
                <div class="text-sm text-gray-500">Account Balance</div>
                <div class="text-xl font-bold text-green-600">₦125,450.00</div>
              </div>
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                T
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Dashboard Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Buy Account Card -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Buy Account</h3>
          </div>
          <p class="text-gray-600 mb-6">Purchase new trading accounts with different capital sizes</p>
          <button class="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg  transition-all duration-300">
            <NuxtLink 
            to="/legit" 
            class=""
            
          >
            View Accounts
          </NuxtLink>
          </button>
        </div>

        <!-- My Account Card -->

        <ViewAccount></ViewAccount>

        <!-- Request Payout Card --> 
        <PayOut></PayOut>


        <!-- Next Phase Request Card -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Next Phase Request</h3>
          </div>
          <p class="text-gray-600 mb-4">Upgrade to higher account tiers after meeting requirements</p>
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
            <div class="text-sm text-yellow-800">
              <span class="font-bold">Current Phase:</span> Level 2
            </div>
            <div class="text-sm text-yellow-800">
              <span class="font-bold">Next Phase:</span> Level 3 (₦200k Account)
            </div>
          </div>
          <button class="w-full py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300">
            Request Upgrade
          </button>
        </div>

        <!-- Change Password Card -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Change Password</h3>
          </div>
          <p class="text-gray-600 mb-6">Update your account password for enhanced security</p>
          <button class="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300">
            Change Password
          </button>
        </div>

        <!-- KYC Details Card -->
        <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">KYC Details</h3>
          </div>
          <div class="mb-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-gray-600">Verification Status:</span>
              <span class="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full">
                Verified
              </span>
            </div>
            <div class="space-y-2">
              <div class="flex items-center text-sm">
                <span class="text-gray-500 w-32">Email:</span>
                <span class="font-medium">verified</span>
              </div>
              <div class="flex items-center text-sm">
                <span class="text-gray-500 w-32">Phone:</span>
                <span class="font-medium">verified</span>
              </div>
              <div class="flex items-center text-sm">
                <span class="text-gray-500 w-32">ID:</span>
                <span class="font-medium">verified</span>
              </div>
            </div>
          </div>
          <button class="w-full py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-all duration-300">
            Update Details
          </button>
        </div>

      </div>

      <!-- Recent Activity Section -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="activity in recentActivities" :key="activity.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ activity.date }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ activity.type }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ activity.account }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium" :class="activity.amountClass">{{ activity.amount }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 py-1 text-xs rounded-full" :class="activity.statusClass">{{ activity.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import ViewAccount from '~/components/ViewAccount'
import PayOut from '~/components/PayOut'
import Footer from '~/components/Footer.vue'

 definePageMeta({
     middleware:["auth"]
  })

// Recent activities data
const recentActivities = [
  {
    id: 1,
    date: '2024-01-15',
    type: 'Payout Request',
    account: '₦100k Account',
    amount: '₦12,450',
    amountClass: 'text-green-600',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-800'
  },
  {
    id: 2,
    date: '2024-01-14',
    type: 'Trade Profit',
    account: '₦50k Account',
    amount: '₦3,250',
    amountClass: 'text-green-600',
    status: 'Credited',
    statusClass: 'bg-green-100 text-green-800'
  },
  {
    id: 3,
    date: '2024-01-13',
    type: 'Account Purchase',
    account: 'New Account',
    amount: '₦28,000',
    amountClass: 'text-red-600',
    status: 'Active',
    statusClass: 'bg-blue-100 text-blue-800'
  },
  {
    id: 4,
    date: '2024-01-12',
    type: 'Payout Request',
    account: '₦200k Account',
    amount: '₦8,900',
    amountClass: 'text-green-600',
    status: 'Processing',
    statusClass: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 5,
    date: '2024-01-11',
    type: 'Phase Upgrade',
    account: 'Level 2 → 3',
    amount: '—',
    amountClass: 'text-gray-600',
    status: 'Approved',
    statusClass: 'bg-green-100 text-green-800'
  }
]
</script>