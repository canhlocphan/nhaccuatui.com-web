const HeaderMenuList = [
  {
    id: "1",
    name: "Bài Hát",
    list: [
      {
        id: "1",
        type: "Việt Nam",
        specific: [
          {
            id: "1",
            name: "Nhạc Trẻ",
          },
          {
            id: "2",
            name: "Nhạc trữ tình",
          },
          {
            id: "3",
            name: "Remix Việt",
          },
          {
            id: "4",
            name: "Rap Việt",
          },

          "Tiền Chiến",
          "Nhạc Trịnh",
          "Rock Việt",
          "Cách Mạng",
        ],
      },
      {
        id: "2",
        type: "Âu Mỹ",
        specific: [
          "Pop",
          "Rop",
          "Electronica/Dance",
          "R&B/HipHop/Rap",
          "Blues/Jazz",
          "Country",
          "Latin",
          "Indie",
          "Âu Mỹ Khác",
        ],
      },
      {
        id: "3",
        type: "Châu Á",
        specific: ["Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Nhạc Thái"],
      },
      {
        id: "4",
        type: "Khác",
        specific: ["Thiếu Nhi", "Không Lời", "Beat", "Thể Loại Khác", "Tui Hát"],
      },
    ],
  },
  {
    id: "2",
    name: "Playlist",
    list: [
      {
        id: "1",
        type: "Việt Nam",
        specific: [
          "Nhạc Trẻ",
          "Nhạc trữ tình",
          "Remix Việt",
          "Rap Việt",
          "Tiền Chiến",
          "Nhạc Trịnh",
          "Rock Việt",
          "Cách Mạng",
        ],
      },
      {
        id: "2",
        type: "Âu Mỹ",
        specific: [
          "Pop",
          "Rop",
          "Electronica/Dance",
          "R&B/HipHop/Rap",
          "Blues/Jazz",
          "Country",
          "Latin",
          "Indie",
          "Âu Mỹ Khác",
        ],
      },
      {
        id: "3",
        type: "Châu Á",
        specific: ["Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Nhạc Thái"],
      },
      {
        id: "4",
        type: "Khác",
        specific: ["Thiếu Nhi", "Không Lời", "Beat", "Thể Loại Khác", "Tui Hát"],
      },
    ],
  },
  {
    id: "3",
    name: "Tuyển Tập",
    list: [
      {
        id: "1",
        type: "Thể Loại",
        specific: ["Nhạc Trẻ", "Nhạc Trữ Tình", "Pop", "Nhạc Hàn", "Nhạc Hoa", "Soundtrack", "Không Lời"],
      },
      {
        id: "2",
        type: "Tâm Trạng",
        specific: ["Buồn", "Hưng Phấn", "Nhạy cảm", "Nhớ Nhung", "Thất tình", "Thư Giãn", "Vui Vẻ"],
      },
      {
        id: "3",
        type: "Khung cảnh",
        specific: ["Cafe", "Bar - Club", "Phòng Trà", "Tắm", "Bơi lội", "Tập Gym", "Lãng mạn", "Mưa"],
      },
      {
        id: "4",
        type: "Chủ đề",
        specific: ["Tình Yêu", "Top 100", "Weekend", "Chill Out", "Bất Hủ", "Song Ca", "Mashup"],
      },
    ],
  },
  {
    id: "4",
    name: "Video",
    list: {
      "Việt Nam": [
        "Nhạc Trẻ",
        "Nhạc trữ tình",
        "Remix Việt",
        "Rap Việt",
        "Tiền Chiến",
        "Nhạc Trịnh",
        "Rock Việt",
        "Cách Mạng",
      ],
      "Âu Mỹ": [
        "Pop",
        "Rop",
        "Electronica/Dance",
        "R&B/HipHop/Rap",
        "Blues/Jazz",
        "Country",
        "Latin",
        "Indie",
        "Âu Mỹ Khác",
      ],
      "Châu Á": ["Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Nhạc Thái"],
      Khác: ["Thiếu Nhi", "Không Lời", "Beat", "Thể Loại Khác", "Tui Hát"],
    },
  },
  {
    id: "5",
    name: "BXH",
    list: {
      "Việt Nam": [
        "Nhạc Trẻ",
        "Nhạc trữ tình",
        "Remix Việt",
        "Rap Việt",
        "Tiền Chiến",
        "Nhạc Trịnh",
        "Rock Việt",
        "Cách Mạng",
      ],
      "Âu Mỹ": [
        "Pop",
        "Rop",
        "Electronica/Dance",
        "R&B/HipHop/Rap",
        "Blues/Jazz",
        "Country",
        "Latin",
        "Indie",
        "Âu Mỹ Khác",
      ],
      "Châu Á": ["Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Nhạc Thái"],
      Khác: ["Thiếu Nhi", "Không Lời", "Beat", "Thể Loại Khác", "Tui Hát"],
    },
  },
  {
    id: "6",
    name: "Chủ Đề",
    list: {
      "Việt Nam": [
        "Nhạc Trẻ",
        "Nhạc trữ tình",
        "Remix Việt",
        "Rap Việt",
        "Tiền Chiến",
        "Nhạc Trịnh",
        "Rock Việt",
        "Cách Mạng",
      ],
      "Âu Mỹ": [
        "Pop",
        "Rop",
        "Electronica/Dance",
        "R&B/HipHop/Rap",
        "Blues/Jazz",
        "Country",
        "Latin",
        "Indie",
        "Âu Mỹ Khác",
      ],
      "Châu Á": ["Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Nhạc Thái"],
      Khác: ["Thiếu Nhi", "Không Lời", "Beat", "Thể Loại Khác", "Tui Hát"],
    },
  },
  {
    id: "7",
    name: "Top 100",
    list: {
      "Việt Nam": [
        "Nhạc Trẻ",
        "Nhạc trữ tình",
        "Remix Việt",
        "Rap Việt",
        "Tiền Chiến",
        "Nhạc Trịnh",
        "Rock Việt",
        "Cách Mạng",
      ],
      "Âu Mỹ": [
        "Pop",
        "Rop",
        "Electronica/Dance",
        "R&B/HipHop/Rap",
        "Blues/Jazz",
        "Country",
        "Latin",
        "Indie",
        "Âu Mỹ Khác",
      ],
      "Châu Á": ["Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Nhạc Thái"],
      Khác: ["Thiếu Nhi", "Không Lời", "Beat", "Thể Loại Khác", "Tui Hát"],
    },
  },
  {
    id: "8",
    name: "Khác",
    list: {
      "Việt Nam": [
        "Nhạc Trẻ",
        "Nhạc trữ tình",
        "Remix Việt",
        "Rap Việt",
        "Tiền Chiến",
        "Nhạc Trịnh",
        "Rock Việt",
        "Cách Mạng",
      ],
      "Âu Mỹ": [
        "Pop",
        "Rop",
        "Electronica/Dance",
        "R&B/HipHop/Rap",
        "Blues/Jazz",
        "Country",
        "Latin",
        "Indie",
        "Âu Mỹ Khác",
      ],
      "Châu Á": ["Nhạc Hàn", "Nhạc Hoa", "Nhạc Nhật", "Nhạc Thái"],
      Khác: ["Thiếu Nhi", "Không Lời", "Beat", "Thể Loại Khác", "Tui Hát"],
    },
  },
];

export default HeaderMenuList;
