<template>
    <div class="zing-layout">
        <!-- Cột trái: Tin phụ -->
        <aside class="left-sidebar">
            <h3>Tin điện ảnh</h3>
            <ul class="sub-news">
                <li><a href="#">[Phim Việt] Mai – Điện ảnh và sự chữa lành</a></li>
                <li><a href="#">Cuộc đổ bộ của bom tấn Hollywood hè 2025</a></li>
                <li><a href="#">CGV mở thêm 5 rạp tại miền Trung</a></li>
                <li><a href="#">Trailer Deadpool 3 khiến fan phát cuồng</a></li>
                <li><a href="#">Phim hoạt hình Nhật Bản vẫn giữ vững vị thế</a></li>
                <li><a href="#">Cú lột xác ngoạn mục của điện ảnh Hàn</a></li>
            </ul>
        </aside>

        <!-- Cột giữa: Tin chính -->
        <main class="main-content">
            <div class="news-article">
                <img src="/images/news-banner.jpg" alt="Banner" class="news-banner" />
                <h1 class="news-title">Alpha Cinema ra mắt loạt phim bom tấn mùa hè 2025</h1>
                <p class="news-lead">Cập nhật nhanh chóng các tin tức mới nhất về phim ảnh!</p>

                <div class="article-body">
                    <section>
                        <h2>1. Avengers: New Era – Kỷ nguyên mới của vũ trụ Marvel</h2>
                        <img src="/images/avengers.jpg" class="article-img" />
                        <p>
                            "Avengers: New Era" đánh dấu sự chuyển giao từ thế hệ cũ sang thế hệ siêu anh hùng mới như
                            Ironheart, Kate Bishop, và Spider-Man trẻ tuổi...
                        </p>
                    </section>

                    <section>
                        <h2>2. The Lost Kingdom – Hành trình khám phá Atlantis</h2>
                        <img src="/images/lost-kingdom.jpg" class="article-img" />
                        <p>
                            Với kỹ xảo tuyệt đẹp và cốt truyện hấp dẫn, "The Lost Kingdom" đưa người xem vào thế giới
                            Atlantis thần thoại...
                        </p>
                    </section>

                    <section>
                        <h2>3. Frozen 3 – Elsa trở lại trong hành trình mới</h2>
                        <img src="/images/frozen3.jpg" class="article-img" />
                        <p>
                            Phần ba của Frozen hứa hẹn sẽ mang đến những khoảnh khắc xúc động và âm nhạc tuyệt vời...
                        </p>
                    </section>

                    <section>
                        <h2>4. Inside Out 2 – Cảm xúc trưởng thành</h2>
                        <img src="/images/insideout2.jpg" class="article-img" />
                        <p>
                            Bộ phim hoạt hình đình đám trở lại với phiên bản mới, xoay quanh tuổi dậy thì của Riley cùng
                            những cảm xúc phức tạp hơn...
                        </p>
                    </section>

                    <section>
                        <h2>5. Mission Impossible 8 – Lần cuối của Ethan Hunt?</h2>
                        <img src="/images/mi8.jpg" class="article-img" />
                        <p>
                            Tom Cruise trở lại với những pha hành động nghẹt thở. Đây có thể là phần cuối của chuỗi
                            Mission Impossible huyền thoại...
                        </p>
                    </section>
                </div>
            </div>
        </main>

        <!-- Cột phải: Tin nổi bật -->
        <aside class="right-sidebar">
            <h3>Tin nổi bật</h3>
            <ul class="highlight-list">
                <li><a href="#">Top 10 phim không thể bỏ lỡ hè 2025</a></li>
                <li><a href="#">Oscar 2025: Dự đoán và bất ngờ</a></li>
                <li><a href="#">Gặp gỡ dàn diễn viên của The Marvels</a></li>
                <li><a href="#">Bản đồ các rạp chiếu toàn quốc</a></li>
                <li><a href="#">Phim Việt đại thắng phòng vé</a></li>
                <li><a href="#">Lịch chiếu phim mới cập nhật mỗi ngày</a></li>
            </ul>

            <h3>Video trailer</h3>
            <div class="video-container">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/VyHV0BRtdxo" frameborder="0"
                    allowfullscreen></iframe>
            </div>

            <h3>Được quan tâm</h3>
            <ul class="highlight-list">
                <li><a href="#">Review phim: The Boy and the Heron (Ghibli)</a></li>
                <li><a href="#">Dune 2 – Cuộc chiến sa mạc khốc liệt</a></li>
                <li><a href="#">Marvel công bố Phase 6: Có gì hot?</a></li>
                <li><a href="#">Netflix ra mắt phim Việt đầu tiên</a></li>
            </ul>
        </aside>
    </div>
</template>

<style scoped>
.zing-layout {
    display: flex;
    gap: 30px;
    padding: 40px 20px;
    max-width: 1400px;
    margin: auto;
    font-family: 'Segoe UI', Roboto, sans-serif;
    color: #111827;
}

.left-sidebar,
.right-sidebar {
    flex: 1.2;
    padding: 0 15px;
}

.left-sidebar {
    border-right: 1px solid #e5e7eb;
}

.right-sidebar {
    border-left: 1px solid #e5e7eb;
}

.main-content {
    flex: 2.8;
    padding: 0 10px;
}

.news-article {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 30px;
}

.news-banner {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 16px;
}

.news-title {
    font-size: 2.2rem;
    font-weight: bold;
    margin-top: 20px;
    color: #0f172a;
    border-left: 5px solid #3b82f6;
    padding-left: 15px;
}

.news-lead {
    font-size: 1.2rem;
    color: #6b7280;
    margin: 10px 0 30px;
}

.article-body h2 {
    margin-top: 40px;
    font-size: 1.5rem;
    color: #1f2937;
}

.article-body p {
    text-align: justify;
    margin-top: 10px;
    line-height: 1.8;
}

.article-img {
    width: 100%;
    border-radius: 12px;
    margin: 20px 0;
    transition: transform 0.3s ease;
}

.article-img:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.sub-news,
.highlight-list {
    list-style: none;
    padding: 0;
}

.sub-news li,
.highlight-list li {
    margin-bottom: 12px;
}

.sub-news a,
.highlight-list a {
    color: #1e40af;
    text-decoration: none;
    transition: all 0.2s ease;
}

.sub-news a:hover,
.highlight-list a:hover {
    text-decoration: underline;
    transform: translateX(2px);
}

.right-sidebar h3,
.left-sidebar h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #1f2937;
}

.video-container {
    margin-bottom: 30px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
}

@media (max-width: 992px) {
    .zing-layout {
        flex-direction: column;
        padding: 20px 10px;
    }

    .left-sidebar,
    .right-sidebar {
        border: none;
        padding: 0;
        margin-top: 30px;
    }
}
</style>
