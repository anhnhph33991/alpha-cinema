<template>
  <div class="movie-section padding-top bg-two">
    <section
      class="details-banner"
      style="background: url('/theme/img/banner/banner-movie-details.jpg')"
    >
      <div class="container">
        <div class="details-banner-wrapper">
          <div class="details-banner-thumb">
            <img src="/theme/img/movie/movie-list-5.jpg" alt="movie" />

            <a
              href="https://www.youtube.com/watch?v=uyNh0RPiLyI"
              class="video-button video-popup"
            >
              <i class="fal fa-play"></i>
            </a>
          </div>
          <div class="details-banner-content offset-lg-4">
            <h3 class="title">
              {{ movie.name }}
            </h3>
            <div class="tags">
              <a href="movie-details-2.html#">English</a>
              <a href="movie-details-2.html#">France</a>
              <a href="movie-details-2.html#">Italy</a>
              <a href="movie-details-2.html#">Germany</a>
            </div>
            <a href="movie-details-2.html#" class="button">horror</a>
            <div class="social-and-duration">
              <div class="duration-area">
                <div class="item">
                  <i class="fal fa-calendar-alt"></i><span>12 Feb, 2023</span>
                </div>
                <div class="item">
                  <i class="fal fa-clock"></i><span>2h 20min</span>
                </div>
              </div>
              <ul class="social-share">
                <li>
                  <a href="movie-details-2.html#"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="movie-details-2.html#"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="movie-details-2.html#"
                    ><i class="fab fa-pinterest-p"></i
                  ></a>
                </li>
                <li>
                  <a href="movie-details-2.html#"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </li>
                <li>
                  <a href="movie-details-2.html#"
                    ><i class="fab fa-google-plus-g"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ==========Banner-Section========== -->

    <!-- ==========Book-Section========== -->
    <section class="book-section">
      <div class="container">
        <div class="book-wrapper offset-lg-4">
          <div class="left-side">
            <div class="item">
              <div class="item-header">
                <div class="thumb">
                  <i class="fal fa-shopping-cart"></i>
                </div>
                <div class="counter-area">
                  <span class="counter-item odometer" data-odometer-final="92"
                    >0</span
                  >
                  <span>k+</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header">
                <div class="thumb">
                  <i class="fal fa-heart"></i>
                </div>
                <div class="counter-area">
                  <span class="counter-item odometer" data-odometer-final="80"
                    >0</span
                  >
                  <span>k+</span>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header">
                <h5 class="title">5.0</h5>
                <div class="rated">
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-header">
                <div class="rated rate-it">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h5 class="title">0.0</h5>
              </div>
            </div>
          </div>
          <NuxtLink :to="{ name: 'showtimes' }" class="custom-button">
            book tickets
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- ==========Book-Section========== -->

    <div class="ticket-plan-section padding-top">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 mb-5 mb-lg-0">
            <ul class="seat-plan-wrapper">
              <li v-for="(item, date) in showtime" :key="date">
                <div class="movie-name">
                  <div class="icons">
                    <i class="far fa-heart"></i>
                    <i class="fas fa-heart"></i>
                  </div>
                  <a href="#" class="name">
                    {{ date }}
                  </a>
                </div>
                <div class="movie-schedule">
                  <div class="item" v-for="(show, index) in item" :key="index">
                    <NuxtLink
                      :to="{
                        name: 'showtimes-slug',
                        params: { slug: show.slug },
                      }"
                    >
                      {{ formatTime(show.start_time) }}
                    </NuxtLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- ==========Movie-Section========== -->
    <section class="movie-details-section padding-top padding-bottom">
      <div class="container">
        <div class="row justify-content-center flex-wrap-reverse mb--50">
          <div class="col-lg-9 mb-50">
            <div class="movie-details">
              <h3 class="title">photos</h3>
              <div class="details-photos owl-carousel">
                <div class="thumb">
                  <a href="/theme/img/movie/movie-1.jpg" class="img-pop">
                    <img src="/theme/img/movie/movie-1.jpg" alt="movie" />
                  </a>
                </div>
                <div class="thumb">
                  <a href="/theme/img/movie/movie-2.jpg" class="img-pop">
                    <img src="/theme/img/movie/movie-2.jpg" alt="movie" />
                  </a>
                </div>
                <div class="thumb">
                  <a href="/theme/img/movie/movie-3.jpg" class="img-pop">
                    <img src="/theme/img/movie/movie-3.jpg" alt="movie" />
                  </a>
                </div>
                <div class="thumb">
                  <a href="/theme/img/movie/movie-1.jpg" class="img-pop">
                    <img src="/theme/img/movie/movie-1.jpg" alt="movie" />
                  </a>
                </div>
                <div class="thumb">
                  <a href="/theme/img/movie/movie-2.jpg" class="img-pop">
                    <img src="/theme/img/movie/movie-2.jpg" alt="movie" />
                  </a>
                </div>
                <div class="thumb">
                  <a href="/theme/img/movie/movie-3.jpg" class="img-pop">
                    <img src="/theme/img/movie/movie-3.jpg" alt="movie" />
                  </a>
                </div>
              </div>
              <div class="tab summery-review">
                <ul class="tab-menu">
                  <li class="active">description</li>
                  <li>review <span>10</span></li>
                </ul>
                <div class="tab-area">
                  <div class="tab-item active">
                    <div class="item">
                      <h5 class="sub-title">
                        There are many variations of passages
                      </h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                      <div class="widget-tags mt-5">
                        <p>Tags :</p>
                        <ul>
                          <li>
                            <a href="movie-details-2.html#">2D</a>
                          </li>
                          <li>
                            <a href="movie-details-2.html#">3D</a>
                          </li>
                          <li>
                            <a href="movie-details-2.html#">MOVIE</a>
                          </li>
                          <li>
                            <a href="movie-details-2.html#">2023</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="item">
                      <div class="header">
                        <h5 class="sub-title">movie cast</h5>
                        <div class="navigation">
                          <div class="cast-prev">
                            <i class="flaticon-double-right-arrows-angles"></i>
                          </div>
                          <div class="cast-next">
                            <i class="flaticon-double-right-arrows-angles"></i>
                          </div>
                        </div>
                      </div>
                      <div class="casting-slider owl-carousel">
                        <div class="cast-item">
                          <div class="cast-thumb">
                            <a href="movie-details-2.html#">
                              <img
                                src="/theme/img/cast/cast-1.jpg"
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div class="cast-content">
                            <h6 class="cast-title">
                              <a href="movie-details-2.html#">Thoma Michels</a>
                            </h6>
                            <span class="cate">actress</span>
                            <p>As Position Name</p>
                          </div>
                        </div>
                        <div class="cast-item">
                          <div class="cast-thumb">
                            <a href="movie-details-2.html#">
                              <img
                                src="/theme/img/cast/cast-2.jpg"
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div class="cast-content">
                            <h6 class="cast-title">
                              <a href="movie-details-2.html#">Wayne Gould</a>
                            </h6>
                            <span class="cate">actor</span>
                            <p>As Position Name</p>
                          </div>
                        </div>
                        <div class="cast-item">
                          <div class="cast-thumb">
                            <a href="movie-details-2.html#">
                              <img
                                src="/theme/img/cast/cast-3.jpg"
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div class="cast-content">
                            <h6 class="cast-title">
                              <a href="movie-details-2.html#"
                                >Theodore Trotman</a
                              >
                            </h6>
                            <span class="cate">actress</span>
                            <p>As Position Name</p>
                          </div>
                        </div>
                        <div class="cast-item">
                          <div class="cast-thumb">
                            <a href="movie-details-2.html#">
                              <img
                                src="/theme/img/cast/cast-4.jpg"
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div class="cast-content">
                            <h6 class="cast-title">
                              <a href="movie-details-2.html#">Julie Martinez</a>
                            </h6>
                            <span class="cate">actor</span>
                            <p>As Position Name</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="header">
                        <h5 class="sub-title">movie crew</h5>
                        <div class="navigation">
                          <div class="cast-prev-2">
                            <i class="flaticon-double-right-arrows-angles"></i>
                          </div>
                          <div class="cast-next-2">
                            <i class="flaticon-double-right-arrows-angles"></i>
                          </div>
                        </div>
                      </div>
                      <div class="casting-slider-two owl-carousel">
                        <div class="cast-item">
                          <div class="cast-thumb">
                            <a href="movie-details-2.html#">
                              <img
                                src="/theme/img/cast/cast-5.jpg"
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div class="cast-content">
                            <h6 class="cast-title">
                              <a href="movie-details-2.html#"
                                >Jessica Hatcher</a
                              >
                            </h6>
                            <span class="cate">actor</span>
                          </div>
                        </div>
                        <div class="cast-item">
                          <div class="cast-thumb">
                            <a href="movie-details-2.html#">
                              <img
                                src="/theme/img/cast/cast-6.jpg"
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div class="cast-content">
                            <h6 class="cast-title">
                              <a href="movie-details-2.html#">George Reyer</a>
                            </h6>
                            <span class="cate">Director</span>
                          </div>
                        </div>
                        <div class="cast-item">
                          <div class="cast-thumb">
                            <a href="movie-details-2.html#">
                              <img
                                src="/theme/img/cast/cast-7.jpg"
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div class="cast-content">
                            <h6 class="cast-title">
                              <a href="movie-details-2.html#"
                                >Jonathan Douglas</a
                              >
                            </h6>
                            <span class="cate">producer</span>
                          </div>
                        </div>
                        <div class="cast-item">
                          <div class="cast-thumb">
                            <a href="movie-details-2.html#">
                              <img
                                src="/theme/img/cast/cast-8.jpg"
                                alt="cast"
                              />
                            </a>
                          </div>
                          <div class="cast-content">
                            <h6 class="cast-title">
                              <a href="movie-details-2.html#">Virginia Ellis</a>
                            </h6>
                            <span class="cate">producer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-item">
                    <div class="movie-review-item">
                      <div class="author">
                        <div class="thumb">
                          <a href="movie-details-2.html#">
                            <img src="/theme/img/cast/cast-2.jpg" alt="cast" />
                          </a>
                        </div>
                      </div>
                      <div class="movie-review-content">
                        <div class="movie-review-info">
                          <h6 class="subtitle">
                            <a href="movie-details-2.html#"
                              >Thomas E Criswell</a
                            >
                          </h6>
                          <span class="reply-date"
                            ><i class="fal fa-clock"></i> 1 hour ago
                          </span>
                          <div class="review">
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                          </div>
                        </div>

                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>

                        <div class="review-meta">
                          <a href="movie-details-2.html#">
                            <i class="fal fa-thumbs-up"></i><span>10</span>
                          </a>
                          <a href="movie-details-2.html#" class="dislike">
                            <i class="fal fa-thumbs-down"></i><span>02</span>
                          </a>
                          <a href="movie-details-2.html#">
                            <i class="fal fa-flag"></i>
                            <span>Report Review</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="movie-review-item">
                      <div class="author">
                        <div class="thumb">
                          <a href="movie-details-2.html#">
                            <img src="/theme/img/cast/cast-1.jpg" alt="cast" />
                          </a>
                        </div>
                      </div>
                      <div class="movie-review-content">
                        <div class="movie-review-info">
                          <h6 class="subtitle">
                            <a href="movie-details-2.html#"
                              >Thomas E Criswell</a
                            >
                          </h6>
                          <span class="reply-date"
                            ><i class="fal fa-clock"></i> 1 hour ago
                          </span>
                          <div class="review">
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                          </div>
                        </div>

                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>

                        <div class="review-meta">
                          <a href="movie-details-2.html#">
                            <i class="fal fa-thumbs-up"></i><span>10</span>
                          </a>
                          <a href="movie-details-2.html#" class="dislike">
                            <i class="fal fa-thumbs-down"></i><span>02</span>
                          </a>
                          <a href="movie-details-2.html#">
                            <i class="fal fa-flag"></i>
                            <span>Report Review</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="movie-review-item">
                      <div class="author">
                        <div class="thumb">
                          <a href="movie-details-2.html#">
                            <img src="/theme/img/cast/cast-2.jpg" alt="cast" />
                          </a>
                        </div>
                      </div>
                      <div class="movie-review-content">
                        <div class="movie-review-info">
                          <h6 class="subtitle">
                            <a href="movie-details-2.html#"
                              >Thomas E Criswell</a
                            >
                          </h6>
                          <span class="reply-date"
                            ><i class="fal fa-clock"></i> 1 hour ago
                          </span>
                          <div class="review">
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                          </div>
                        </div>

                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>

                        <div class="review-meta">
                          <a href="movie-details-2.html#">
                            <i class="fal fa-thumbs-up"></i><span>10</span>
                          </a>
                          <a href="movie-details-2.html#" class="dislike">
                            <i class="fal fa-thumbs-down"></i><span>02</span>
                          </a>
                          <a href="movie-details-2.html#">
                            <i class="fal fa-flag"></i>
                            <span>Report Review</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="movie-review-item">
                      <div class="author">
                        <div class="thumb">
                          <a href="movie-details-2.html#">
                            <img src="/theme/img/cast/cast-3.jpg" alt="cast" />
                          </a>
                        </div>
                      </div>
                      <div class="movie-review-content">
                        <div class="movie-review-info">
                          <h6 class="subtitle">
                            <a href="movie-details-2.html#"
                              >Thomas E Criswell</a
                            >
                          </h6>
                          <span class="reply-date"
                            ><i class="fal fa-clock"></i> 1 hour ago
                          </span>
                          <div class="review">
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                            <i class="fal fa-star"></i>
                          </div>
                        </div>

                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>

                        <div class="review-meta">
                          <a href="movie-details-2.html#">
                            <i class="fal fa-thumbs-up"></i><span>10</span>
                          </a>
                          <a href="movie-details-2.html#" class="dislike">
                            <i class="fal fa-thumbs-down"></i><span>02</span>
                          </a>
                          <a href="movie-details-2.html#">
                            <i class="fal fa-flag"></i>
                            <span>Report Review</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="load-more text-center">
                      <a
                        href="movie-details-2.html#"
                        class="custom-button transparent"
                        >load more</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-10 col-md-6 mb-50">
            <div class="widget-1 widget-offer">
              <h3 class="title">TODAY OFFER</h3>
              <div class="offer-body">
                <div class="offer-item">
                  <div class="thumb">
                    <img src="/theme/img/sidebar/offer-1.png" alt="sidebar" />
                  </div>
                  <div class="content">
                    <h6>
                      <a href="movie-details-2.html#"
                        >Brand Card Cashback Offer</a
                      >
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                  </div>
                </div>
                <div class="offer-item">
                  <div class="thumb">
                    <img src="/theme/img/sidebar/offer-2.png" alt="sidebar" />
                  </div>
                  <div class="content">
                    <h6>
                      <a href="movie-details-2.html#">Online Payment Offer</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                  </div>
                </div>
                <div class="offer-item">
                  <div class="thumb">
                    <img src="/theme/img/sidebar/offer-3.png" alt="sidebar" />
                  </div>
                  <div class="content">
                    <h6>
                      <a href="movie-details-2.html#">Bank Payment Cashback</a>
                    </h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget-1 widget-banner">
              <div class="widget-1-body">
                <a href="movie-details-2.html#">
                  <img
                    src="/theme/img/sidebar/banner/banner-1.jpg"
                    alt="banner"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
  movie: {
    required: true,
  },
  showtime: {
    required: true,
  },
});

const formatTime = (time) => {
  return time.slice(0, 5);
};

onMounted(() => {
  console.log(props.slug);
  console.log(props.movie);
  console.log(props.showtime);
});
</script>

<style scoped>
a {
  color: white;
}
</style>
