<template>
  <section class="search-ticket-section padding-top pt-lg-0">
    <div class="container">
      <div class="search-tab">
        <div class="row align-items-center mb--20">
          <div class="col-lg-6 mb-20">
            <div class="search-ticket-header">
              <h6 class="category">search tickets</h6>
              <h3 class="title">find your tickets now</h3>
            </div>
          </div>
          <div class="col-lg-6 mb-20">
            <ul class="tab-menu ticket-tab-menu">
              <li class="active">
                <div class="tab-thumb">
                  <img src="/theme/img/ticket/movie.png" alt="ticket" />
                </div>
                <span>movie</span>
              </li>
              <li>
                <div class="tab-thumb">
                  <img src="/theme/img/ticket/event.png" alt="ticket" />
                </div>
                <span>events</span>
              </li>
              <li>
                <div class="tab-thumb">
                  <img src="/theme/img/ticket/sport.png" alt="ticket" />
                </div>
                <span>sports</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-area">
          <!-- movie tab -->
          <div class="tab-item active">
            <form class="ticket-search-form">
              <div class="form-group large">
                <input type="text" placeholder="Search for Movies" />
                <button type="submit"><i class="fas fa-search"></i></button>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/city.png" alt="ticket" />
                </div>
                <span class="type">city</span>
                <select class="select-bar">
                  <option value="london">New York</option>
                  <option value="dhaka">California</option>
                  <option value="rosario">Texas</option>
                  <option value="madrid">Florida</option>
                  <option value="koltaka">Nevada</option>
                  <option value="rome">Oregon</option>
                  <option value="khoksa">Ohio</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/date.png" alt="ticket" />
                </div>
                <span class="type">date</span>
                <select class="select-bar">
                  <option value="11/04/2023">11/04/2023</option>
                  <option value="10/04/2023">10/04/2023</option>
                  <option value="09/04/2023">09/04/2023</option>
                  <option value="08/04/2023">08/04/2023</option>
                  <option value="07/04/2023">07/04/2023</option>
                  <option value="06/04/2023">06/04/2023</option>
                  <option value="05/04/2023">05/04/2023</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/cinema.png" alt="ticket" />
                </div>
                <span class="type">movie</span>
                <select class="select-bar">
                  <option value="Avatar">Avatar</option>
                  <option value="Inception">Inception</option>
                  <option value="Parasite">Parasite</option>
                  <option value="Joker">Joker</option>
                  <option value="Searching">Searching</option>
                  <option value="Coco">Coco</option>
                  <option value="Lion">Lion</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <button type="submit" class="filter-btn">
                    <i class="far fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <!-- event tab -->
          <div class="tab-item">
            <form class="ticket-search-form">
              <div class="form-group large">
                <input type="text" placeholder="Search for Events" />
                <button type="submit"><i class="fas fa-search"></i></button>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/city.png" alt="ticket" />
                </div>
                <span class="type">city</span>
                <select class="select-bar">
                  <option value="london">New York</option>
                  <option value="dhaka">California</option>
                  <option value="rosario">Texas</option>
                  <option value="madrid">Florida</option>
                  <option value="koltaka">Nevada</option>
                  <option value="rome">Oregon</option>
                  <option value="khoksa">Ohio</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/date.png" alt="ticket" />
                </div>
                <span class="type">date</span>
                <select class="select-bar">
                  <option value="11/04/2023">11/04/2023</option>
                  <option value="10/04/2023">10/04/2023</option>
                  <option value="09/04/2023">09/04/2023</option>
                  <option value="08/04/2023">08/04/2023</option>
                  <option value="07/04/2023">07/04/2023</option>
                  <option value="06/04/2023">06/04/2023</option>
                  <option value="05/04/2023">05/04/2023</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/event-2.png" alt="ticket" />
                </div>
                <span class="type">event</span>
                <select class="select-bar">
                  <option value="Design">Design</option>
                  <option value="Development">Development</option>
                  <option value="Software">Software</option>
                  <option value="Digital">Digital</option>
                  <option value="Festival">Festival</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Seo">Seo</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <button type="submit" class="filter-btn">
                    <i class="far fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <!-- sports tab -->
          <div class="tab-item">
            <form class="ticket-search-form">
              <div class="form-group large">
                <input type="text" placeholder="Search fo Sports" />
                <button type="submit"><i class="fas fa-search"></i></button>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/city.png" alt="ticket" />
                </div>
                <span class="type">city</span>
                <select class="select-bar">
                  <option value="london">New York</option>
                  <option value="dhaka">California</option>
                  <option value="rosario">Texas</option>
                  <option value="madrid">Florida</option>
                  <option value="koltaka">Nevada</option>
                  <option value="rome">Oregon</option>
                  <option value="khoksa">Ohio</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/date.png" alt="ticket" />
                </div>
                <span class="type">date</span>
                <select class="select-bar">
                  <option value="11/04/2023">11/04/2023</option>
                  <option value="10/04/2023">10/04/2023</option>
                  <option value="09/04/2023">09/04/2023</option>
                  <option value="08/04/2023">08/04/2023</option>
                  <option value="07/04/2023">07/04/2023</option>
                  <option value="06/04/2023">06/04/2023</option>
                  <option value="05/04/2023">05/04/2023</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <img src="/theme/img/ticket/sport-2.png" alt="ticket" />
                </div>
                <span class="type">sport</span>
                <select class="select-bar">
                  <option value="Cricket">Cricket</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Baseball">Baseball</option>
                  <option value="Golf">Golf</option>
                  <option value="Running">Running</option>
                  <option value="Badminton">Badminton</option>
                </select>
              </div>
              <div class="form-group">
                <div class="thumb">
                  <button type="submit" class="filter-btn">
                    <i class="far fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
