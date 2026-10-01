import { CoupleInfo, TimelineItem, GuestWish } from '../types/wedding';

export const WEDDING_DATA: CoupleInfo = {
  bride: {
    fullName: 'Nguyễn Thị Hồng Hải',
    shortName: 'Hồng Hải',
    role: 'Cô Dâu',
    parentsPlaceholder: 'Họ tên Thân Phụ & Thân Mẫu Nhà Gái (Chờ cập nhật)',
    descriptionPlaceholder: 'Cô dâu dịu dàng, tinh tế và luôn mang đến niềm vui ấm áp cho mọi người xung quanh.',
  },
  groom: {
    fullName: 'Trương Thanh Tú',
    shortName: 'Thanh Tú',
    role: 'Chú Rể',
    parentsPlaceholder: 'Họ tên Thân Phụ & Thân Mẫu Nhà Trai (Chờ cập nhật)',
    descriptionPlaceholder: 'Chú rể điềm đạm, chân thành và luôn là điểm tựa vững vàng cho người thương.',
  },
  weddingDate: '2026-11-28T18:00:00',
  weddingTime: '18:00',
  venue: {
    name: 'Khách sạn Bình Minh',
    address: '211 Lê Lợi',
    ward: 'Phường Hưng Long',
    city: 'Thành phố Phan Thiết',
    province: 'Tỉnh Bình Thuận',
    fullAddress: 'Khách sạn Bình Minh, 211 Lê Lợi, phường Hưng Long, thành phố Phan Thiết, tỉnh Bình Thuận',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kh%C3%A1ch+s%E1%BA%A1n+B%C3%ACnh+Minh+211+L%C3%AA+L%E1%BB%A3i+H%C6%B0ng+Long+Phan+Thi%E1%BA%BFt',
  },
  invitationMessage: 'Trân trọng kính mời bạn đến chung vui và chứng kiến khoảnh khắc đặc biệt của chúng mình.',
};

export const WEDDING_TIMELINE: TimelineItem[] = [
  {
    time: '17:30',
    title: 'Đón Khách & Check-in',
    description: 'Chụp hình kỷ niệm tại sảnh hoa cùng cô dâu và chú rể, ký tên lưu niệm',
    iconName: 'Camera',
  },
  {
    time: '18:00',
    title: 'Nghi Lễ Thành Hôn',
    description: 'Nghi thức trao nhẫn, lời thề hẹn, cắt bánh cưới và nâng ly rượu mừng',
    iconName: 'Heart',
  },
  {
    time: '18:30',
    title: 'Khai Tiệc Mừng',
    description: 'Thưởng thức bữa tiệc ẩm thực ấm cúng bên gia đình, người thân và bạn bè',
    iconName: 'Utensils',
  },
  {
    time: '19:30',
    title: 'Giao Lưu & Trò Chơi',
    description: 'Những khoảnh khắc gắn kết, trò chơi vui nhộn và âm nhạc acoustic lãng mạn',
    iconName: 'Music',
  },
  {
    time: '20:30',
    title: 'Cảm Ơn & Tiễn Khách',
    description: 'Chụp ảnh kỷ niệm kết thúc buổi tiệc và nhận quà cảm ơn từ cặp đôi',
    iconName: 'Sparkles',
  },
];

export const INITIAL_WISHES: GuestWish[] = [
  {
    id: 'wish-1',
    senderName: 'Hội Bạn Thân Đại Học',
    relationship: 'Bạn thân',
    message: 'Chúc mừng hạnh phúc hai bạn Thanh Tú & Hồng Hải! Chúc tình yêu của hai bạn luôn ngập tràn tiếng cười, thấu hiểu và cùng nhau xây dựng tổ ấm viên mãn!',
    createdAt: 'Vừa xong',
  },
  {
    id: 'wish-2',
    senderName: 'Gia đình Bác Hai',
    relationship: 'Họ hàng',
    message: 'Chúc mừng hai cháu trăm năm tình viên mãn, bạc đầu nghĩa phu thê. Luôn luôn yêu thương và trân trọng nhau nhé!',
    createdAt: 'Hôm nay',
  },
  {
    id: 'wish-3',
    senderName: 'Đồng nghiệp Team Tech',
    relationship: 'Đồng nghiệp',
    message: 'Chúc anh Tú và chị Hải có một ngày cưới thật ngọt ngào, hạnh phúc và một chặng đường hôn nhân rực rỡ phía trước!',
    createdAt: 'Hôm nay',
  },
];

export const PRESET_WISHES = [
  'Chúc hai bạn trăm năm hạnh phúc, mãi mãi ngọt ngào như ngày đầu!',
  'Chúc mừng tân lang tân nương! Chúc hai bạn cùng nhau xây dựng một gia đình luôn tràn ngập tiếng cười và yêu thương.',
  'Hôn nhân là khởi đầu của một hành trình tuyệt đẹp. Chúc Tú & Hải luôn nắm chặt tay nhau vượt qua mọi thử thách!',
  'Mừng hạnh phúc đôi uyên ương! Chúc hai bạn sớm đón thêm thiên thần nhỏ đáng yêu.',
];
