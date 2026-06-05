import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import authRoutes from './auth';
import Complaint from '../views/complaint.vue'
import villagersprofile from '../views/villegersprofile.vue'
import navbar from '../views/navbar.vue'
import scheme from '../views/scheme.vue'
import panchayat from '../views/panchayat.vue'
import complaintdata from '../views/complaintdata.vue'
import ComplaintDetail from '../views/ComplaintDetail.vue'
import profile from '../views/profile.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...authRoutes,
  {
    path: "/complaint",
    name: "Complaint",
    component: Complaint
  },
  {
    path: "/updateprofile",
    name: "villagersProfile",
    component: villagersprofile
  },
  {
    path: "/complaint_data",
    name: "ComplaintData",
    component: complaintdata
  },
  {
    path: "/complaint_data/:id",
    name: "ComplaintDetail",
    component: ComplaintDetail
  },
  {
    path: "/navbar",
    name: "Navbar",
    component: navbar
  },
  {
    path: "/scheme",
    name: "Scheme",
    component: scheme
  },
  {
    path: "/panchayat",
    name: "Panchayat",
    component: panchayat
  },
  {
    path: "/profile",
    name: "Profile",
    component: profile
  }

];

const router = createRouter({
  history: createWebHistory('/BiharPanchayat'),
  routes,
});

export default router;