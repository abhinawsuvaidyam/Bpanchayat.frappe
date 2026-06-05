<template>
    <div class="bg-green-800 shadow-lg">
        <div class="max-w-6xl mx-auto px-6 py-3 flex items-center gap-4">

            <!-- EMBLEM -->
            <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                <span class="text-green-800 font-extrabold text-xs text-center leading-tight">बिहार<br />सरकार</span>
            </div>

            <!-- TITLE -->
            <div class="hidden sm:block">
                <h1 class="text-white text-lg font-bold leading-tight">Bihar Panchayat Digital Portal</h1>
                <p class="text-green-200 text-xs">बिहार पंचायत डिजिटल पोर्टल — ग्राम स्वराज की ओर</p>
            </div>

            <!-- NAV LINKS -->
            <nav class="ml-auto flex items-center gap-1">
                <router-link to="/"
                    class="text-white/80 hover:text-white hover:bg-green-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    active-class="bg-green-700 text-white">
                    Home
                </router-link>
                <router-link to="/complaint"
                    class="text-white/80 hover:text-white hover:bg-green-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    active-class="bg-green-700 text-white">
                    Complaint
                </router-link>
                <router-link to="/profile"
                    class="text-white/80 hover:text-white hover:bg-green-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    active-class="bg-green-700 text-white">
                    Profile
                </router-link>
                <router-link to="/scheme"
                    class="text-white/80 hover:text-white hover:bg-green-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    active-class="bg-green-700 text-white">
                    Schemes
                </router-link>
            </nav>

            <!-- LOGOUT -->
            <button v-if="$auth?.isLoggedIn" @click="$auth.logout()"
                class="ml-2 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors border border-white/20 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
            </button>

        </div>

        <!-- TRICOLOR STRIP -->
        <div class="flex h-1">
            <div class="flex-1 bg-orange-400"></div>
            <div class="flex-1 bg-white"></div>
            <div class="flex-1 bg-green-500"></div>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const $auth = inject('$auth');
</script>
