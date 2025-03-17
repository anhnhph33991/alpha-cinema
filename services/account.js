
export async function fetchVoucher() {
    const { $axios } = useNuxtApp();
    try {
        const response = await $axios.get(`/v1/voucher`);
        // console.log("🔍 Toàn bộ response từ API:", response);
        // console.log("response.vouchers;", response.vouchers);

        // Kiểm tra nếu response không chứa data
        if (!response || !response.vouchers) {
            console.error("⚠ Dữ liệu từ API không hợp lệ:", response);
            return [];
        }
        return response.vouchers;
    } catch (error) {
        console.error("Lỗi khi lấy voucher:", error.response ? error.response.data : error);
        return [];
    }
}
export async function fetchRank() {
    const { $axios } = useNuxtApp();
    try {
        const response = await $axios.get(`/v1/getRank`);
        if (!response) {
            console.error("Dữ liệu từ API không hợp lệ:", response);
            return [];
        }
        console.log("response", response);
        return response;

    } catch (error) {

    }
}

export async function fetchPoint() {
    const { $axios } = useNuxtApp();
    try {
        const response = await $axios.get(`/v1/pointhistory`);
        if (!response) {
            console.error("Dữ liệu từ API không hợp lệ:", response);
            return [];
        }
        console.log("response", response);
        return response;

    } catch (error) {

    }
}

