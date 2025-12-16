import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Chú ý: Ở file JS, ta dùng cú pháp JSDoc để mô tả metadata
// Nếu bạn muốn dùng Metadata chi tiết hơn, bạn cần dùng file .tsx
export const metadata = {
  title: "WBS-Havoc | Minecraft Server",
  description: "Server Minecraft Survival & PvP đỉnh cao tại Việt Nam",
};

export default function RootLayout({ children }) {
  // Loại bỏ khai báo kiểu dữ liệu (type annotation) cho { children }
  return (
    <html lang="vi">
      <body className={inter.className}>
        {children}

        {/* --- PHẦN WATERMARK NEVILLE STUDIO (Vẫn giữ nguyên) --- */}
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none select-none opacity-30 mix-blend-screen">
          <div className="text-right">
            <h1 className="text-[10px] font-black italic text-red-600 tracking-tighter">Neville Studio</h1>
            <p className="text-[5px] text-gray-400 font-mono uppercase tracking-widest -mt-2 mr-1">
              WEBSITE TESTING MODE
            </p>
          </div>
        </div>
        {/* --- KẾT THÚC PHẦN WATERMARK --- */}
        
      </body>
    </html>
  );
}

