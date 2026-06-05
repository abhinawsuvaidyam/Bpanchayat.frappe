<template>
    <div class="min-h-screen bg-amber-50">
        <div class="max-w-5xl mx-auto px-4 py-8">

            <!-- PAGE TITLE -->
            <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-green-900 tracking-tight">
                    My Profile &nbsp;/&nbsp; <span class="font-normal"
                        style="font-family:'Tiro Devanagari Hindi',serif">मेरी प्रोफ़ाइल</span>
                </h2>
                <p class="text-gray-400 text-sm mt-1">
                    Your registered information &nbsp;•&nbsp; आपकी पंजीकृत जानकारी
                </p>
            </div>

            <!-- MAIN CARD -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">

                <!-- PROFILE HEADER -->
                <div
                    class="bg-gradient-to-br from-green-900 via-green-800 to-green-700 px-6 py-10 flex flex-col items-center relative overflow-hidden">
                    <div class="absolute -top-16 -right-16 w-56 h-56 rounded-full border-[32px] border-white/5"></div>
                    <div class="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-[20px] border-amber-400/10">
                    </div>
                    <div class="absolute top-0 left-0 right-0 h-1 flex">
                        <div class="flex-1 bg-amber-500"></div>
                        <div class="flex-1 bg-white/40"></div>
                        <div class="flex-1 bg-green-400"></div>
                    </div>
                    <div class="relative z-10 flex flex-col items-center">
                        <div class="relative">
                            <img :src="previewImage || getImageUrl(form.profile_image)"
                                class="w-28 h-28 rounded-full object-cover border-4 border-white shadow-2xl" />
                            <div
                                class="absolute -bottom-1 -right-1 bg-amber-500 rounded-full w-7 h-7 flex items-center justify-center text-sm shadow">
                                🔒
                            </div>
                        </div>
                        <p class="text-white font-bold text-xl mt-4 tracking-wide">{{ fullName || 'Villager Name' }}</p>
                        <p class="text-green-200 text-xs mt-1">Bihar Panchayat Member</p>
                        <div class="mt-3 flex gap-2 flex-wrap justify-center">
                            <span
                                class="bg-white/10 border border-white/20 text-green-100 text-xs px-3 py-1 rounded-full">
                                📍 {{ form.village || 'Village N/A' }}
                            </span>
                            <span
                                class="bg-white/10 border border-white/20 text-green-100 text-xs px-3 py-1 rounded-full">
                                🏛 {{ form.gram_panchayat || 'Panchayat N/A' }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="p-6 md:p-8 space-y-8">

                    <!-- SECTION: Personal Information -->
                    <div>
                        <div class="flex items-center gap-3 mb-5">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 shrink-0">
                                <svg class="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-green-900 font-bold text-sm uppercase tracking-wider leading-none">
                                    Personal Information</h3>
                                <p class="text-gray-400 text-xs mt-0.5"
                                    style="font-family:'Tiro Devanagari Hindi',serif">व्यक्तिगत जानकारी</p>
                            </div>
                            <div class="flex-1 h-px bg-green-100 ml-1"></div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">First
                                    Name / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">पहला नाम</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center">
                                    {{ form.first_name || '—' }}</div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Middle
                                    Name / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">मध्य नाम</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center">
                                    {{ form.middle_name || '—' }}</div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Last
                                    Name / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">अंतिम नाम</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center">
                                    {{ form.last_name || '—' }}</div>
                            </div>
                        </div>

                        <div>
                            <label
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Full
                                Name / <span class="normal-case font-normal"
                                    style="font-family:'Tiro Devanagari Hindi',serif">पूरा नाम</span></label>
                            <div
                                class="w-full bg-green-50 border border-green-100 rounded-xl px-4 py-2.5 text-green-900 font-semibold text-sm min-h-[44px] flex items-center gap-2">
                                <span class="text-green-400 text-base">✦</span> {{ fullName || '—' }}
                            </div>
                        </div>
                    </div>

                    <!-- SECTION: Identity & Contact -->
                    <div>
                        <div class="flex items-center gap-3 mb-5">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 shrink-0">
                                <svg class="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-green-900 font-bold text-sm uppercase tracking-wider leading-none">
                                    Identity &amp; Contact</h3>
                                <p class="text-gray-400 text-xs mt-0.5"
                                    style="font-family:'Tiro Devanagari Hindi',serif">पहचान और संपर्क</p>
                            </div>
                            <div class="flex-1 h-px bg-amber-100 ml-1"></div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Aadhaar
                                    No. / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">आधार संख्या</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center font-mono tracking-widest">
                                    {{ maskedAadhaar || '—' }}</div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email
                                    / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">ईमेल</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center">
                                    {{ form.email || '—' }}</div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Phone
                                    / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">मोबाइल नंबर</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center">
                                    {{ form.phone || '—' }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- SECTION: Address Details -->
                    <div>
                        <div class="flex items-center gap-3 mb-5">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 shrink-0">
                                <svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-green-900 font-bold text-sm uppercase tracking-wider leading-none">
                                    Address Details</h3>
                                <p class="text-gray-400 text-xs mt-0.5"
                                    style="font-family:'Tiro Devanagari Hindi',serif">पता विवरण</p>
                            </div>
                            <div class="flex-1 h-px bg-blue-100 ml-1"></div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Village
                                    / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">गाँव</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center gap-2">
                                    <span class="text-gray-400">🏡</span> {{ form.village || '—' }}
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Gram
                                    Panchayat / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">ग्राम पंचायत</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center gap-2">
                                    <span class="text-gray-400">🏛</span> {{ form.gram_panchayat || '—' }}
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Block
                                    / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">प्रखंड</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center gap-2">
                                    <span class="text-gray-400">📦</span> {{ form.block || '—' }}
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">District
                                    / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">जिला</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center gap-2">
                                    <span class="text-gray-400">🗺</span> {{ form.district || '—' }}
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">State
                                    / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">राज्य</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center gap-2">
                                    <span class="text-gray-400">🏴</span> {{ form.state || '—' }}
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Country
                                    / <span class="normal-case font-normal"
                                        style="font-family:'Tiro Devanagari Hindi',serif">देश</span></label>
                                <div
                                    class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-700 text-sm min-h-[44px] flex items-center gap-2">
                                    <span class="text-gray-400">🌐</span> {{ form.country || '—' }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- FOOTER ACTIONS -->
                    <div
                        class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-gray-100">
                        <p class="text-xs text-gray-400 text-center sm:text-left">
                            ⚠️ सभी जानकारी सही और सच्ची होनी चाहिए &nbsp;•&nbsp; All information must be accurate
                        </p>
                        <router-link to="/updateprofile"
                            class="inline-flex items-center gap-2.5 bg-green-800 hover:bg-green-900 active:scale-95 transition-all duration-150 text-white font-bold px-8 py-3 rounded-xl shadow-md text-sm whitespace-nowrap">
                            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Update Profile &nbsp;/&nbsp; <span
                                style="font-family:'Tiro Devanagari Hindi',serif">प्रोफ़ाइल अपडेट करें</span>
                        </router-link>
                    </div>

                </div>
            </div>

            <!-- FOOTER -->
            <p class="text-center text-gray-400 text-xs mt-6">
                Government of Bihar &nbsp;•&nbsp; बिहार सरकार &nbsp;•&nbsp; Bihar Panchayat Digital Portal
            </p>

        </div>
    </div>
</template>

<script setup>
import { reactive, computed, ref, inject } from "vue"
const call = inject("call")
const defaultImage = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
const previewImage = ref(null)

const form = reactive({
    first_name: "", middle_name: "", last_name: "",
    village: "", gram_panchayat: "", block: "",
    adhar_number: "", email: "", phone: "",
    district: "", state: "", country: "", profile_image: "",
})

async function getVillagersProfile() {
    try {
        const response = await fetch("/api/method/bpanchayat.controllers.api.get_villagers_profile")
        const data = await response.json()
        Object.assign(form, data.message)
    } catch (error) {
        console.error("Error fetching villager profile:", error)
    }
}
getVillagersProfile()

const fullName = computed(() =>
    [form.first_name, form.middle_name, form.last_name].filter(Boolean).join(" ")
)

const maskedAadhaar = computed(() => {
    const n = form.adhar_number?.replace(/\s/g, "")
    if (!n || n.length < 4) return form.adhar_number || ""
    return "XXXX XXXX " + n.slice(-4)
})

const getImageUrl = (file) => {
    if (!file) return defaultImage
    return `/api/method/frappe.utils.file_manager.download_file?file_url=${file}`
}

</script>