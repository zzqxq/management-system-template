import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(6666);
  const isAuthenticated = ref(false);

  function setUser(newUser) {
    user.value = newUser;
    isAuthenticated.value = true;
  }

  function clearUser() {
    user.value = null;
    isAuthenticated.value = false;
  }

  const getUser = computed(() => user.value);
  const isLoggedIn = computed(() => isAuthenticated.value);

  return {
    user,
    isAuthenticated,
    setUser,
    clearUser,
    getUser,
    isLoggedIn,
  };
});
