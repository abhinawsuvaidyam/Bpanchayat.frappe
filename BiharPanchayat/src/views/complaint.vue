<template>
    <div class="min-h-screen bg-gray-100">

        <!-- MAIN -->
        <div class="max-w-7xl mx-auto px-4 lg:px-6 py-8">

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <!-- LEFT -->
                <div class="lg:col-span-2 space-y-6">

                    <!-- HERO -->
                    <div class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                        <div class="flex flex-col lg:flex-row justify-between gap-8 items-start">

                            <!-- LEFT CONTENT -->
                            <div class="flex-1">
                                <div
                                    class="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                                    🏛️ Bihar Panchayat — Public Welfare System
                                </div>

                                <h2 class="text-4xl font-bold text-gray-900 mt-5 leading-tight">
                                    Register Your Complaint<br />
                                    <span class="text-green-700">अपनी शिकायत दर्ज करें</span>
                                </h2>

                                <p class="text-gray-600 mt-4 text-base max-w-xl">
                                    Report issues related to roads, electricity, corruption, schools, drainage,
                                    water supply, ration, and Panchayat services.
                                    <span class="block mt-1 text-sm text-gray-400">
                                        सड़क, बिजली, भ्रष्टाचार, स्कूल, जल आपूर्ति से जुड़ी शिकायत दर्ज करें।
                                    </span>
                                </p>

                                <div class="flex flex-wrap gap-4 mt-8">
                                    <button @click="scrollToForm"
                                        class="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold transition-colors flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        File Complaint / शिकायत करें
                                    </button>

                                    <button @click="goToComplaintData"
                                        class="border-2 border-green-700 text-green-700 hover:bg-green-50 px-6 py-3 rounded-2xl font-semibold transition-colors flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        Track Complaints / शिकायत ट्रैक करें
                                    </button>
                                </div>
                            </div>

                            <!-- STATS CARD -->
                            <div class="w-full lg:w-[300px] bg-gray-50 rounded-3xl p-6 border border-gray-200 shrink-0">
                                <div class="text-sm text-gray-500">Total Complaints Registered</div>
                                <div class="text-5xl font-bold mt-1 text-gray-900">
                                    <span v-if="statsLoading" class="text-3xl text-gray-300">...</span>
                                    <span v-else>{{ totalCount }}</span>
                                </div>
                                <div class="text-xs text-green-600 font-medium mt-1">
                                    {{ resolvedCount }} Resolved / हल हुई
                                </div>

                                <div class="space-y-4 mt-6">
                                    <div v-for="stat in categoryStats" :key="stat.name">
                                        <div class="flex justify-between text-sm mb-1.5">
                                            <span class="text-gray-600">{{ stat.name }}</span>
                                            <span class="font-semibold">{{ stat.pct }}%</span>
                                        </div>
                                        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div class="h-full bg-green-700 rounded-full transition-all duration-500"
                                                :style="`width: ${stat.pct}%`"></div>
                                        </div>
                                    </div>
                                    <p v-if="statsLoading" class="text-xs text-gray-400 text-center py-2">
                                        Loading stats...
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- COMPLAINT FORM -->
                    <div ref="formSection" class="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">

                        <div class="flex justify-between items-center mb-8">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-900">
                                    Register Complaint / शिकायत दर्ज करें
                                </h2>
                                <p class="text-gray-500 mt-1 text-sm">Fill all required details carefully.</p>
                            </div>
                            <div class="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Secure Submission
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input v-model="form.full_name" type="text" placeholder="Full Name / पूरा नाम"
                                class="input" />
                            <input v-model="form.phone" type="text" placeholder="Mobile Number / मोबाइल नंबर"
                                class="input" />
                            <input v-model="form.village" type="text" placeholder="Village / गाँव" class="input" />
                            <input v-model="form.gram_panchayat" type="text"
                                placeholder="Gram Panchayat / ग्राम पंचायत" class="input" />

                            <select v-model="form.category" class="input">
                                <option disabled value="">Select Category / श्रेणी चुनें</option>
                                <option>Road Issue</option>
                                <option>Electricity</option>
                                <option>Water Supply</option>
                                <option>Corruption</option>
                                <option>School Issue</option>
                            </select>

                            <select v-model="form.priority" class="input">
                                <option disabled value="">Priority / प्राथमिकता</option>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>

                        <textarea v-model="form.description" rows="5"
                            placeholder="Describe your issue in detail... / अपनी समस्या विस्तार से लिखें..."
                            class="input mt-5 w-full py-4 resize-none"></textarea>

                        <div
                            class="mt-5 border-2 border-dashed border-green-200 rounded-3xl p-8 text-center bg-green-50">
                            <div class="text-3xl mb-2">📷</div>
                            <h3 class="text-base font-semibold text-gray-800">
                                Upload Proof / प्रमाण अपलोड करें
                            </h3>
                            <p class="text-gray-500 text-sm mt-1">
                                Upload photos, videos or documents.
                            </p>
                            <input type="file" class="mt-4" @change="handleFile" />
                        </div>

                        <div class="flex items-center justify-between mt-8">
                            <label class="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                <input type="checkbox" v-model="form.is_anonymous"
                                    class="w-4 h-4 accent-green-700 rounded" />
                                Submit anonymously / गुमनाम रूप से
                            </label>
                            <button @click="savecomplaint()"
                                class="bg-green-700 hover:bg-green-800 active:bg-green-900 text-white px-8 py-3 rounded-2xl font-semibold transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Submit / जमा करें
                            </button>
                        </div>

                    </div>

                </div>

                <!-- RIGHT SIDEBAR -->
                <div class="space-y-6">

                    <!-- RECENT COMPLAINTS -->
                    <div class="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                        <div class="flex items-center justify-between mb-5">
                            <h3 class="text-lg font-bold text-gray-900">Recent Complaints / हाल की शिकायतें</h3>
                        </div>

                        <div v-if="statsLoading" class="space-y-3">
                            <div v-for="i in 3" :key="i"
                                class="bg-gray-100 rounded-2xl p-4 animate-pulse h-16"></div>
                        </div>

                        <div v-else-if="recentComplaints.length === 0"
                            class="text-center py-6 text-gray-400 text-sm">
                            No complaints yet / अभी कोई शिकायत नहीं
                        </div>

                        <div v-else class="space-y-3">
                            <div v-for="c in recentComplaints" :key="c.name"
                                @click="goToDetail(c.name)"
                                class="bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 rounded-2xl p-4 flex justify-between items-center cursor-pointer transition-colors group">
                                <div class="flex-1 min-w-0">
                                    <div class="font-semibold text-gray-800 text-sm truncate group-hover:text-green-800">
                                        {{ c.title || c.category || 'Complaint' }}
                                    </div>
                                    <div class="text-xs text-gray-400 mt-0.5 truncate">
                                        {{ c.full_name }} · {{ c.village || 'Village' }}
                                    </div>
                                </div>
                                <span :class="statusBadge(c.status)"
                                    class="ml-3 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0">
                                    {{ c.status || 'Pending' }}
                                </span>
                            </div>
                        </div>

                        <button @click="goToComplaintData"
                            class="mt-5 w-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold py-2.5 rounded-2xl text-sm transition-colors">
                            View All Complaints / सभी शिकायतें देखें →
                        </button>
                    </div>

                    <!-- HELPLINE -->
                    <div class="bg-green-800 text-white rounded-3xl p-6">
                        <div class="uppercase text-xs font-bold tracking-wider opacity-70 mb-1">
                            Emergency Helpline / आपातकालीन
                        </div>
                        <h2 class="text-4xl font-bold mt-2">1800-000-2026</h2>
                        <p class="text-green-200 text-sm mt-3">
                            Contact emergency support for urgent Panchayat issues.
                        </p>
                        <div class="flex h-1 mt-5 rounded-full overflow-hidden">
                            <div class="flex-1 bg-orange-400"></div>
                            <div class="flex-1 bg-white"></div>
                            <div class="flex-1 bg-green-400"></div>
                        </div>
                        <p class="text-green-300 text-xs mt-3 text-center">
                            ★ बिहार पंचायत — ग्राम सेवा केंद्र
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const formSection = ref(null)

