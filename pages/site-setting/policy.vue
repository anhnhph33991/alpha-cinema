<template>
    <div class="policy-wrapper py-5">
        <div class="container">
            <div class="row gx-5">
                <!-- Nội dung chính sách -->
                <div class="col-lg-8">
                    <div class="content-card shadow p-5 rounded-4 bg-white">
                        <h1 class="fw-bold mb-4 text-primary display-5">Chính Sách Bảo Mật</h1>
                        <div class="text-content fs-5">
                            <p>
                                Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn. Khi bạn sử dụng dịch vụ của chúng
                                tôi, bạn đồng ý với các điều khoản về bảo mật dưới đây.
                            </p>
                            <h2>1. Thu Thập Thông Tin</h2>
                            <p>
                                Chúng tôi thu thập thông tin cá nhân như họ tên, email, số điện thoại khi bạn đăng ký
                                hoặc sử dụng các tính năng tương tác.
                            </p>
                            <h2>2. Mục Đích Sử Dụng</h2>
                            <p>
                                Thông tin thu thập được sử dụng để cải thiện chất lượng dịch vụ, hỗ trợ khách hàng và
                                gửi thông báo quan trọng.
                            </p>
                            <h2>3. Bảo Mật Thông Tin</h2>
                            <p>
                                Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức để bảo vệ thông tin cá nhân khỏi
                                truy cập trái phép, mất mát hoặc phá hoại.
                            </p>
                            <h2>4. Chia Sẻ Dữ Liệu</h2>
                            <p>
                                Chúng tôi không chia sẻ thông tin cá nhân của bạn với bên thứ ba, trừ khi được yêu cầu
                                bởi pháp luật.
                            </p>
                            <p>
                                Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email:
                                support@alphacinema.vn
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Danh sách tin tức -->
                <div class="col-lg-4 mt-5 mt-lg-0">
                    <h2 class="fw-bold mb-4 text-dark">Tin tức nổi bật</h2>
                    <div class="news-item mb-4 p-3 rounded-3 bg-light shadow-sm d-flex flex-column align-items-start"
                        v-for="(news, index) in newsList" :key="index">
                        <img :src="news.image" class="img-fluid rounded-3 mb-3 news-thumb" :alt="news.title" />
                        <h5 class="fw-semibold mb-0">{{ news.title }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const newsList = [
    {
        title: "Bom tấn mùa hè - Fast & Furious trở lại",
        image: "/images/lost-kingdom.jpg",
    },
    {
        title: "Review 'Dune 2' – Mãn nhãn và sâu sắc",
        image: "/images/frozen3.jpg",
    },
    {
        title: "Bí mật hậu trường: Phim Việt Nam 'Trùm cuối'",
        image: "/images/insideout2.jpg",
    },
];
</script>

<style scoped>
.policy-wrapper {
    background-color: #f3f4f6;
    min-height: 100vh;
}

.content-card {
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
}

.content-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.text-content h2 {
    font-size: 1.4rem;
    margin-top: 30px;
    margin-bottom: 15px;
    color: #1f2937;
    border-left: 4px solid #3b82f6;
    padding-left: 14px;
}

.text-content p {
    color: #374151;
    margin-bottom: 18px;
    line-height: 1.8;
}

.news-item {
    transition: all 0.3s ease;
}

.news-item:hover {
    background-color: #e0f2fe;
    cursor: pointer;
    transform: translateY(-2px);
}

.news-thumb {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: 0.3s;
}

.news-item:hover .news-thumb {
    transform: scale(1.02);
}
</style>
