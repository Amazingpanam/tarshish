<template>
  <Navbar />
  
  <div class="pt-8 md:pt-12 lg:pt-16">
    <Authenticator>
      <template v-slot="{ user, signOut }">
        <!-- Move localStorage data to cookies/Pinia -->
        {{ transferDataToSecureStorage() }}
        
        <div class="p-6">
          <h1 class="text-2xl font-bold mb-4">Hello {{ user.username }}!</h1>
          <button 
            @click="signOut"
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      </template>
    </Authenticator>
  </div>
</template>

<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import Navbar from '~/components/Navbar.vue'
import { useUserAuth } from '~/stores/auth'
import { Amplify } from 'aws-amplify';

import config from '~/src/try.json'

Amplify.configure(config);

const transferDataToSecureStorage = () => {
  try {
    // Get ALL Cognito localStorage keys
    const accessToken = "CognitoIdentityServiceProvider.19hr56o8ur6d9qri4a8k6dbj84.e418b438-f081-70dc-3293-fdfd62f91905"+".accessToken"
    const refreshToken = "CognitoIdentityServiceProvider.19hr56o8ur6d9qri4a8k6dbj84.e418b438-f081-70dc-3293-fdfd62f91905"+".refreshToken"
    const idToken = "CognitoIdentityServiceProvider.19hr56o8ur6d9qri4a8k6dbj84.e418b438-f081-70dc-3293-fdfd62f91905"+".idToken"

    const user = useCookie("user")

    user.value= localStorage.getItem(accessToken)
    
    
    // Store all Cognito data in cookies
    
      // localStorage.removeItem(accessToken)
      localStorage.removeItem(refreshToken)
      localStorage.removeItem(idToken)

      console.log("done again")

    // Also get the main user data for Pinia

    
  } catch (error) {
    console.error('Error transferring data:', error)
  }
  
  return null
}

// Helper to extract user ID from key
// const getUserIdFromKey = (key) => {
//   // Key format: CognitoIdentityServiceProvider.clientId.userId.dataType
//   const parts = key.split('.')
//   return parts[2] || 'unknown'
// }
</script>