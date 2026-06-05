<template>
    <div class="p-6">

        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-green-700">
                Latest Government Schemes
            </h1>

            <button @click="fetchSchemes" class="bg-green-600 text-white px-4 py-2 rounded">
                Refresh
            </button>
        </div>

        <div v-if="loading" class="text-center py-10">
            Loading schemes...
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <div v-for="scheme in schemes" :key="scheme.id" class="bg-white border rounded-lg shadow p-4">

                <div class="flex justify-between mb-2">
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        {{ scheme.category }}
                    </span>

                    <span class="text-xs text-gray-500">
                        {{ scheme.state }}
                    </span>
                </div>

                <h2 class="font-bold text-lg mb-2">
                    {{ scheme.scheme_name }}
                </h2>

                <p class="text-gray-600 text-sm mb-4">
                    {{ scheme.description }}
                </p>

                <a :href="scheme.scheme_url" target="_blank" class="text-blue-600 font-medium">
                    View Details →
                </a>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const schemes = ref([])
const loading = ref(false)

const fetchSchemes = async () => {
    loading.value = true

    try {

        const response = await fetch(
            "https://www.data.gov.in/apis"
        )

        const data = await response.json()

        schemes.value = data

    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    fetchSchemes()
})
</script>