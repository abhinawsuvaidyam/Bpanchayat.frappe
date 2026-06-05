<template>
    <div class="min-h-screen bg-green-900 flex flex-col">

        <!-- TOP GOV STRIP -->
        <div class="flex h-1 shrink-0">
            <div class="flex-1 bg-orange-400"></div>
            <div class="flex-1 bg-white"></div>
            <div class="flex-1 bg-green-400"></div>
        </div>

        <!-- CENTER CONTENT -->
        <div class="flex flex-1 items-center justify-center px-4 py-12">
            <div class="w-full max-w-md">

                <!-- GOV EMBLEM + TITLE -->
                <div class="flex flex-col items-center mb-8">
                    <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-4">
                        <span class="text-green-800 font-extrabold text-sm text-center leading-tight">बिहार<br/>सरकार</span>
                    </div>
                    <h1 class="text-white text-2xl font-bold text-center leading-tight">
                        Bihar Panchayat Digital Portal
                    </h1>
                    <p class="text-green-300 text-sm mt-1 text-center">
                        बिहार पंचायत डिजिटल पोर्टल — ग्राम स्वराज की ओर
                    </p>
                </div>

                <!-- LOGIN CARD -->
                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">

                    <!-- CARD HEADER -->
                    <div class="bg-green-700 px-8 py-5 text-center">
                        <h2 class="text-white font-bold text-lg">Citizen Login &nbsp;/&nbsp; नागरिक लॉगिन</h2>
                        <p class="text-green-200 text-xs mt-0.5">Enter your credentials to access the portal</p>
                    </div>

                    <!-- FORM -->
                    <form @submit.prevent="login" class="px-8 py-7 space-y-5">

                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                Username &nbsp;<span class="normal-case font-normal text-gray-400">/ यूजर नाम</span>
                            </label>
                            <input
                                type="text"
                                v-model="email"
                                placeholder="Enter your username"
                                class="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition-colors text-sm"
                            />
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                Password &nbsp;<span class="normal-case font-normal text-gray-400">/ पासवर्ड</span>
                            </label>
                            <input
                                type="password"
                                v-model="password"
                                placeholder="Enter your password"
                                class="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition-colors text-sm"
                            />
                        </div>

                        <!-- ERROR MESSAGE -->
                        <div v-if="errorMessage" class="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-red-600 text-sm">{{ errorMessage }}</p>
                        </div>

                        <!-- SUBMIT BUTTON -->
                        <button
                            type="submit"
                            :disabled="loading"
                            class="w-full bg-green-700 hover:bg-green-800 active:bg-green-900 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white font-bold py-3 rounded-lg shadow-md text-base flex items-center justify-center gap-2"
                        >
                            <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            {{ loading ? 'Signing in... / लॉगिन हो रहा है...' : 'Sign In / लॉगिन करें' }}
                        </button>

                    </form>

                    <!-- CARD FOOTER NOTE -->
                    <div class="px-8 pb-6 text-center">
                        <p class="text-xs text-gray-400">
                            ★ सरकारी पोर्टल — अनधिकृत पहुँच वर्जित है
                        </p>
                    </div>
                </div>

                <!-- BOTTOM NOTE -->
                <p class="text-center text-green-400 text-xs mt-6">
                    Government of Bihar &nbsp;•&nbsp; बिहार सरकार &nbsp;•&nbsp; © 2024
                </p>

            </div>
        </div>

        <!-- BOTTOM GOV STRIP -->
        <div class="flex h-1 shrink-0">
            <div class="flex-1 bg-orange-400"></div>
            <div class="flex-1 bg-white"></div>
            <div class="flex-1 bg-green-400"></div>
        </div>

    </div>
</template>
<script>
export default {
  data() {
	return {
	  email: null,
	  password: null,
	  errorMessage: null,
	  loading: false,
	};
  },
  inject: ["$auth"],
  async mounted() {
	if (this.$route?.query?.route) {
	  this.redirect_route = this.$route.query.route;
	  this.$router.replace({ query: null });
	}
  },
  methods: {
	async login() {
	  if (!this.email || !this.password) return;
	  this.errorMessage = null;
	  this.loading = true;
	  try {
		let res = await this.$auth.login(this.email, this.password);
		if (res) {
		  this.$router.push({ name: "Home" });
		}
	  } catch (err) {
		this.errorMessage =
		  (err.messages && err.messages.join(', ')) ||
		  err.message ||
		  'Login failed. Please check your credentials.';
	  } finally {
		this.loading = false;
	  }
	},
  },
};
</script>
