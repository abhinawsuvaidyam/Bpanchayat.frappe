<template>
	<div>
		<Navbar v-if="!route.meta.isLoginPage" />
		<router-view />
	</div>
</template>


<script setup>
import Navbar from './views/navbar.vue';
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const $auth = inject('$auth');
const route = useRoute();
</script>
