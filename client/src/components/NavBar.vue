<template>
    <nav class="bg-gray-800 opacity-50 hover:opacity-100" :class="{'opacity-50': !showNavbar, 'opacity-100': showNavbar || userDropdown}">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button id="showobileMenu" @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              <!-- Icon when menu is closed. -->
              <!--
                Heroicon name: menu

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-show="!mobileMenu">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
                Heroicon name: x

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-show="mobileMenu">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <!-- <div class="flex-shrink-0">
              <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg" alt="Workflow logo">
              <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-logo-on-dark.svg" alt="Workflow logo">
            </div> -->
            <div class="hidden sm:block sm:ml-6">
              <div class="flex">
                <desktop v-for="(route, index) in menuItems" :route="route.name" :key="index" :position="index" :class="{'ml-4': index > 0}">{{route.label}}</desktop>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
            <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out" aria-label="Notifications">
              <!-- Heroicon name: bell -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button ref="showUserDropdown" id="showUserDropdown" @click=toggleUserDropdown class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out" aria-label="User menu" aria-haspopup="true">
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
              </div>
              <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50 absolute" v-show="userDropdown" v-click-outside="{
      exclude: ['showUserDropdown'],
      handler: hideUserDropdown
    } ">
                <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Your Profile</a>
                  <a href="" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Settings</a>
                  <a href="" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      -->
      <div class=" md:hidden" v-show="mobileMenu" v-click-outside="{
      exclude: ['showobileMenu'],
      handler: hideMobileMenu
    } ">
        <div class="px-2 pt-2 pb-3">
          <mobile v-for="(route, index) in menuItems" :route="route.name" :key="index" :position="index" :class="{'mt-1': index > 1}">{{route.label}}</mobile>
          <!-- <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Blog</a> -->
          <!-- <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Projects</a> -->
          <!-- <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</a> -->
        </div>
      </div>
    </nav>
</template>

<script>
import Desktop from "@/components/NavBar/Desktop.vue";
import Mobile from "@/components/NavBar/Mobile.vue";

const menuLabel = {
  Home: "Home",
  Blog_Index: "Blog",
  Projects_Index: "projecten",
  About: "Over"
};

export default {
  components: {
    Desktop,
    Mobile
  },
  data () {
    return {
      showNavbar: false,
      lastScrollPosition: 0,
      userDropdown: false,
      mobileMenu: false,
      menuItems: [],
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll, true);

    this.$router.options.routes.forEach(route => {
      if ('meta' in route && 'navBar' in route.meta) {
          if (route.meta.navBar) {
            this.menuItems.push({
              path: route.path,
              name: route.name,
              label: menuLabel[route.name.replace('.', '_')],
            });
          }
      }
      console.log(route);
    });
  },

  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleUserDropdown () {
        this.userDropdown = !this.userDropdown;
    },
    hideUserDropdown () {
        this.userDropdown = false;
    },
    toggleMobileMenu () {
        this.mobileMenu = !this.mobileMenu;
    },
    hideMobileMenu () {
        this.mobileMenu = false;
    },
    handleScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || this.$parent.$refs.pageContent.scrollTop
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return
      }
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition > 200;
      this.lastScrollPosition = currentScrollPosition
    },
  }
}
</script>