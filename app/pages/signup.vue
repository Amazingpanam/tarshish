<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import Navbar from '~/components/Navbar.vue'
import { Amplify } from 'aws-amplify';
import config from '~/src/amplifyconfiguration.json'

Amplify.configure(config);
</script>

<template>
  <Navbar />
  
  <!-- Add padding-top to create space -->
  <div class="pt-8 md:pt-12 lg:pt-16"> <!-- Responsive padding -->
    <Authenticator>
      <template v-slot="{ user, signOut }">
        <!-- Add some padding inside the auth content too -->
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