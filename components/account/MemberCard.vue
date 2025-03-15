<template>
    <div class="container-wrapper">
      <div class="container al-bg-white p-5">
        <h3 class="text-center mb-4 title">Thông Tin Thẻ Thành Viên</h3>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Số Thẻ</th>
              <th>Hạng Thẻ</th>
              <th>Ngày Kích Hoạt</th>
              <th>Tổng Chi Tiêu</th>
              <th>Điểm Tích Lũy</th>
              <th>Điểm Đã Tiêu</th>
              <th>Điểm Khả Dụng</th>
              <th>Điểm Sắp Hết Hạn</th>
              <th>Ngày Hết Hạn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9002578002851848 (Đang sử dụng)</td>
              <td>Khách hàng STANDARD</td>
              <td>06/03/2025</td>
              <td>00 đ</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>02/01/2025</td>
            </tr>
          </tbody>
        </table>
  
        <!-- Thanh tiến trình -->
        <div class="progress-container text-center mt-4">
          <p>
            Bạn cần tích lũy thêm <strong>3.000.000 đ</strong> để nâng hạng Khách hàng VIP
          </p>
          <div class="progress-bar-wrapper">
            <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
          </div>
  
          <div class="progress-mark-container">
            <div class="progress-mark start-mark">0 đ</div>
            <div class="progress-mark end-mark">3.000.000 đ</div>
          </div>
  
          <p><strong>{{ progressPercentage }}%</strong> đã tích lũy</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const progressPercentage = ref(30); 
  </script>
  
  <style scoped>
  .container-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
  }
  
  .container {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .title{
    color: #043c4d;
  }
  
  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    text-align: center;
  }
  
  th {
    background-color: #043c4d;
    font-weight: bold;
    color: #fff;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  p {
    font-size: 16px;
    font-weight: bold;
    color: #d9534f;
  }
  
  /* CSS cho thanh tiến trình */
  .progress-container {
    width: 100%;
    margin-top: 20px;
  }
  
  .progress-bar-wrapper {
    width: 100%;
    background-color: #f1f1f1;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    position: relative;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #28a745;
    border-radius: 10px;
  }
  
 
  .progress-mark-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 5px;
    width: 100%;
  }
  
  .progress-mark {
    font-size: 12px;
    font-weight: bold;
    color: #000;
    text-align: center;
    width: 50%;
  }
  
  
  .start-mark {
    text-align: left;
    margin-left: 0;
  }
  
  
  .end-mark {
    text-align: right;
    margin-right: 0;
  }
  </style>
  