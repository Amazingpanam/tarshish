<template>
  <div>
    <!-- Main Card -->
    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900">My Account</h3>
      </div>
      <div class="space-y-3 mb-6">
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Active Accounts:</span>
          <span class="font-bold">{{ activeAccountsCount }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Total Balance:</span>
          <span class="font-bold text-green-600">{{ totalBalance }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">Profit/Loss:</span>
          <span class="font-bold" :class="totalProfitLoss >= 0 ? 'text-green-600' : 'text-red-600'">
            {{ totalProfitLoss >= 0 ? '+' : '' }}{{ formatCurrency(totalProfitLoss) }}
          </span>
        </div>
      </div>
      <button 
        @click="showAccountPopup = true"
        class="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300"
      >
        View Details
      </button>
    </div>

    <!-- Account Selection Popup -->
    <div 
      v-if="showAccountPopup" 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="closePopup"
    >
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <!-- Popup Header -->
        <div class="bg-gradient-to-r from-green-600 to-green-800 p-6 text-white">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-2xl font-bold">My Trading Accounts</h2>
              <p class="text-green-100 mt-1">View all your trading accounts and their details</p>
            </div>
            <button 
              @click="closePopup"
              class="text-white hover:text-green-200 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-4 flex items-center">
            <div class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mr-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p class="font-medium">John Doe</p>
              <p class="text-sm text-green-200">MT5 Trader</p>
            </div>
          </div>
        </div>
        
        <!-- Accounts Table -->
        <div class="p-6 overflow-auto">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Order ID</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date Created</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">MT5 Login</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Balance</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr 
                  v-for="account in userAccounts" 
                  :key="account.orderId"
                  class="hover:bg-gray-50 transition-colors"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ account.orderId }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ account.dateCreated }}</div>
                    <div class="text-xs text-gray-500">{{ account.timeCreated }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span 
                      :class="{
                        'px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full': true,
                        'bg-green-100 text-green-800': account.orderStatus === 'Completed',
                        'bg-blue-100 text-blue-800': account.orderStatus === 'In Progress',
                        'bg-red-100 text-red-800': account.orderStatus === 'Breached',
                        'bg-yellow-100 text-yellow-800': account.orderStatus === 'Pending'
                      }"
                    >
                      {{ account.orderStatus }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ account.mt5Login }}</div>
                    <div class="text-xs text-gray-500">{{ account.accountType }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-semibold text-gray-900">{{ formatCurrency(account.balance) }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      @click="viewAccountDetails(account)"
                      class="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="mt-6 text-center text-gray-500">
            <p>Total accounts: <span class="font-bold text-green-600">{{ userAccounts.length }}</span></p>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div class="flex justify-between items-center">
            <button 
              @click="closePopup"
              class="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Close
            </button>
            <div class="text-sm text-gray-600 flex items-center">
              <svg class="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Click "View" to see MT5 login credentials and order details</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Account Details Popup -->
    <div 
      v-if="showAccountDetails"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      @click.self="closeDetails"
    >
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <!-- Details Header -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white sticky top-0 z-10">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-2xl font-bold">Account Details</h2>
              <p class="text-blue-100 mt-1">Order ID: {{ selectedAccount?.orderId }}</p>
            </div>
            <button 
              @click="closeDetails"
              class="text-white hover:text-blue-200 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Account Details -->
        <div class="p-6" v-if="selectedAccount">
          <!-- Order Status Section -->
          <div class="mb-8 p-4 bg-gray-50 rounded-lg">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Order Status</h3>
                <p class="text-sm text-gray-600 mt-1">Order ID: {{ selectedAccount.orderId }}</p>
              </div>
              <span 
                :class="{
                  'px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg': true,
                  'bg-green-100 text-green-800 border border-green-300': selectedAccount.orderStatus === 'Completed',
                  'bg-blue-100 text-blue-800 border border-blue-300': selectedAccount.orderStatus === 'In Progress',
                  'bg-red-100 text-red-800 border border-red-300': selectedAccount.orderStatus === 'Breached',
                  'bg-yellow-100 text-yellow-800 border border-yellow-300': selectedAccount.orderStatus === 'Pending'
                }"
              >
                {{ selectedAccount.orderStatus }}
              </span>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-600">Date Created</p>
                <p class="font-medium">{{ selectedAccount.dateCreated }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-600">Last Updated</p>
                <p class="font-medium">{{ selectedAccount.lastUpdated }}</p>
              </div>
            </div>
          </div>

          <!-- MT5 Login Details Section -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              MT5 Login Credentials
            </h3>
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-blue-700 mb-1">MT5 Login ID</label>
                    <div class="flex items-center">
                      <input 
                        :value="selectedAccount.mt5Login" 
                        type="text" 
                        readonly
                        class="flex-1 bg-white border border-blue-300 rounded-l-lg px-4 py-2 text-gray-900 font-mono"
                      >
                      <button 
                        @click="copyToClipboard(selectedAccount.mt5Login)"
                        class="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-blue-700 mb-1">MT5 Password</label>
                    <div class="flex items-center">
                      <input 
                        :value="selectedAccount.mt5Password" 
                        :type="showPassword ? 'text' : 'password'"
                        readonly
                        class="flex-1 bg-white border border-blue-300 rounded-l-lg px-4 py-2 text-gray-900 font-mono"
                      >
                      <button 
                        @click="togglePassword"
                        class="bg-blue-600 text-white px-3 py-2 hover:bg-blue-700 transition-colors"
                      >
                        {{ showPassword ? 'Hide' : 'Show' }}
                      </button>
                      <button 
                        @click="copyToClipboard(selectedAccount.mt5Password)"
                        class="bg-blue-700 text-white px-3 py-2 rounded-r-lg hover:bg-blue-800 transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-blue-700 mb-1">MT5 Server</label>
                    <div class="flex items-center">
                      <input 
                        :value="selectedAccount.mt5Server" 
                        type="text" 
                        readonly
                        class="flex-1 bg-white border border-blue-300 rounded-l-lg px-4 py-2 text-gray-900 font-mono"
                      >
                      <button 
                        @click="copyToClipboard(selectedAccount.mt5Server)"
                        class="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-blue-700 mb-1">Account Type</label>
                    <div class="bg-white border border-blue-300 rounded-lg px-4 py-2">
                      <span class="font-medium text-gray-900">{{ selectedAccount.accountType }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 p-3 bg-blue-100 rounded-lg">
                <p class="text-sm text-blue-800 flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Keep your login credentials secure. Do not share with anyone.
                </p>
              </div>
            </div>
          </div>

          <!-- Purchase Details Section -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Purchase Details
            </h3>
            <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div class="bg-gray-50 px-5 py-3 border-b border-gray-200">
                <h4 class="font-medium text-gray-900">How this account was purchased</h4>
              </div>
              <div class="p-5">
                <div class="space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <p class="text-sm text-gray-600">Payment Method</p>
                      <p class="font-medium text-gray-900 flex items-center">
                        <svg class="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" clip-rule="evenodd"></path>
                        </svg>
                        {{ selectedAccount.paymentMethod }}
                      </p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-600">Transaction ID</p>
                      <p class="font-medium text-gray-900 font-mono">{{ selectedAccount.transactionId }}</p>
                    </div>
                  </div>
                  
                  <div class="border-t border-gray-100 pt-4">
                    <div class="space-y-2">
                      <div class="flex justify-between">
                        <span class="text-gray-600">Account Price</span>
                        <span class="font-medium">{{ formatCurrency(selectedAccount.accountPrice) }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Setup Fee</span>
                        <span class="font-medium">{{ formatCurrency(selectedAccount.setupFee) }}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Platform Fee</span>
                        <span class="font-medium">{{ formatCurrency(selectedAccount.platformFee) }}</span>
                      </div>
                      <div v-if="selectedAccount.discount > 0" class="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-{{ formatCurrency(selectedAccount.discount) }}</span>
                      </div>
                      <div class="flex justify-between border-t border-gray-200 pt-2 font-bold text-lg">
                        <span>Total Paid</span>
                        <span class="text-green-700">{{ formatCurrency(selectedAccount.totalPaid) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Account Information -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Account Information
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-50 rounded-lg p-5">
                <h4 class="font-medium text-gray-900 mb-3">Trading Details</h4>
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Leverage</span>
                    <span class="font-medium">{{ selectedAccount.leverage }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Currency</span>
                    <span class="font-medium">{{ selectedAccount.currency }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Balance</span>
                    <span class="font-medium text-green-600">{{ formatCurrency(selectedAccount.balance) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Equity</span>
                    <span class="font-medium">{{ formatCurrency(selectedAccount.equity) }}</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-5">
                <h4 class="font-medium text-gray-900 mb-3">Account Status</h4>
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Last Login</span>
                    <span class="font-medium">{{ selectedAccount.lastLogin }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Account Status</span>
                    <span class="font-medium text-green-600">{{ selectedAccount.status }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Margin Level</span>
                    <span :class="{
                      'font-medium': true,
                      'text-green-600': selectedAccount.marginLevel > 1000,
                      'text-yellow-600': selectedAccount.marginLevel > 500 && selectedAccount.marginLevel <= 1000,
                      'text-red-600': selectedAccount.marginLevel <= 500
                    }">
                      {{ selectedAccount.marginLevel }}%
                    </span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Free Margin</span>
                    <span class="font-medium">{{ formatCurrency(selectedAccount.freeMargin) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Details Footer -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 sticky bottom-0">
          <div class="flex justify-between">
            <button 
              @click="backToAccounts"
              class="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Accounts
            </button>
            <div class="flex space-x-3">
              <button 
                @click="downloadCredentials"
                class="px-5 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                Download Credentials
              </button>
              <button 
                @click="connectToMT5"
                class="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300"
              >
                Connect to MT5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// State
const showAccountPopup = ref(false)
const showAccountDetails = ref(false)
const selectedAccount = ref(null)
const showPassword = ref(false)

// Dummy data for user accounts
const userAccounts = ref([
  {
    orderId: "ORD-2023-001",
    dateCreated: "2023-10-15",
    timeCreated: "14:30",
    lastUpdated: "2023-12-20",
    orderStatus: "Completed",
    mt5Login: "51002345",
    mt5Password: "P@ssw0rdMT5!2023",
    mt5Server: "MetaQuotes-Demo",
    accountType: "Premium Forex",
    balance: 42500,
    accountPrice: 35000,
    setupFee: 5000,
    platformFee: 3000,
    discount: 2000,
    totalPaid: 41000,
    paymentMethod: "Bank Transfer",
    transactionId: "TRX-789012345",
    leverage: "1:100",
    currency: "USD",
    equity: 42750,
    lastLogin: "2023-12-20 09:45",
    status: "Active",
    marginLevel: 1250,
    freeMargin: 38000,
    accountName: "Premium Forex Account"
  },
  {
    orderId: "ORD-2023-002",
    dateCreated: "2023-09-22",
    timeCreated: "10:15",
    lastUpdated: "2023-12-19",
    orderStatus: "In Progress",
    mt5Login: "51006789",
    mt5Password: "SecurePass!456",
    mt5Server: "ForexLive-Server",
    accountType: "Crypto Trading",
    balance: 28750,
    accountPrice: 25000,
    setupFee: 4000,
    platformFee: 2500,
    discount: 1500,
    totalPaid: 30000,
    paymentMethod: "Card Payment",
    transactionId: "TRX-678901234",
    leverage: "1:50",
    currency: "EUR",
    equity: 28900,
    lastLogin: "2023-12-19 14:20",
    status: "Active",
    marginLevel: 850,
    freeMargin: 24000,
    accountName: "Crypto Portfolio"
  },
  {
    orderId: "ORD-2023-003",
    dateCreated: "2023-11-05",
    timeCreated: "16:45",
    lastUpdated: "2023-12-18",
    orderStatus: "Breached",
    mt5Login: "51001234",
    mt5Password: "TradeSafe#789",
    mt5Server: "GoldTrading-Server",
    accountType: "Gold Investment",
    balance: 13800,
    accountPrice: 15000,
    setupFee: 3000,
    platformFee: 2000,
    discount: 0,
    totalPaid: 20000,
    paymentMethod: "Bank Transfer",
    transactionId: "TRX-456789012",
    leverage: "1:30",
    currency: "USD",
    equity: 13500,
    lastLogin: "2023-12-10 11:30",
    status: "Suspended",
    marginLevel: 320,
    freeMargin: 8500,
    accountName: "Gold Savings Account"
  },
  {
    orderId: "ORD-2023-004",
    dateCreated: "2023-12-01",
    timeCreated: "09:00",
    lastUpdated: "2023-12-15",
    orderStatus: "Pending",
    mt5Login: "51008901",
    mt5Password: "Pending@1234",
    mt5Server: "Demo-Server-02",
    accountType: "Stock Trading",
    balance: 0,
    accountPrice: 20000,
    setupFee: 4000,
    platformFee: 3000,
    discount: 1000,
    totalPaid: 26000,
    paymentMethod: "PayPal",
    transactionId: "TRX-234567890",
    leverage: "1:20",
    currency: "USD",
    equity: 0,
    lastLogin: "Not yet logged in",
    status: "Pending Activation",
    marginLevel: 0,
    freeMargin: 0,
    accountName: "Stock Market Account"
  },
  {
    orderId: "ORD-2023-005",
    dateCreated: "2023-08-10",
    timeCreated: "13:20",
    lastUpdated: "2023-11-25",
    orderStatus: "Completed",
    mt5Login: "51005678",
    mt5Password: "Completed#2023",
    mt5Server: "ForexLive-Server",
    accountType: "Forex Basic",
    balance: 65000,
    accountPrice: 50000,
    setupFee: 6000,
    platformFee: 4000,
    discount: 5000,
    totalPaid: 55000,
    paymentMethod: "Bank Transfer",
    transactionId: "TRX-890123456",
    leverage: "1:100",
    currency: "USD",
    equity: 65200,
    lastLogin: "2023-12-20 08:15",
    status: "Active",
    marginLevel: 1800,
    freeMargin: 58000,
    accountName: "Forex Basic Account"
  }
])

// Computed properties
const activeAccountsCount = computed(() => {
  return userAccounts.value.filter(account => account.status === 'Active').length
})

const totalBalance = computed(() => {
  const total = userAccounts.value.reduce((sum, account) => sum + account.balance, 0)
  return formatCurrency(total)
})

const totalProfitLoss = computed(() => {
  // Simplified profit/loss calculation
  return userAccounts.value.reduce((sum, account) => {
    const profit = account.equity - account.balance + (account.balance > 0 ? account.balance * 0.1 : 0)
    return sum + profit
  }, 0)
})

// Helper functions
const formatCurrency = (amount) => {
  return `₦${amount.toLocaleString('en-NG')}`
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Copied to clipboard!')
    })
    .catch(err => {
      console.error('Failed to copy: ', err)
    })
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Methods
const closePopup = () => {
  showAccountPopup.value = false
}

const viewAccountDetails = (account) => {
  selectedAccount.value = account
  showAccountPopup.value = false
  showAccountDetails.value = true
  showPassword.value = false
}

const closeDetails = () => {
  showAccountDetails.value = false
  showPassword.value = false
}

const backToAccounts = () => {
  showAccountDetails.value = false
  showAccountPopup.value = true
}

const downloadCredentials = () => {
  if (selectedAccount.value) {
    const credentials = `
MT5 Account Credentials
=======================
Order ID: ${selectedAccount.value.orderId}
Account Name: ${selectedAccount.value.accountName}
Login: ${selectedAccount.value.mt5Login}
Password: ${selectedAccount.value.mt5Password}
Server: ${selectedAccount.value.mt5Server}
Account Type: ${selectedAccount.value.accountType}
Currency: ${selectedAccount.value.currency}
Leverage: ${selectedAccount.value.leverage}

Downloaded on: ${new Date().toLocaleString()}
Keep this information secure!
    `
    
    const blob = new Blob([credentials], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mt5-credentials-${selectedAccount.value.orderId}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
}

const connectToMT5 = () => {
  if (selectedAccount.value) {
    alert(`Connecting to MT5 with account: ${selectedAccount.value.mt5Login}\nServer: ${selectedAccount.value.mt5Server}`)
    // In a real app, this would open the MT5 application or web platform
  }
}
</script>