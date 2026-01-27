<template>
  <div>
    <!-- Main Card -->
    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900">Request Payout</h3>
      </div>
      <p class="text-gray-600 mb-6">Withdraw your trading profits instantly. Minimum withdrawal: ₦5,000</p>
      <div class="space-y-3">
        <button 
          @click="showPayoutPopup = true"
          class="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-lg hover:shadow-md transition-all duration-300"
        >
          Request Withdrawal
        </button>
        <button 
          @click="showPayoutPopup = true; activeTab = 'history'"
          class="w-full py-3 border border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all duration-300"
        >
          View History
        </button>
      </div>
    </div>

    <!-- Payout Popup -->
    <div 
      v-if="showPayoutPopup" 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="closePayoutPopup"
    >
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <!-- Popup Header -->
        <div class="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-2xl font-bold">Payout Center</h2>
              <p class="text-purple-100 mt-1">Withdraw your profits and track withdrawal history</p>
            </div>
            <button 
              @click="closePayoutPopup"
              class="text-white hover:text-purple-200 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Stats Header -->
          <div class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-purple-500/20 backdrop-blur-sm rounded-lg p-4">
              <p class="text-sm text-purple-200">Total Withdrawn</p>
              <p class="text-xl font-bold">{{ formatCurrency(totalWithdrawn) }}</p>
            </div>
            <div class="bg-purple-500/20 backdrop-blur-sm rounded-lg p-4">
              <p class="text-sm text-purple-200">Total Times</p>
              <p class="text-xl font-bold">{{ totalWithdrawals }} times</p>
            </div>
            <div class="bg-purple-500/20 backdrop-blur-sm rounded-lg p-4">
              <p class="text-sm text-purple-200">Pending</p>
              <p class="text-xl font-bold">{{ pendingWithdrawals }}</p>
            </div>
            <div class="bg-purple-500/20 backdrop-blur-sm rounded-lg p-4">
              <p class="text-sm text-purple-200">Rejected</p>
              <p class="text-xl font-bold">{{ rejectedWithdrawals }}</p>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="border-b border-gray-200">
          <nav class="flex">
            <button 
              @click="activeTab = 'request'"
              :class="{
                'flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-all': true,
                'border-purple-600 text-purple-600': activeTab === 'request',
                'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== 'request'
              }"
            >
              Withdrawal Request
            </button>
            <button 
              @click="activeTab = 'history'"
              :class="{
                'flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-all': true,
                'border-purple-600 text-purple-600': activeTab === 'history',
                'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== 'history'
              }"
            >
              Withdrawal History
            </button>
          </nav>
        </div>

        <!-- Tab Content -->
        <div class="p-6 overflow-auto max-h-[60vh]">
          <!-- Withdrawal Request Tab -->
          <div v-if="activeTab === 'request'">
            <div class="mb-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2">Select Account to Withdraw From</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  v-for="account in availableAccounts" 
                  :key="account.login"
                  @click="selectedAccount = account"
                  :class="{
                    'border-2 rounded-lg p-4 cursor-pointer transition-all': true,
                    'border-purple-500 bg-purple-50': selectedAccount?.login === account.login,
                    'border-gray-200 hover:border-purple-300': selectedAccount?.login !== account.login
                  }"
                >
                  <div class="flex justify-between items-start">
                    <div>
                      <p class="font-medium text-gray-900">{{ account.name }}</p>
                      <p class="text-sm text-gray-600">Login: {{ account.login }}</p>
                    </div>
                    <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {{ account.size }}
                    </span>
                  </div>
                  <div class="mt-3">
                    <p class="text-sm text-gray-600">Available Balance</p>
                    <p class="text-lg font-bold text-green-600">{{ formatCurrency(account.balance) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Withdrawal Form -->
            <div v-if="selectedAccount" class="space-y-6">
              <!-- Account Login & Password -->
              <div>
                <h4 class="font-medium text-gray-900 mb-3">Account Credentials</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">MT5 Login</label>
                    <div class="flex">
                      <input 
                        :value="selectedAccount.login"
                        type="text" 
                        readonly
                        class="flex-1 bg-gray-50 border border-gray-300 rounded-l-lg px-4 py-2 text-gray-900"
                      >
                      <button 
                        @click="copyToClipboard(selectedAccount.login)"
                        class="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-r-lg transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">MT5 Password</label>
                    <div class="flex">
                      <input 
                        :value="selectedAccount.password"
                        :type="showAccountPassword ? 'text' : 'password'"
                        readonly
                        class="flex-1 bg-gray-50 border border-gray-300 rounded-l-lg px-4 py-2 text-gray-900"
                      >
                      <button 
                        @click="toggleAccountPassword"
                        class="bg-gray-200 hover:bg-gray-300 px-3 py-2 transition-colors"
                      >
                        {{ showAccountPassword ? 'Hide' : 'Show' }}
                      </button>
                      <button 
                        @click="copyToClipboard(selectedAccount.password)"
                        class="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-r-lg transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Withdrawal Amount -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Withdrawal Amount (₦)</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₦</span>
                  <input 
                    v-model="withdrawalAmount"
                    type="number"
                    placeholder="5000"
                    min="5000"
                    :max="selectedAccount?.balance || 5000"
                    class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div class="flex justify-between mt-2">
                  <span class="text-sm text-gray-500">Minimum: ₦5,000</span>
                  <span class="text-sm text-gray-500">Available: {{ formatCurrency(selectedAccount?.balance || 0) }}</span>
                </div>
              </div>

              <!-- Bank Details -->
              <div>
                <h4 class="font-medium text-gray-900 mb-3">Bank Details</h4>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                    <select 
                      v-model="bankDetails.bankName"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select Bank</option>
                      <option v-for="bank in banks" :key="bank.code" :value="bank.name">
                        {{ bank.name }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
                    <input 
                      v-model="bankDetails.accountName"
                      type="text"
                      placeholder="John Doe"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                    <input 
                      v-model="bankDetails.accountNumber"
                      type="text"
                      placeholder="0123456789"
                      maxlength="10"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <!-- Summary -->
              <div class="bg-gray-50 rounded-lg p-4">
                <h4 class="font-medium text-gray-900 mb-3">Withdrawal Summary</h4>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Account</span>
                    <span class="font-medium">{{ selectedAccount.name }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Amount</span>
                    <span class="font-medium">{{ formatCurrency(parseFloat(withdrawalAmount) || 0) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Bank</span>
                    <span class="font-medium">{{ bankDetails.bankName || 'Not selected' }}</span>
                  </div>
                  <div v-if="withdrawalFee > 0" class="flex justify-between text-red-600">
                    <span>Processing Fee</span>
                    <span>-{{ formatCurrency(withdrawalFee) }}</span>
                  </div>
                  <div class="flex justify-between border-t border-gray-300 pt-2 font-bold">
                    <span>You will receive</span>
                    <span class="text-green-600">{{ formatCurrency(amountToReceive) }}</span>
                  </div>
                </div>
              </div>

              <button 
                @click="submitWithdrawal"
                :disabled="!canSubmit"
                :class="{
                  'w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-lg transition-all duration-300': true,
                  'hover:shadow-md opacity-100': canSubmit,
                  'opacity-50 cursor-not-allowed': !canSubmit
                }"
              >
                Request Withdrawal
              </button>
            </div>

            <div v-else class="text-center py-8">
              <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <p class="mt-4 text-gray-600">Please select an account to continue</p>
            </div>
          </div>

          <!-- Withdrawal History Tab -->
          <div v-if="activeTab === 'history'">
            <div class="space-y-4">
              <div 
                v-for="withdrawal in withdrawalHistory" 
                :key="withdrawal.id"
                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-medium text-gray-900">Order #{{ withdrawal.orderId }}</p>
                    <p class="text-sm text-gray-600">{{ withdrawal.date }}</p>
                  </div>
                  <span :class="{
                    'px-3 py-1 text-xs font-medium rounded-full': true,
                    'bg-green-100 text-green-800': withdrawal.status === 'Completed',
                    'bg-yellow-100 text-yellow-800': withdrawal.status === 'Pending',
                    'bg-red-100 text-red-800': withdrawal.status === 'Rejected',
                    'bg-blue-100 text-blue-800': withdrawal.status === 'Processing'
                  }">
                    {{ withdrawal.status }}
                  </span>
                </div>
                <div class="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p class="text-sm text-gray-600">Amount</p>
                    <p class="font-bold">{{ formatCurrency(withdrawal.amount) }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Account</p>
                    <p class="font-medium">{{ withdrawal.accountLogin }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Bank</p>
                    <p class="font-medium">{{ withdrawal.bankName }}</p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Account Number</p>
                    <p class="font-mono font-medium">******{{ withdrawal.accountNumber.slice(-4) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="withdrawalHistory.length === 0" class="text-center py-8">
              <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <p class="mt-4 text-gray-600">No withdrawal history found</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div class="flex justify-between items-center">
            <button 
              @click="closePayoutPopup"
              class="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Close
            </button>
            <div v-if="activeTab === 'request'" class="text-sm text-gray-600">
              <p class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Withdrawals are processed within 24-48 hours
              </p>
            </div>
            <div v-else class="text-sm text-gray-600">
              <p>Showing {{ withdrawalHistory.length }} withdrawal{{ withdrawalHistory.length !== 1 ? 's' : '' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

// State
const showPayoutPopup = ref(false)
const activeTab = ref('request')
const selectedAccount = ref(null)
const showAccountPassword = ref(false)
const withdrawalAmount = ref('')

// Bank details
const bankDetails = reactive({
  bankName: '',
  accountName: '',
  accountNumber: ''
})

// Dummy data for available accounts
const availableAccounts = ref([
  {
    login: '51002345',
    password: 'P@ssw0rdMT5!2023',
    name: 'Premium Forex Account',
    size: 'Standard',
    balance: 125450
  },
  {
    login: '51006789',
    password: 'SecurePass!456',
    name: 'Crypto Trading Account',
    size: 'Micro',
    balance: 89750
  },
  {
    login: '51001234',
    password: 'TradeSafe#789',
    name: 'Gold Investment Account',
    size: 'Standard',
    balance: 52300
  },
  {
    login: '51005678',
    password: 'Completed#2023',
    name: 'Forex Basic Account',
    size: 'Premium',
    balance: 210800
  }
])

// Dummy data for banks
const banks = ref([
  { code: '044', name: 'Access Bank' },
  { code: '063', name: 'Diamond Bank' },
  { code: '050', name: 'Ecobank Nigeria' },
  { code: '070', name: 'Fidelity Bank' },
  { code: '011', name: 'First Bank of Nigeria' },
  { code: '214', name: 'First City Monument Bank' },
  { code: '058', name: 'Guaranty Trust Bank' },
  { code: '030', name: 'Heritage Bank' },
  { code: '301', name: 'Jaiz Bank' },
  { code: '082', name: 'Keystone Bank' },
  { code: '101', name: 'Providus Bank' },
  { code: '221', name: 'Stanbic IBTC Bank' },
  { code: '076', name: 'Skye Bank' },
  { code: '068', name: 'Standard Chartered Bank' },
  { code: '232', name: 'Sterling Bank' },
  { code: '100', name: 'Suntrust Bank' },
  { code: '032', name: 'Union Bank of Nigeria' },
  { code: '033', name: 'United Bank for Africa' },
  { code: '215', name: 'Unity Bank' },
  { code: '035', name: 'Wema Bank' },
  { code: '057', name: 'Zenith Bank' }
])

// Dummy withdrawal history
const withdrawalHistory = ref([
  {
    id: 1,
    orderId: 'WD-2023-001',
    date: '2023-12-15 14:30',
    status: 'Completed',
    amount: 50000,
    accountLogin: '51002345',
    bankName: 'Guaranty Trust Bank',
    accountNumber: '0123456789'
  },
  {
    id: 2,
    orderId: 'WD-2023-002',
    date: '2023-12-10 10:15',
    status: 'Pending',
    amount: 30000,
    accountLogin: '51006789',
    bankName: 'Access Bank',
    accountNumber: '0987654321'
  },
  {
    id: 3,
    orderId: 'WD-2023-003',
    date: '2023-12-05 16:45',
    status: 'Rejected',
    amount: 75000,
    accountLogin: '51001234',
    bankName: 'Zenith Bank',
    accountNumber: '0567891234'
  },
  {
    id: 4,
    orderId: 'WD-2023-004',
    date: '2023-11-28 09:20',
    status: 'Completed',
    amount: 25000,
    accountLogin: '51005678',
    bankName: 'United Bank for Africa',
    accountNumber: '0345678912'
  },
  {
    id: 5,
    orderId: 'WD-2023-005',
    date: '2023-11-20 11:30',
    status: 'Processing',
    amount: 45000,
    accountLogin: '51002345',
    bankName: 'First Bank of Nigeria',
    accountNumber: '0789123456'
  }
])

// Computed properties
const totalWithdrawn = computed(() => {
  return withdrawalHistory.value
    .filter(w => w.status === 'Completed')
    .reduce((sum, w) => sum + w.amount, 0)
})

const totalWithdrawals = computed(() => {
  return withdrawalHistory.value.filter(w => w.status === 'Completed').length
})

const pendingWithdrawals = computed(() => {
  return withdrawalHistory.value.filter(w => w.status === 'Pending').length
})

const rejectedWithdrawals = computed(() => {
  return withdrawalHistory.value.filter(w => w.status === 'Rejected').length
})

const withdrawalFee = computed(() => {
  const amount = parseFloat(withdrawalAmount.value) || 0
  return amount >= 100000 ? 1000 : 500
})

const amountToReceive = computed(() => {
  const amount = parseFloat(withdrawalAmount.value) || 0
  return amount - withdrawalFee.value
})

const canSubmit = computed(() => {
  const amount = parseFloat(withdrawalAmount.value) || 0
  return selectedAccount.value && 
         amount >= 5000 && 
         amount <= (selectedAccount.value?.balance || 0) &&
         bankDetails.bankName && 
         bankDetails.accountName && 
         bankDetails.accountNumber.length === 10
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

const toggleAccountPassword = () => {
  showAccountPassword.value = !showAccountPassword.value
}

// Methods
const closePayoutPopup = () => {
  showPayoutPopup.value = false
  activeTab.value = 'request'
  selectedAccount.value = null
  showAccountPassword.value = false
  withdrawalAmount.value = ''
  bankDetails.bankName = ''
  bankDetails.accountName = ''
  bankDetails.accountNumber = ''
}

const submitWithdrawal = () => {
  if (!canSubmit.value) return

  // Create new withdrawal record
  const newWithdrawal = {
    id: withdrawalHistory.value.length + 1,
    orderId: `WD-2023-00${withdrawalHistory.value.length + 1}`,
    date: new Date().toLocaleString(),
    status: 'Pending',
    amount: parseFloat(withdrawalAmount.value),
    accountLogin: selectedAccount.value.login,
    bankName: bankDetails.bankName,
    accountNumber: bankDetails.accountNumber
  }

  // Add to history
  withdrawalHistory.value.unshift(newWithdrawal)

  // Update account balance
  const accountIndex = availableAccounts.value.findIndex(a => a.login === selectedAccount.value.login)
  if (accountIndex !== -1) {
    availableAccounts.value[accountIndex].balance -= parseFloat(withdrawalAmount.value)
  }

  // Show success message
  alert(`Withdrawal request submitted successfully!\nOrder ID: ${newWithdrawal.orderId}\nAmount: ${formatCurrency(newWithdrawal.amount)}`)

  // Reset form
  selectedAccount.value = null
  withdrawalAmount.value = ''
  bankDetails.bankName = ''
  bankDetails.accountName = ''
  bankDetails.accountNumber = ''
  
  // Switch to history tab
  activeTab.value = 'history'
}
</script>