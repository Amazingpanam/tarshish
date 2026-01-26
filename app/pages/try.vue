<script setup>
  import { Authenticator } from "@aws-amplify/ui-vue";
  import "@aws-amplify/ui-vue/styles.css";

  import { Amplify } from 'aws-amplify';
  // import config from './src/amplifyconfiguration.json';
  import config from '~/src/amplifyconfiguration.json'
  const extendedConfig = {
  ...config, // Keep all your existing settings
  
  // Add Auth configuration with cookieStorage
  Auth: {
    Cognito: {
      // Your existing Cognito settings
      identityPoolId: config.aws_cognito_identity_pool_id,
      userPoolId: config.aws_user_pools_id,
      userPoolClientId: config.aws_user_pools_web_client_id,
      region: config.aws_cognito_region,
      
      // 👇 ADD THIS FOR COOKIE STORAGE
      cookieStorage: {
        domain: process.env.NODE_ENV === 'production' ? '.yourdomain.com' : 'localhost',
        path: '/',
        expires: 7, // 7 days
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      },
      
      // Optional: If you want to use username instead of email
      usernameAttributes: config.aws_cognito_username_attributes,
      signUpAttributes: config.aws_cognito_signup_attributes,
      
      // Password policy from your config
      passwordFormat: {
        minLength: config.aws_cognito_password_protection_settings.passwordPolicyMinLength,
        requireLowercase: config.aws_cognito_password_protection_settings.passwordPolicyCharacters.includes('REQUIRES_LOWERCASE'),
        requireUppercase: config.aws_cognito_password_protection_settings.passwordPolicyCharacters.includes('REQUIRES_UPPERCASE'),
        requireNumbers: config.aws_cognito_password_protection_settings.passwordPolicyCharacters.includes('REQUIRES_NUMBERS'),
        requireSymbols: config.aws_cognito_password_protection_settings.passwordPolicyCharacters.includes('REQUIRES_SYMBOLS')
      },
      
      // MFA settings from your config
      mfaConfiguration: config.aws_cognito_mfa_configuration,
      mfaTypes: config.aws_cognito_mfa_types
    }
  }
};

// Configure Amplify
Amplify.configure(extendedConfig);
  // Amplify.configure(config);
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>