const form = reactive({
    full_name: "",
    phone: "",
    village: "",
    gram_panchayat: "",
    category: "",
    priority: "",
    description: "",
    file: null,
    image_proof: null,
    is_anonymous: false,
    resolved_on: null,
    created_on: null,
})

// ── Dynamic stats ──────────────────────────────────────────
const allComplaints = ref([])
const statsLoading = ref(true)

const totalCount = computed(() => allComplaints.value.length)

const resolvedCount = computed(() =>
    allComplaints.value.filter(c => c.status === 'Resolved').length
)

const recentComplaints = computed(() => allComplaints.value.slice(0, 4))

const categoryStats = computed(() => {
    const cats = ['Road Issue', 'Electricity', 'Water Supply']
    const total = totalCount.value || 1
    return cats.map(cat => ({
        name: cat,
        pct: Math.round(
            (allComplaints.value.filter(c => c.category === cat).length / total) * 100
        )
    }))
})

async function fetchStats() {
    try {
        const response = await fetch("/api/method/bpanchayat.controllers.api.get_complaints")
        const data = await response.json()
        allComplaints.value = data.message || []
    } finally {
        statsLoading.value = false
    }
}

onMounted(() => {
    fetchStats()
})

// ── Navigation ─────────────────────────────────────────────
function scrollToForm() {
    formSection.value?.scrollIntoView({ behavior: 'smooth' })
}

function goToComplaintData() {
    router.push({ name: 'ComplaintData' })
}

function goToDetail(name) {
    router.push({ name: 'ComplaintDetail', params: { id: name } })
}

// ── Form logic (unchanged) ─────────────────────────────────
const handleFile = (e) => {
    form.file = e.target.files[0]
}

async function matching_data() {
    try {
        const response = await fetch("/api/method/bpanchayat.controllers.api.get_villagers_profile")
        const data = await response.json()
        console.log("matching data:", data)
    } catch (error) {
        console.error("Error fetching matching data:", error)
    }
}
matching_data()

async function savecomplaint() {
    console.log("save complaint called")
    try {
        const response = await fetch(
            "/api/method/bpanchayat.controllers.api.create_complaint",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: JSON.stringify(form) })
            }
        )
        const data = await response.json()
        if (response.ok) {
            alert("Complaint submitted successfully! / शिकायत सफलतापूर्वक दर्ज हुई!")
            fetchStats()
        } else {
            alert("Failed to submit complaint. / शिकायत दर्ज नहीं हुई।")
        }
    } catch (error) {
        console.error(error)
    }
}

// ── Helpers ────────────────────────────────────────────────
function statusBadge(status) {
    if (status === 'Resolved') return 'bg-green-100 text-green-700'
    if (status === 'In Progress') return 'bg-blue-100 text-blue-700'
    return 'bg-yellow-100 text-yellow-700'
}
</script>

<style scoped>
.input {
    @apply h-14 rounded-2xl border-2 border-gray-200 px-4 outline-none focus:border-green-500 focus:ring-0 transition-colors text-gray-800;
}
</style>
