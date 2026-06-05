<template>
    <div class="min-h-screen bg-amber-50">
        <div class="max-w-3xl mx-auto px-4 py-8">

            <!-- BREADCRUMB / BACK -->
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <button @click="goToComplaint"
                    class="text-green-700 font-semibold hover:text-green-900 transition-colors">
                    Complaint Portal
                </button>
                <span class="text-gray-300">/</span>
                <button @click="goBack" class="text-green-700 font-semibold hover:text-green-900 transition-colors">
                    All Complaints
                </button>
                <span class="text-gray-300">/</span>
                <span class="text-gray-700 font-medium truncate max-w-[180px]">Detail</span>
            </div>

            <!-- LOADING -->
            <div v-if="loading" class="flex flex-col items-center justify-center py-24 text-gray-400">
                <svg class="w-10 h-10 animate-spin mb-3 text-green-600" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <p class="text-sm">Loading... / लोड हो रहा है...</p>
            </div>

            <!-- ERROR -->
            <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-xl p-10 text-center">
                <div class="text-5xl mb-4">⚠️</div>
                <p class="text-red-600 font-medium">{{ error }}</p>
                <button @click="goBack"
                    class="mt-4 bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors">
                    ← Back to List
                </button>
            </div>

            <!-- DETAIL CARD -->
            <div v-else-if="complaint">

                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">

                    <!-- CARD HEADER -->
                    <div class="bg-gradient-to-r from-green-800 to-green-700 px-6 py-6">
                        <div class="flex items-start gap-3">
                            <span class="text-3xl mt-1">{{ categoryIcon(complaint.category) }}</span>
                            <div class="flex-1">
                                <h2 class="text-white text-xl font-bold leading-snug">
                                    {{ complaint.title || '(No Title)' }}
                                </h2>
                                <div class="flex flex-wrap items-center gap-2 mt-2">
                                    <span v-if="complaint.priority" :class="priorityClass(complaint.priority)"
                                        class="text-xs font-bold px-2.5 py-1 rounded-full">
                                        {{ complaint.priority }} Priority
                                    </span>
                                    <span v-if="complaint.category"
                                        class="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                                        {{ complaint.category }}
                                    </span>
                                    <span v-if="complaint.status" :class="statusClass(complaint.status)"
                                        class="text-xs font-bold px-2.5 py-1 rounded-full">
                                        {{ complaint.status }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 space-y-6">

                        <!-- COMPLAINANT INFO -->
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-1 h-5 bg-amber-500 rounded"></div>
                                <h3 class="text-green-900 font-bold text-sm uppercase tracking-wide">
                                    Complainant / शिकायतकर्ता
                                </h3>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div class="bg-gray-50 rounded-lg px-4 py-3">
                                    <p class="text-xs text-gray-400 mb-0.5">Name / नाम</p>
                                    <p class="font-semibold text-gray-800">{{ complaint.full_name || '—' }}</p>
                                </div>
                                <div class="bg-gray-50 rounded-lg px-4 py-3">
                                    <p class="text-xs text-gray-400 mb-0.5">Phone / फ़ोन</p>
                                    <p class="font-semibold text-gray-800">{{ complaint.phone || '—' }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- LOCATION INFO -->
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-1 h-5 bg-amber-500 rounded"></div>
                                <h3 class="text-green-900 font-bold text-sm uppercase tracking-wide">
                                    Location / स्थान
                                </h3>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div class="bg-gray-50 rounded-lg px-4 py-3">
                                    <p class="text-xs text-gray-400 mb-0.5">Village / गाँव</p>
                                    <p class="font-semibold text-gray-800">{{ complaint.village || '—' }}</p>
                                </div>
                                <div class="bg-gray-50 rounded-lg px-4 py-3">
                                    <p class="text-xs text-gray-400 mb-0.5">Gram Panchayat / ग्राम पंचायत</p>
                                    <p class="font-semibold text-gray-800">{{ complaint.gram_panchayat || '—' }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- DESCRIPTION -->
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-1 h-5 bg-amber-500 rounded"></div>
                                <h3 class="text-green-900 font-bold text-sm uppercase tracking-wide">
                                    Description / विवरण
                                </h3>
                            </div>
                            <div class="bg-gray-50 rounded-lg px-4 py-4">
                                <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {{ complaint.description || 'No description provided.' }}
                                </p>
                            </div>
                        </div>

                        <!-- IMAGE PROOF -->
                        <div v-if="complaint.image_proof">
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-1 h-5 bg-amber-500 rounded"></div>
                                <h3 class="text-green-900 font-bold text-sm uppercase tracking-wide">
                                    Image Proof / फोटो प्रमाण
                                </h3>
                            </div>
                            <img :src="complaint.image_proof" alt="Proof Image"
                                class="w-full rounded-lg border border-gray-200 object-cover max-h-72" />
                        </div>

                        <!-- FOOTER META -->
                        <div
                            class="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-400">
                            <span>ID: <span class="font-mono text-gray-600">{{ complaint.name }}</span></span>
                            <span v-if="complaint.creation">Filed on {{ formatDate(complaint.creation) }}</span>
                        </div>

                    </div>
                </div>

                <!-- BACK BUTTONS -->
                <div class="mt-6 flex items-center justify-between">
                    <button @click="goBack"
                        class="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold hover:border-green-400 hover:text-green-800 transition-colors text-sm px-4 py-2 rounded-lg shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        All Complaints / सूची पर वापस
                    </button>
                    <button @click="goToComplaint"
                        class="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-sm transition-colors">
                        Complaint Portal / पोर्टल
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const complaint = ref(null);
const loading = ref(true);
const error = ref(null);

async function fetchComplaint() {
    try {
        const response = await fetch(
            `/api/method/bpanchayat.controllers.api.get_complaint?name=${encodeURIComponent(route.params.id)}`
        );
        const data = await response.json();
        if (data.message) {
            complaint.value = data.message;
        } else {
            error.value = 'Complaint not found.';
        }
    } catch (e) {
        error.value = 'Failed to load complaint details.';
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    fetchComplaint();
});

function goBack() {
    router.push({ name: 'ComplaintData' });
}

function goToComplaint() {
    router.push({ name: 'Complaint' });
}

function categoryIcon(category) {
    const icons = {
        'Road Issue': '🛤️', 'Electricity': '⚡',
        'Water Supply': '💧', 'Corruption': '⚖️', 'School Issue': '🏫',
    };
    return icons[category] || '📋';
}

function priorityClass(priority) {
    if (priority === 'High') return 'bg-red-500 text-white';
    if (priority === 'Medium') return 'bg-amber-400 text-white';
    return 'bg-green-500 text-white';
}

function statusClass(status) {
    if (status === 'Resolved') return 'bg-green-100 text-green-800';
    if (status === 'In Progress') return 'bg-blue-100 text-blue-800';
    return 'bg-yellow-100 text-yellow-800';
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'long', year: 'numeric'
    });
}
</script>
