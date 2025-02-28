<template>
  <div class="movie-detail-section">
    <!-- <section
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
    </section> -->

    <div class="w-100 custom-wrapper position-relative wrapper">
      <div class="w-100 h-100 inset-0 position-absolute">
        <img
          alt="CAPTAIN AMERICA: THẾ GIỚI MỚI-T13- 2D"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          class="object-cover"
          sizes="100vw"
          :src="formattedImage"
          style="
            position: absolute;
            height: 100%;
            width: 100%;
            inset: 0px;
            color: transparent;
          "
        />
      </div>
      <div
        class="w-100 h-100 position-absolute z-10 inset-0 bg-primary/60"
      ></div>
      <div
        class="d-none d-xl-block position-absolute w-100 top-0 bottom-0 start-0 end-0 m-auto z-20"
      >
        <div
          class="w-100 mx-auto d-flex justify-content-center align-items-center custom-container"
        >
          <div
            class="position-relative shadow-lg"
            style="height: 333px; min-width: 238px"
          >
            <img
              alt="CAPTAIN AMERICA: THẾ GIỚI MỚI-T13- 2D"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              class="object-cover rounded-xl"
              sizes="238px"
              :src="formattedImage"
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                inset: 0px;
                color: transparent;
              "
            />
          </div>

          <div class="d-flex flex-column" style="font-size: 0.875rem">
            <div class="d-flex align-items-center mt-2 gap-2">
              <h3 class="fw-bold fs-4 text-white">
                {{ movie.name }}
              </h3>
              <div class="rounded-3 p-2 border border-white fw-bold text-white">
                2D
              </div>
            </div>

            <div class="d-flex align-items-center mt-2 gap-3 small">
              <p class="text-white">Danh mục: {{ movie.category }}</p>
              <p class="text-white">-</p>
              <!-- <p class="text-white">Mỹ</p> -->
              <p class="text-white">Thời lượng: {{ movie.duration }} phút</p>
              <p class="text-white">-</p>
              <p class="text-white">Đạo diễn: {{ movie.director }}</p>
            </div>

            <!-- <p class="text-white">Khởi chiếu: 14/02/2025</p> -->
            <p class="text-white">Khởi chiếu: {{ formattedReleaseDate }}</p>

            <div class="text-truncate-multi text-white">
              {{ movie.description }}
            </div>

            <div class="text-danger mt-3">
              Kiểm duyệt: T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi
              trở lên (13+)
            </div>

            <div class="mt-2 d-flex align-items-center gap-4 flex-grow-1">
              <a class="fs-6 text-decoration-underline"> Chi tiết nội dung </a>

              <button
                class="border border-warning rounded-pill py-2 px-4 text-warning bg-transparent btn-hover-scale"
                type="button"
                @click="handleShowTrailer"
              >
                Xem trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a-modal
      :open="openTrailer"
      width="1000px"
      :title="movie.name"
      :footer="null"
      centered
      @cancel="openTrailer = false"
    >
      <iframe
        v-if="embedUrl"
        :src="embedUrl"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </a-modal>

    <div class="w-100">
      <div class="container">
        <!-- <a-tabs
          v-model="activeKey"
          :default-active-key="'1'"
          :style="{ height: '200px' }"
          @tabScroll="callback"
        >
          <a-tab-pane v-for="i in 20" :key="i" :tab="`Tab-${i}`">
            <div class="h-screen">Content of tab {{ i }}</div>
          </a-tab-pane>
        </a-tabs> -->

        <a-tabs
          v-model="activeKey"
          :default-active-key="'1'"
          :style="{ height: '200px' }"
          @tabScroll="callback"
        >
          <a-tab-pane
            v-for="(items, date) in showtime"
            :key="date"
            :tab="formatDate(date)"
          >
            <div class="h-screen">
              <div class="d-flex gap-1">
                <button
                  v-for="(showtime, index) in items"
                  :key="index"
                  class="btn btn-primary"
                  @click="navigateShowTime(showtime)"
                >
                  {{ formatTime(showtime.start_time) }}
                </button>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
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

const activeKey = ref("1");

/**
 * Modal Show Trailer
 */

const openTrailer = ref(false);

const handleShowTrailer = () => {
  openTrailer.value = true;
};

const embedUrl = computed(() => {
  if (!props.movie.trailer_url) return "";
  const videoId =
    props.movie.trailer_url.split("v=")[1] ||
    props.movie.trailer_url.split("youtu.be/")[1];
  return videoId
    ? `https://www.youtube.com/embed/${videoId.split("&")[0]}`
    : "";
});

/** 111 */

const callback = (val) => {
  console.log(val);
};

const formatTime = (time) => {
  return time.slice(0, 5);
};

const formattedReleaseDate = computed(() => {
  if (!props.movie.release_date) return "";
  const [year, month, day] = props.movie.release_date.split("-");
  return `${day}/${month}/${year}`;
});

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const options = { weekday: "short", day: "2-digit", month: "2-digit" };

  // Format dạng: "Chủ Nhật, 16/02"
  const formatted = new Intl.DateTimeFormat("vi-VN", options).format(date);

  // Tách thứ và ngày
  const [weekday, dayMonth] = formatted.split(", ");

  // Chuyển thứ thành CN, T2, T3...
  const shortWeekday = weekday
    .replace("Thứ Hai", "T2")
    .replace("Thứ Ba", "T3")
    .replace("Thứ Tư", "T4")
    .replace("Thứ Năm", "T5")
    .replace("Thứ Sáu", "T6")
    .replace("Thứ Bảy", "T7")
    .replace("Chủ Nhật", "CN");

  return `${dayMonth} - ${shortWeekday}`;
};

const formattedStartTime = (time) => {
  if (!time) return "";
  const [year, month, day] = time.split("-");
  return `${day}/${month}/${year}`;
};

const formattedImage = computed(() => {
  if (!props.movie.img_thumbnail) return "";

  return `https://alphacinema.me/storage/${props.movie.img_thumbnail}`;
});

const navigateShowTime = (showtime) => {
  navigateTo({ name: "showtimes-slug", params: { slug: showtime.slug } });
};

onMounted(() => {
  console.log(props.slug);
  console.log(props.movie);
  console.log(props.showtime);
});
</script>

<style scoped>
.custom-wrapper {
  height: 250px;
}

@media (min-width: 768px) {
  .custom-wrapper {
    height: 300px;
  }
}
@media (min-width: 1280px) {
  .custom-wrapper {
    height: 473px;
  }
}

.wrapper:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: linear-gradient(0deg, #10141b, rgba(16, 20, 27, 0));
}

.custom-container {
  max-width: 56rem;
  height: 473px;
  /* padding-top: 96px;
  padding-bottom: 28px; */
  gap: 40px;
}

.rounded-xl {
  border-radius: 0.75rem;
}

a {
  color: white;
}

.h-250 {
  height: 250px;
}

.inset-0 {
  inset: 0;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.bg-primary\/60 {
  background-color: rgba(16, 20, 27, 0.6);
}

.object-cover {
  object-fit: cover;
}

img,
video {
  max-width: 100%;
  height: auto;
}

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
}

.text-truncate-multi {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* Giới hạn số dòng */
  line-clamp: 4; /* Thuộc tính tiêu chuẩn */
  overflow: hidden;
}

.btn-hover-scale {
  transition: transform 0.2s ease-in-out;
}

.btn-hover-scale:hover {
  transform: scale(1.05);
}

h3 {
  margin-top: 0;
  margin-bottom: 0;
}

.movie-detail-section .ant-tabs-tab-btn {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
