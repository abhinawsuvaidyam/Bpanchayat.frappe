<template>
    <div class="min-h-screen bg-amber-50">
        <div class="max-w-4xl mx-auto px-4 py-8">

            <!-- BREADCRUMB / BACK -->
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-2 text-sm text-gray-500">
                    <button @click="goToComplaint"
                        class="flex items-center gap-1 text-green-700 font-semibold hover:text-green-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Complaint Portal
                    </button>
                    <span class="text-gray-300">/</span>
                    <span class="text-gray-700 font-medium">All Complaints</span>
                </div>
                <span class="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    शिकायत सूची
                </span>
            </div>

            <!-- TITLE -->
            <div class="mb-5">
                <h2 class="text-2xl font-bold text-green-900">Complaint List / शिकायत सूची</h2>
                <p class="text-gray-500 text-sm mt-0.5">
                    {{ complaints.length }} complaint{{ complaints.length !== 1 ? 's' : '' }} registered •
                    Click any to view details
                </p>
            </div>

            <!-- LOADING -->
            <div v-if="loading" class="flex flex-col items-center justify-center py-20 text-gray-400">
                <svg class="w-10 h-10 animate-spin mb-3 text-green-600" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <p class="text-sm">Loading complaints... / शिकायतें लोड हो रही हैं...</p>
            </div>

            <!-- EMPTY STATE -->
            <div v-else-if="complaints.length === 0"
                class="bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center">
                <div class="text-5xl mb-4">📋</div>
                <p class="text-gray-500 font-medium">No complaints found / कोई शिकायत नहीं मिली</p>
                <p class="text-gray-400 text-sm mt-1">अभी तक कोई शिकायत दर्ज नहीं हुई है।</p>
                <button @click="goToComplaint"
                    class="mt-5 bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors">
                    File a Complaint / शिकायत दर्ज करें
                </button>
            </div>

            <!-- COMPLAINT LIST -->
            <div v-else class="space-y-3">
                <div v-for="complaint in complaints" :key="complaint.name" @click="openComplaint(complaint.name)"
                    class="bg-white rounded-xl border border-gray-200 shadow-sm px-5 py-4 cursor-pointer hover:shadow-md hover:border-green-400 transition-all group">
                    <div class="flex items-center gap-4">

                        <!-- CATEGORY ICON -->
                        <div
                            class="w-11 h-11 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-xl shrink-0">
                            {{ categoryIcon(complaint.category) }}
                        </div>

                        <!-- MAIN INFO -->
                        <div class="flex-1 min-w-0">
                            <h3
                                class="font-bold text-gray-900 text-base truncate group-hover:text-green-800 transition-colors">
                                {{ complaint.title || '(No Title)' }}
                            </h3>
                            <p class="text-sm text-gray-500 mt-0.5">
                                <span class="font-medium text-gray-700">{{ complaint.full_name }}</span>
                                <span v-if="complaint.village" class="text-gray-400"> · {{ complaint.village }}</span>
                            </p>
                        </div>

                        <!-- BADGES + ARROW -->
                        <div class="flex items-center gap-2 shrink-0">
                            <span v-if="complaint.priority" :class="priorityClass(complaint.priority)"
                                class="text-xs font-semibold px-2.5 py-1 rounded-full hidden sm:inline-flex">
                                {{ complaint.priority }}
                            </span>
                            <span v-if="complaint.category"
                                class="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 hidden md:inline-flex">
                                {{ complaint.category }}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 text-gray-300 group-hover:text-green-600 transition-colors" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

            <!-- BOTTOM BACK BUTTON -->
            <div v-if="complaints.length > 0" class="mt-8 text-center">
                <button @click="goToComplaint"
                    class="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition-colors text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Complaint Portal / शिकायत पोर्टल पर वापस जाएं
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const complaints = ref([]);
const loading = ref(true);

async function complaint_data() {
    const response = await fetch("/api/method/bpanchayat.controllers.api.get_complaints");
    const data = await response.json();
    complaints.value = data.message || [];
    loading.value = false;
}

onMounted(() => {
    complaint_data();
});

function openComplaint(name) {
    router.push({ name: 'ComplaintDetail', params: { id: name } });
}

function goToComplaint() {
    router.push({ name: 'Complaint' });
}

function categoryIcon(category) {
    const icons = {
        'Road Issue': '🛤️',
        'Electricity': '⚡',
        'Water Supply': '💧',
        'Corruption': '⚖️',
        'School Issue': '🏫',
    };
    return icons[category] || '📋';
}

function priorityClass(priority) {
    if (priority === 'High') return 'bg-red-100 text-red-700';
    if (priority === 'Medium') return 'bg-amber-100 text-amber-700';
    return 'bg-green-100 text-green-700';
}
</script>
