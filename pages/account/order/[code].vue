<template>
  <div>
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">
            <div class="d-flex justify-content-between">
              <div class="fst-normal fw-bold">Thông tin vé</div>
              <div>
                <span class="badge bg-primary">Chờ xác nhận</span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <img
                  src="https://alphacinema.me/storage/movie_images/LyfJghF3fgpYG5aNNK2ndwcOmfPSgVPAMKjtPNG2.png"
                  alt="phim hay"
                />
              </div>
              <div class="col-lg-8">
                <div>
                  <div class="row">
                    <div class="col-lg-12">
                      <h1 class="text-primary">Nghi Lễ Trục Quỷ</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <a-card title="Card title" :bordered="false" style="width: 300px">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const code = route.params.code;

onMounted(() => {
  console.log(code);
});
</script>

<style lang="scss" scoped></style>
