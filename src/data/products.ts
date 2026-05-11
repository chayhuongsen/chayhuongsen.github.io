import mon1 from "../assets/images/HinhMon1.svg";
import mon2 from "../assets/images/HinhMon2.svg";
import mon3 from "../assets/images/HinhMon3.svg";
import mon4 from "../assets/images/HinhMon4.svg";
import mon5 from "../assets/images/HinhMon5.svg";
import mon6 from "../assets/images/HinhMon6.svg";

export type Product = {
  id: number;
  slug: string;
  name: string;
  englishName: string;
  description: string;
  image: string;
  ingredients: string;
  storage: string;
  usage: string;
  netWeight: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "thit-nuong-khai-ngo",
    name: "Thịt Nướng Khai Ngộ",
    englishName: "Grilled Soya Bean Curd",
    description: "Vị nướng đậm đà, thơm ngon hấp dẫn, giàu đạm thực vật.",
    image: mon1,
    ingredients: "Đậu nành, dầu thực vật, riềng, hạt nêm, nước mắm, vừng trắng",
    storage: "Cấp đông -18°C, tránh ánh nắng trực tiếp",
    usage: "Làm nóng, ăn với cơm, bún, bánh mì",
    netWeight: "500g",
  },
  {
    id: 2,
    slug: "gio-nam-hong-an",
    name: "Giò Nấm Hồng Ân",
    englishName: "Hong An Vegan Vietnamese Ham",
    description: "Giò chay mềm thơm vị truyền thống, dai ngon trọn vị yêu thương.",
    image: mon2,
    ingredients: "Bột mỳ, dầu thực vật, nấm hương, hạt nêm, nước mắm, hạt tiêu",
    storage: "Cấp đông, tránh ánh nắng trực tiếp",
    usage: "Làm nóng ăn trực tiếp, chế biến thành các món kho, rim...",
    netWeight: "500g",
  },
  {
    id: 3,
    slug: "gio-tinh-giac",
    name: "Giò Tịnh Giác",
    englishName: "Vegan Vietnamese Ham",
    description: "Giò chay thanh vị, tiện dụng cho bữa ăn gia đình.",
    image: mon3,
    ingredients: "Bột mỳ, dầu thực vật, hạt nêm, nước mắm, hạt tiêu",
    storage: "Cấp đông, tránh ánh nắng trực tiếp",
    usage: "Làm nóng ăn trực tiếp, chế biến thành các món chiên, kho, rim...",
    netWeight: "500g",
  },
  {
    id: 4,
    slug: "cha-bong-thien-y",
    name: "Chà Bông Thiện Ý",
    englishName: "Shredded Soya Bean Curd",
    description: "Chà bông chay tơi xốp, phù hợp dùng cùng cơm, cháo, bánh mì.",
    image: mon4,
    ingredients: "Đậu nành, hạt nêm, nước mắm, dầu thực vật",
    storage: "Cấp đông, tránh ánh nắng trực tiếp; dùng trong 02 tháng nếu để tủ mát; dùng trong 30 ngày nếu để nhiệt độ thường",
    usage: "Ăn trực tiếp với cơm, cháo, bánh mì...",
    netWeight: "200g",
  },
  {
    id: 5,
    slug: "ca-kho-tu-ai",
    name: "Cá Kho Từ Ái",
    englishName: "Braised Assorted Beancurd",
    description: "Món chay kiểu kho đậm đà, hấp dẫn cho bữa cơm gia đình.",
    image: mon5,
    ingredients: "Đậu nành, rong biển, dầu thực vật, hạt nêm, nước mắm, hạt tiêu, riềng, sả, ớt",
    storage: "Cấp đông, tránh ánh nắng trực tiếp",
    usage: "Trước khi ăn lấy ra từ tủ đông để ngăn mát, làm nóng, ăn trực tiếp hoặc chế biến thành các món sốt cà chua, kho...",
    netWeight: "300g",
  },
  {
    id: 6,
    slug: "ca-thu-cat-tuong",
    name: "Cá Thu Cát Tường",
    englishName: "Cat Tuong Assorted Bean Curd",
    description: "Món chay tiện lợi, thơm ngon và dễ chế biến.",
    image: mon6,
    ingredients: "Đậu nành, rong biển, dầu thực vật, hạt nêm, nước mắm, hạt tiêu",
    storage: "Bảo quản ở -18°C, tránh ánh nắng trực tiếp",
    usage: "Làm nóng, ăn trực tiếp hoặc chế biến thành các món sốt cà chua, kho",
    netWeight: "250g",
  },
];

export const coreValues = [
  ["100% Thuần chay", "Nguyên liệu thực vật tự nhiên, an lành."],
  ["Dinh dưỡng lành mạnh", "Cân bằng dinh dưỡng, tốt cho sức khỏe."],
  ["Không chất bảo quản", "Cam kết an toàn, lành mạnh mỗi ngày."],
  ["Từ tâm tử tế", "Sản phẩm làm bằng tâm, lan tỏa yêu thương."],
  ["Hương vị tự nhiên", "Giữ trọn vị thanh lành của nguyên liệu."],
  ["Tiện lợi", "Phù hợp cho bữa ăn gia đình và lễ hội."],
] as const;
