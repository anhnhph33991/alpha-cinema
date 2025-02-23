<template>
  <ClientOnly>
    <header class="header-section">
      <div class="container">
        <div class="header-wrapper">
          <div class="logo">
            <NuxtLink :to="{ name: 'index' }">
              <img src="/theme/img/logo/logo.png" alt="logo" />
            </NuxtLink>
          </div>
          <ul class="menu">
            <li>
              <NuxtLink class="active" :to="{ name: 'index' }">Home</NuxtLink>
            </li>

            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="##">movies</a>
              <ul class="submenu">
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Movie Grid</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Movie List</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Movie Details</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Movie Details
                    02</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Movie Ticket
                    Plan</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Movie Seat
                    Plan</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Movie
                    Checkout</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Movie Food</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="##">events</a>
              <ul class="submenu">
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Events</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Event Details</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Event Speaker</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Event Ticket</a
                  >
                </li>
                <li>
                  <a href="#"
                    ><i class="fal fa-long-arrow-alt-right"></i>Event
                    Checkout</a
                  >
                </li>
              </ul>
            </li>
            <li class="header-button pr-0" v-if="authStore.isLogin">
              {{ authStore.user.name }}
            </li>

            <li class="header-button pr-0" v-else>
              <NuxtLink :to="{ name: 'login' }">join us</NuxtLink>
            </li>
          </ul>
          <div class="header-bar d-lg-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  </ClientOnly>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
</script>
<!-- router-link-active router-link-exact-active -->
