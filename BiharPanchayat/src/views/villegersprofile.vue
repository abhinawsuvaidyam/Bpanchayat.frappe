<template>
    <div class="min-h-screen bg-amber-50">
        <!-- PAGE BODY -->
        <div class="max-w-5xl mx-auto px-4 py-8">

            <!-- PAGE TITLE -->
            <div class="text-center mb-6">
                <h2 class="text-2xl font-bold text-green-900">My Profile &nbsp;/&nbsp; मेरी प्रोफ़ाइल</h2>
                <p class="text-gray-500 text-sm mt-1">Please fill your details accurately &nbsp;•&nbsp; कृपया अपनी
                    जानकारी सही से भरें</p>
            </div>

            <!-- MAIN CARD -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">

                <!-- PROFILE IMAGE HEADER -->
                <div class="bg-gradient-to-r from-green-800 to-green-700 px-6 py-8 flex flex-col items-center">
                    <div class="relative">
                        <img :src="previewImage || getImageUrl(form.profile_image)"
                            class="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl" />
                        <label
                            class="absolute bottom-0 right-0 bg-amber-500 hover:bg-amber-400 transition-colors rounded-full p-1.5 cursor-pointer shadow"
                            title="Upload photo">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <input type="file" class="hidden" @change="handleImage" />
                        </label>
                    </div>
                    <p class="text-white font-semibold text-lg mt-3">{{ fullName || 'Villager Name' }}</p>
                    <p class="text-green-200 text-xs mt-0.5">Bihar Panchayat Member</p>
                </div>

                <div class="p-6 space-y-8">

                    <!-- SECTION: Personal Information -->
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-700" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-green-900 font-bold text-base leading-none">Personal Information</h3>
                                <p class="text-gray-400 text-xs mt-0.5">व्यक्तिगत जानकारी</p>
                            </div>
                            <div class="flex-1 h-px bg-green-100 ml-2"></div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    First Name <span class="normal-case font-normal text-gray-400">/ पहला नाम</span>
                                </label>
                                <input v-model="form.first_name" type="text" placeholder="Enter first name"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:border-green-500 transition-colors" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Middle Name <span class="normal-case font-normal text-gray-400">/ मध्य नाम</span>
                                </label>
                                <input v-model="form.middle_name" type="text" placeholder="Enter middle name"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:border-green-500 transition-colors" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Last Name <span class="normal-case font-normal text-gray-400">/ अंतिम नाम</span>
                                </label>
                                <input v-model="form.last_name" type="text" placeholder="Enter last name"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:border-green-500 transition-colors" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                Full Name <span class="normal-case font-normal text-gray-400">/ पूरा नाम</span>
                            </label>
                            <input :value="fullName" type="text" readonly
                                class="w-full border-2 border-gray-100 rounded-lg px-3 py-2.5 bg-gray-50 text-gray-500 cursor-not-allowed" />
                        </div>
                    </div>

                    <!-- SECTION: Identity & Contact -->
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-amber-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-green-900 font-bold text-base leading-none">Identity &amp; Contact</h3>
                                <p class="text-gray-400 text-xs mt-0.5">पहचान और संपर्क</p>
                            </div>
                            <div class="flex-1 h-px bg-green-100 ml-2"></div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Aadhaar No. <span class="normal-case font-normal text-gray-400">/ आधार संख्या</span>
                                </label>
                                <input v-model="form.adhar_number" type="text" placeholder="XXXX XXXX XXXX"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:border-green-500 transition-colors" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Email <span class="normal-case font-normal text-gray-400">/ ईमेल</span>
                                </label>
                                <input v-model="form.email" type="email" placeholder="example@email.com"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:border-green-500 transition-colors" />
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Phone <span class="normal-case font-normal text-gray-400">/ मोबाइल नंबर</span>
                                </label>
                                <input v-model="form.phone" type="text" placeholder="+91 XXXXX XXXXX"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:border-green-500 transition-colors" />
                            </div>
                        </div>
                    </div>

                    <!-- SECTION: Address Details -->
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-green-900 font-bold text-base leading-none">Address Details</h3>
                                <p class="text-gray-400 text-xs mt-0.5">पता विवरण</p>
                            </div>
                            <div class="flex-1 h-px bg-green-100 ml-2"></div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Village <span class="normal-case font-normal text-gray-400">/ गाँव</span>
                                </label>
                                <select v-model="form.village"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 bg-white focus:outline-none focus:border-green-500 transition-colors">
                                    <option value="">— अपना गाँव चुनें / Select Village —</option>
                                    <option v-for="village in villages" :key="village.name" :value="village.name">
                                        {{ village.name }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Gram Panchayat <span class="normal-case font-normal text-gray-400">/ ग्राम
                                        पंचायत</span>
                                </label>
                                <select v-model="form.gram_panchayat"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 bg-white focus:outline-none focus:border-green-500 transition-colors">
                                    <option value="">— ग्राम पंचायत चुनें / Select Gram Panchayat —</option>
                                    <option v-for="gramPanchayats in gramPanchayats" :key="gramPanchayats.name"
                                        :value="gramPanchayats.name">
                                        {{ gramPanchayats.name }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Block <span class="normal-case font-normal text-gray-400">/ प्रखंड</span>
                                </label>
                                <select v-model="form.block"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 bg-white focus:outline-none focus:border-green-500 transition-colors">
                                    <option value="">— प्रखंड चुनें / Select Block —</option>
                                    <option v-for="block in blocks" :key="block.name" :value="block.name">
                                        {{ block.name }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    District <span class="normal-case font-normal text-gray-400">/ जिला</span>
                                </label>
                                <select v-model="form.district"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 bg-white focus:outline-none focus:border-green-500 transition-colors">
                                    <option value="">— जिला चुनें / Select District —</option>
                                    <option v-for="district in districts" :key="district.name" :value="district.name">
                                        {{ district.name }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    State <span class="normal-case font-normal text-gray-400">/ राज्य</span>
                                </label>
                                <select v-model="form.state"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 bg-white focus:outline-none focus:border-green-500 transition-colors">
                                    <option value="">— राज्य चुनें / Select State —</option>
                                    <option v-for="state in states" :key="state.name" :value="state.name">
                                        {{ state.name }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                                    Country <span class="normal-case font-normal text-gray-400">/ देश</span>
                                </label>
                                <select v-model="form.country"
                                    class="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 bg-white focus:outline-none focus:border-green-500 transition-colors">
                                    <option value="">— देश चुनें / Select Country —</option>
                                    <option v-for="country in countries" :key="country.name" :value="country.name">
                                        {{ country.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- SAVE BUTTON -->
                    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                        <p class="text-xs text-gray-400">
                            ★ सभी जानकारी सही और सच्ची होनी चाहिए
                        </p>
                        <button @click="saveProfile"
                            class="bg-green-700 hover:bg-green-800 active:bg-green-900 transition-colors text-white font-bold px-10 py-3 rounded-lg shadow-md text-base flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Save Profile &nbsp;/&nbsp; सहेजें
                        </button>
                    </div>

                </div>
            </div>

            <!-- FOOTER NOTE -->
            <p class="text-center text-gray-400 text-xs mt-5">
                Government of Bihar &nbsp;•&nbsp; बिहार सरकार &nbsp;•&nbsp; Bihar Panchayat Digital Portal
            </p>

        </div>
    </div>
</template>

<script setup>
import { reactive, computed, ref, inject } from "vue"

const call = inject("call")
const defaultImage =
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

const previewImage = ref(null)

const form = reactive({
    first_name: "",
    middle_name: "",
    last_name: "",

    village: "",
    gram_panchayat: "",
    block: "",

    adhar_number: "",
    email: "",
    phone: "",

    district: "",
    state: "",
    country: "",
    profile_image: ""
})
// ----------------for the data of select options----------------
const villages = ref([])
const gramPanchayats = ref([])
const blocks = ref([])
const districts = ref([])
const states = ref([])
const countries = ref([])

async function getVillagersProfile() {
    try {
        const response = await fetch(
            "/api/method/bpanchayat.controllers.api.get_villagers_profile"
        )
        const data = await response.json()
        console.log(data, "============================ getVillagersProfile data==========================");

        Object.assign(form, data.message)
    } catch (error) {
        console.error("Error fetching villager profile:", error);
    }
}
getVillagersProfile();

async function saveProfile() {

    try {
        const response = await fetch(
            "/api/method/bpanchayat.controllers.api.update_villagers_profile",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: JSON.stringify(form)
                })
            }
        )

        const data = await response.json()
        if (response.ok) {
            alert("Profile updated successfully!")
        } else {
            alert("Failed to update profile.")
        }
    } catch (error) {
        console.error(error)
    }
}


const handleImage = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    previewImage.value = URL.createObjectURL(file)

    const formData = new FormData()
    formData.append("file", file)
    formData.append("is_private", 0)

    const res = await fetch("/api/method/upload_file", {
        method: "POST",
        headers: { "X-Frappe-CSRF-Token": window.csrf_token },
        body: formData
    })
    const data = await res.json()
    form.profile_image = data.message.file_url  // ← now saveProfile will send the real URL
}

const fullName = computed(() => {
    return `${form.first_name} ${form.middle_name} ${form.last_name}`
})

const getImageUrl = (file) => {
    if (!file) return defaultImage

    return `/api/method/frappe.utils.file_manager.download_file?file_url=${file}`
}


const getLinkData = async (doctype, filters = {}) => {
    const response = await fetch(
        "/api/method/bpanchayat.controllers.api.get_link_fields_data",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                doctype,
                filters: JSON.stringify(filters)
            })
        }
    )

    const data = await response.json()
    return data.message || []
}

async function loadDropdowns() {
    villages.value = await getLinkData("Village")
    gramPanchayats.value = await getLinkData("Gram Panchayat")
    blocks.value = await getLinkData("Block")
    districts.value = await getLinkData("District")
    states.value = await getLinkData("State")
    countries.value = await getLinkData("Country")
}

loadDropdowns()


</script>
