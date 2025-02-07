<template>
  <header class="header-section">
    <div class="container">
      <div class="header-wrapper">
        <div class="logo">
          <a href="#">
            <img src="/theme/img/logo/logo.png" alt="logo" />
          </a>
        </div>
        <ul class="menu">
          <li>
            <a href="##" class="active">Home</a>
            <ul class="submenu">
              <li>
                <a href="#" class="active">
                  <i class="fal fa-long-arrow-alt-right"></i> Home Demo 01</a
                >
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-long-arrow-alt-right"></i> Home Demo 02</a
                >
              </li>
              <li>
                <a href="#">
                  <i class="fal fa-long-arrow-alt-right"></i> Home Demo 03</a
                >
              </li>
            </ul>
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
                  ><i class="fal fa-long-arrow-alt-right"></i>Movie Seat Plan</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Movie Checkout</a
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
                  ><i class="fal fa-long-arrow-alt-right"></i>Event Checkout</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="##">sports</a>
            <ul class="submenu">
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Sports</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Sport Details</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Sport Ticket</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Sport Checkout</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="##">pages</a>
            <ul class="submenu">
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>About Us</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Apps Download</a
                >
              </li>
              <li>
                <a href="#"><i class="fal fa-long-arrow-alt-right"></i>Team</a>
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Pricing</a
                >
              </li>
              <li>
                <a href="#"><i class="fal fa-long-arrow-alt-right"></i>Login</a>
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Register</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Forgot Password</a
                >
              </li>
              <li>
                <a href="#"><i class="fal fa-long-arrow-alt-right"></i>Faq</a>
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Terms &
                  Conditions</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Privacy Policy</a
                >
              </li>
              <li>
                <a href="#"><i class="fal fa-long-arrow-alt-right"></i>404</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="##">blog</a>
            <ul class="submenu">
              <li>
                <a href="#"><i class="fal fa-long-arrow-alt-right"></i>Blog</a>
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Blog 02</a
                >
              </li>
              <li>
                <a href="#"
                  ><i class="fal fa-long-arrow-alt-right"></i>Blog Single</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li class="header-button pr-0">
            <!-- <a href="#">join us</a> -->
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
</template>

<script setup></script>

<style lang="scss" scoped></style>
