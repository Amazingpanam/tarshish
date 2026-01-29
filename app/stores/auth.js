import { defineStore } from 'pinia';

export const useUserAuth = defineStore('userAuth', {
  state: () => {
    return {
      credentials: null
    };
  },
  actions: {
    login(cred) {
      this.credentials = cred;
    }
  }
}); 