<template>
    <div class="contact-page">
        <h1 class="text-center">Liên hệ chúng tôi</h1>

        <div class="contact-info">
            <p class="text-center">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn! Hãy điền thông tin vào form dưới đây để liên hệ với chúng tôi.
            </p>

            <!-- Layout: Ảnh bên trái, Form bên phải -->
            <div class="contact-layout">
                <!-- Ảnh Dọc (Bên trái) -->
                <div class="contact-image">
                    <img src="/images/contact-image.jpg" alt="Contact Image" class="img-fluid" />
                </div>

                <!-- Form Liên hệ (Bên phải) -->
                <div class="contact-form-container">
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">Tên</label>
                            <input type="text" id="name" placeholder="Nhập tên của bạn" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Nhập email của bạn" />
                        </div>
                        <div class="form-group">
                            <label for="message">Lời nhắn</label>
                            <textarea id="message" placeholder="Nhập lời nhắn của bạn" rows="5"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Gửi</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Bản đồ -->
        <div class="map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863931182066!2d105.74468687503175!3d21.038129780613545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455e940879933%3A0xcf10b34e9f1a03df!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1sen!2s!4v1741363003824!5m2!1sen!2s"
                width="100%" height="400"
                style="border: 0; border-radius: 8px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);" allowfullscreen=""
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.contact-page {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
}

h1 {
    font-size: 2.5rem;
    color: #1f2937;
    margin-bottom: 20px;
}

.contact-info p {
    font-size: 1.1rem;
    color: #6b7280;
    margin-bottom: 40px;
}

.contact-layout {
    display: flex;
    gap: 40px;
    justify-content: space-between;
}

.contact-image {
    flex: 1;
    max-width: 300px;
}

.contact-image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.contact-form-container {
    flex: 1;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-size: 1rem;
    color: #111827;
    margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #3b82f6;
    outline: none;
}

.submit-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
    background-color: #3b82f6;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
}

.submit-btn:hover {
    background-color: #2563eb;
    transform: translateY(-3px);
}

.submit-btn:active {
    transform: translateY(1px);
}

.map-container {
    margin-top: 30px;
    border-radius: 8px;
    overflow: hidden;
}

@media (max-width: 768px) {
    .contact-layout {
        flex-direction: column;
        gap: 30px;
    }

    .contact-image,
    .contact-form-container {
        flex: none;
        width: 100%;
    }
}
</style>
