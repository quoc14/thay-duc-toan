// =============================
// CẢM NHẬN HỌC VIÊN
// Thêm/sửa đánh giá tại đây
// =============================

const testimonials = [
  {
    id: 1,
    name: "Học sinh TĐT",
    grade: "Lớp 9",
    content:
      "Hồi đầu năm lớp 9, em mới được học thầy Đức và khá sợ vì thầy giảng nhanh quá em không theo kịp. Nhưng học được 1 thời gian, nhờ cách dạy của thầy Đức, em đã biết cách nhìn hình nhanh hơn và khai thác được những thế hình quen thuộc. Em cảm ơn thầy Đức, thầy Hiếu, thầy Duy đã đồng hành và dẫn dắt bọn em ạ. Em hứa sẽ mang 9 điểm Toán về cho các thầy cô ạ! HUHUHU ☹️",
    rating: 5,
    avatar: null,
  },
  {
    id: 2,
    name: "Học sinh TĐT",
    grade: "2 năm tại TĐT",
    content:
      "Hai năm học tại TĐT là một hành trình rất đẹp với em, nơi đây không chỉ dạy cho em những bài học, kiến thức mà còn để lại cho em những kỉ niệm đáng nhớ. Từ một người không hứng thú với môn Toán, chính thầy cô đã ân cần giảng dạy, giúp em học dần từ đầu để giờ đây em có tự tin và đủ dũng cảm thi cấp 3. Cảm ơn thầy cô đã đồng hành cùng em suốt hai năm qua. I Love you ❤️❤️❤️",
    rating: 5,
    avatar: null,
  },
  {
    id: 3,
    name: "Học sinh TĐT",
    grade: "3 năm tại TĐT",
    content:
      "Sau ba năm học tại TĐT, em cảm ơn thầy cô đã luôn quan tâm, chăm sóc đến đời sống tinh thần của bọn em, giúp bọn em luôn hoàn thiện bản thân và trưởng thành. Đặc biệt cảm ơn cô Loan, thầy Hiếu, thầy Đức, thầy Duy đã trực tiếp giảng dạy. Chúc thầy cô mãi yêu nghề, luôn tận tâm. Ước mong TĐT ngày càng phát triển, em sẽ PR cho thầy :)) 💙 TĐT",
    rating: 5,
    avatar: null,
  },
  {
    id: 4,
    name: "Học sinh TĐT",
    grade: "6 tháng tại TĐT",
    content:
      "EM THÍCH THẦY HIẾU DẠY! Em tham gia học trung tâm được 6 tháng nhưng đã để lại trong em nhiều dư âm tốt đẹp, những kỉ niệm vui và rất nhiều bài học em thu về từ những giờ học. Em cảm ơn cô Loan đã sửa đều luận và giúp đỡ em. Em cảm ơn thầy Duy vì luôn nghiêm khắc nhắc nhở và tận tâm với nghề. Em rất rất rất biết ơn thầy Hiếu vì đã giúp em có thêm những chiêm nghiệm, bài học cho chặng đường sau. Em cảm ơn thầy Đức vì luôn ân cần, tạo động lực và giúp em nỗ lực phát triển bản thân. Thanks for all!!!",
    rating: 5,
    avatar: null,
  },
  {
    id: 5,
    name: "Học sinh TĐT",
    grade: "Học sinh TĐT",
    content:
      "Cảm ơn VĐK vì đã giúp em hạn chế sai trình bày và điều khiển trong bài làm. Cảm ơn thầy VĐD vì dạy em mấy cái trick lỏ, mà giáo để làm bài nhanh và dễ hơn. Cuối cùng là cảm ơn TĐT vì đã giúp em trong quá trình nâng cao bản lĩnh và có trải nghiệm về nhà lúc gần 11h :)) Anyway, cảm ơn vì đã hỗ trợ em quá trình lấy gốc Toán của em :3",
    rating: 5,
    avatar: null,
  },
  {
    id: 6,
    name: "Lê Thanh Tùng",
    grade: "Học sinh TĐT",
    content:
      "Thầy ơi, vậy là buổi học cuối cùng đã đến. Em cảm ơn thầy vì những kiến thức, sự tận tâm và những lần thầy luôn động viên, chúc em cố gắng hơn. Chúc thầy thật nhiều sức khỏe, niềm vui và luôn giữ được ngọn lửa nhiệt huyết với nghề. Em sẽ luôn nhớ và biết ơn thầy!",
    rating: 5,
    avatar: null,
  },
  {
    id: 7,
    name: "Học sinh TĐT",
    grade: "Khối 2K8",
    content:
      "Mặc dù học thầy 2 năm rồi nhưng đây là lần đầu em nghiêm túc có đôi lời với thầy. Thầy đã giúp em có động lực hơn trong việc học môn Toán, dù đó là môn em từng rất sợ. Em rất quý thầy Linh. Hi hi. Em chúc thầy ngày càng thành công trên con đường giảng dạy, đào tạo được nhiều lứa học sinh thành đạt hơn. Sau này có cơ hội nhất định em vẫn sẽ về thăm thầy. Em hơi lầy tí thôi nhưng em quý trọng thầy lắm. See u later. ♡",
    rating: 5,
    avatar: null,
  },
  {
    id: 8,
    name: "Ngô Bảo Phương",
    grade: "Khối 2K8",
    content:
      "Em là TĐT-er được 2 năm, trong đó có đến 1 năm rưỡi được đồng hành cùng thầy. Cảm ơn thầy vì sự nhiệt huyết, tận tình với từng buổi học, từng học sinh. Mặc dù lớp rất ồn nhưng thầy vẫn cố gắng hoàn thành tiết dạy. Hơn hết, thầy luôn lắng nghe những câu hỏi mà học sinh đặt ra và giảng thật kỹ. Vì vậy mà những phần kiến thức hổng của em cũng được bù đắp. To be continue...",
    rating: 5,
    avatar: null,
  },
  {
    id: 9,
    name: "Học sinh TĐT",
    grade: "Khối 2K8",
    content:
      "Với sự đồng hành của thầy, lời bổ trợ vững chắc cho môn Toán của em, thầy đã dạy cho em rất nhiều điều hay về môn Toán. Thầy không chỉ tốt bụng mà còn vui tính (bị thương với biệt danh Bif :)). Dù sao thì em cũng cảm ơn trung tâm và đặc biệt là thầy Linh, tạm biệt và hẹn gặp lại!!! :))) My Love!",
    rating: 5,
    avatar: null,
  },
  {
    id: 10,
    name: "Học sinh TĐT",
    grade: "Khối 2K8",
    content:
      "Em cũng chỉ mới học lớp thầy từ năm lớp 12, và một sự ngẫu nhiên khi em học nhầm lớp. Nhưng cũng từ đó, em thấy mình gắn bó rất nhiều với thầy và lớp. Thầy nhiệt tình và tận tâm, đúng GenZ nữa :)) Chúc thầy ngày càng nhiều tiền, con ngoan, trò giỏi :)) Em biết ơn thầy lắm ạ! Chúc thầy mọi điều thuận lợi.",
    rating: 5,
    avatar: null,
  },
];

export default testimonials;
