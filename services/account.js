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
    console.error(
      "Lỗi khi lấy voucher:",
      error.response ? error.response.data : error
    );
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
  } catch (error) {}
}

export async function fetchPointHistory() {
  const { $axios } = useNuxtApp();
  try {
    // Gọi API lấy thông tin Rank
    const rankResponse = await $axios.get("/v1/getRank");
    const feedbackPercentage = rankResponse?.rank?.feedback_percentage || 0;

    // Gọi API lấy lịch sử giao dịch
    const ticketResponse = await $axios.get("/v1/ticket-by-user");
    const ticketHistory = ticketResponse.data || [];

    // Xử lý dữ liệu điểm trừ từ ticket
    const pointData = ticketHistory.map((item) => ({
      date: item.created_at || "Không rõ",
      description: `Trừ điểm khi mua vé: ${item.movie?.name || "Không rõ"}`,
      points: `-${Math.abs(item.point_use || 0)}`, // Đảm bảo điểm trừ luôn âm
    }));

    // Xử lý dữ liệu điểm cộng từ ticket
    const feedbackData = ticketHistory.map((item) => ({
      date: item.created_at || "Không rõ",
      description: `Điểm thưởng từ vé phim: ${item.movie?.name || "Không rõ"}`,
      points: `+${Math.floor(
        (feedbackPercentage / 100) * (item.total_price || 0)
      )}`,
    }));

    // Gộp và sắp xếp theo ngày mới nhất lên đầu
    return [...pointData, ...feedbackData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu lịch sử điểm:", error);
    return [];
  }
}

// export async function updateProfileService(id, data) {
//   const { $axios } = useNuxtApp();
//   try {
//     const response = await $axios.put(`/v1/${id}/update-profile`, data, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });
//     if (!response) {
//       console.error("Dữ liệu từ API không hợp lệ:", response);
//       return [];
//     }
//     console.log("response", response);
//     return response;
//   } catch (error) {
//     console.error("Lỗi khi gọi API updateProfile:", error);
//     throw error;
//   }
// }

export async function updateProfileService(id, data) {
  const { $axios } = useNuxtApp();

  const formData = new FormData();

  for (const key in data) {
    if (data[key] !== null && data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  }

  try {
    const response = await $axios.post(`/v1/${id}/update-profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
