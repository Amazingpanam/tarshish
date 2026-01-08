<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <!-- <Navbar /> -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900 mb-2">My Challenge</h1>
        <div class="flex space-x-4">
          <button class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
            Active Challenges
          </button>
          <button class="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-300">
            Challenge History
          </button>
        </div>
      </div>

      <!-- Dashboard Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-8">
          <!-- Failed Challenge Card -->
          <div class="bg-white border border-gray-300 rounded-lg p-6">
            <!-- Header with Login -->
            <div class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 mb-1">Login: 2178750</h2>
              <div class="text-sm text-gray-600">
                <span class="font-medium">Login Info</span>
                <span class="mx-2">•</span>
                <span>Detail</span>
              </div>
            </div>

            <!-- Failure Reason Box -->
            <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded">
              <p class="font-bold text-red-800 mb-1">Failure Reason:</p>
              <p class="text-red-700">Floating P/L Has Exceeded –1% Of Your Account Balance.</p>
            </div>

            <!-- Balance & Loss Stats -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p class="text-gray-600 mb-1">Balance:</p>
                <p class="text-2xl font-bold">$500</p>
              </div>
              <div>
                <p class="text-gray-600 mb-1">Max Daily Loss</p>
                <p class="text-2xl font-bold">$15</p>
              </div>
            </div>

            <!-- Result & Max Loss -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p class="text-gray-600 mb-1">Result:</p>
                <p class="text-xl font-bold text-red-600">Failed</p>
              </div>
              <div>
                <p class="text-gray-600 mb-1">Max Total Loss</p>
                <p class="text-xl font-bold">$25</p>
              </div>
            </div>

            <!-- Challenge Type -->
            <div class="mb-6">
              <p class="text-gray-600 mb-1">Challenge Type:</p>
              <p class="text-lg font-bold">Instant</p>
            </div>

            <!-- Divider -->
            <div class="border-t border-gray-300 my-6"></div>

            <!-- Action Buttons -->
            <div class="flex space-x-3">
              <button class="flex-1 py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300">
                View Details
              </button>
              <button class="flex-1 py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
                Retry Challenge
              </button>
            </div>
          </div>

          <!-- Another Failed Challenge -->
          <div class="bg-white border border-gray-300 rounded-lg p-6">
            <!-- Header with Login -->
            <div class="mb-6">
              <h2 class="text-lg font-bold text-gray-900 mb-1">Login: 1211775</h2>
              <div class="text-sm text-gray-600">
                <span class="font-medium">Login: 1211775</span>
              </div>
            </div>

            <!-- Legend & Failure Reason -->
            <div class="mb-6">
              <p class="font-bold text-gray-800 mb-2">Legend:</p>
              <div class="p-4 bg-red-50 border border-red-200 rounded">
                <p class="font-bold text-red-800 mb-1">Failure Reason:</p>
                <p class="text-red-700">Expiration Close</p>
              </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-gray-300 my-6"></div>

            <!-- Action Buttons -->
            <div class="flex space-x-3">
              <button class="flex-1 py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300">
                View Details
              </button>
              <button class="flex-1 py-2 px-4 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
                Retry Challenge
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-8">
          <!-- Account Management Section -->
          <div class="bg-white border border-gray-300 rounded-lg p-6">
            <h2 class="text-lg font-bold text-gray-900 mb-6">Account Management</h2>

            <!-- Last Sub Section -->
            <div class="mb-8">
              <p class="font-bold text-gray-800 mb-2">Last Sub:</p>
              <div class="p-4 bg-gray-100 border border-gray-300 rounded">
                <p class="font-bold text-gray-900">Reset Acc</p>
              </div>
            </div>

            <!-- Path Indicator -->
            <div class="mb-8">
              <p class="font-bold text-gray-800 mb-2">MINGW64/c/Users/USER/</p>
              <div class="p-4 bg-gray-100 border border-gray-300 rounded">
                <div class="flex items-center text-gray-700">
                  <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ready for new challenge</span>
                </div>
              </div>
            </div>

            <!-- Chat Section -->
            <div class="mb-8">
              <p class="font-bold text-gray-800 mb-2">Start Chatting</p>
              <button class="w-full py-3 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Open Live Support Chat
              </button>
            </div>

            <!-- Detail Section -->
            <div>
              <p class="font-bold text-gray-800 mb-2">Detail:</p>
              <div class="p-4 bg-blue-50 border border-blue-200 rounded">
                <p class="text-gray-700">
                  For detailed analysis of your challenge performance, 
                  trading statistics, and improvement recommendations, 
                  please contact our support team.
                </p>
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="bg-white border border-gray-300 rounded-lg p-6">
            <h2 class="text-lg font-bold text-gray-900 mb-6">Quick Stats</h2>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center p-4 bg-blue-50 rounded-lg">
                <p class="text-gray-600 text-sm mb-1">Total Challenges</p>
                <p class="text-3xl font-bold">8</p>
              </div>
              <div class="text-center p-4 bg-green-50 rounded-lg">
                <p class="text-gray-600 text-sm mb-1">Passed</p>
                <p class="text-3xl font-bold text-green-600">3</p>
              </div>
              <div class="text-center p-4 bg-red-50 rounded-lg">
                <p class="text-gray-600 text-sm mb-1">Failed</p>
                <p class="text-3xl font-bold text-red-600">5</p>
              </div>
              <div class="text-center p-4 bg-purple-50 rounded-lg">
                <p class="text-gray-600 text-sm mb-1">Success Rate</p>
                <p class="text-3xl font-bold text-purple-600">38%</p>
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="mt-6">
              <div class="flex justify-between text-sm text-gray-600 mb-1">
                <span>Current Progress</span>
                <span>45%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="bg-blue-600 h-3 rounded-full" style="width: 45%"></div>
              </div>
            </div>
          </div>

          <!-- Active Challenge -->
          <div class="bg-white border border-gray-300 rounded-lg p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-bold text-gray-900">Active Challenge</h2>
              <span class="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded">
                LIVE
              </span>
            </div>

            <div class="space-y-4">
              <div>
                <p class="text-gray-600 mb-1">Login ID:</p>
                <p class="text-xl font-bold">3344556</p>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-gray-600 mb-1">Account Size</p>
                  <p class="text-lg font-bold">$2,500</p>
                </div>
                <div>
                  <p class="text-gray-600 mb-1">Profit Target</p>
                  <p class="text-lg font-bold text-green-600">$200</p>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-gray-600 mb-1">Current Profit</p>
                  <p class="text-lg font-bold">$90</p>
                </div>
                <div>
                  <p class="text-gray-600 mb-1">Days Left</p>
                  <p class="text-lg font-bold">7</p>
                </div>
              </div>

              <button class="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg">
                Go to Trading Platform
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge History Table -->
      <div class="mt-8 bg-white border border-gray-300 rounded-lg p-6">
        <h2 class="text-lg font-bold text-gray-900 mb-6">Challenge History</h2>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Login ID</th>
                <th class="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Amount</th>
                <th class="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Result</th>
                <th class="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Date</th>
                <th class="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-medium">2178750</td>
                <td class="px-4 py-3 text-sm">Instant</td>
                <td class="px-4 py-3 text-sm font-bold">$500</td>
                <td class="px-4 py-3">
                  <span class="px-3 py-1 text-xs font-bold bg-red-100 text-red-800 rounded">Failed</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">2024-12-15</td>
                <td class="px-4 py-3">
                  <button class="text-blue-600 hover:text-blue-800 font-medium text-sm">Details</button>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-medium">1211775</td>
                <td class="px-4 py-3 text-sm">Standard</td>
                <td class="px-4 py-3 text-sm font-bold">$1,000</td>
                <td class="px-4 py-3">
                  <span class="px-3 py-1 text-xs font-bold bg-red-100 text-red-800 rounded">Failed</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">2024-11-28</td>
                <td class="px-4 py-3">
                  <button class="text-blue-600 hover:text-blue-800 font-medium text-sm">Details</button>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-medium">3344556</td>
                <td class="px-4 py-3 text-sm">Pro</td>
                <td class="px-4 py-3 text-sm font-bold text-green-600">$2,500</td>
                <td class="px-4 py-3">
                  <span class="px-3 py-1 text-xs font-bold bg-green-100 text-green-800 rounded">Active</span>
                </td>
                <td class="px-4 py-3 text-sm text-gray-600">2024-12-20</td>
                <td class="px-4 py-3">
                  <button class="text-blue-600 hover:text-blue-800 font-medium text-sm">Trade</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
    
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue'
</script>

<style scoped>
/* Simple, clean styling matching the screenshot */
.border {
  border-width: 1px;
}

/* Font weights matching the screenshot */
.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 600;
}

/* Table styling */
thead tr {
  background-color: #f9fafb;
}

tbody tr:hover {
  background-color: #f8fafc;
}
</style>