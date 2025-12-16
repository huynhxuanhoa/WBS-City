import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Cấu hình Metadata (tiêu đề trang, mô tả)
export const metadata: Metadata = {
  title: "WBS-Havoc | Minecraft Server",
  description: "Server Minecraft Survival & PvP đỉnh cao tại Việt Nam",
};

// Hàm RootLayout (Component chính)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {/* Children là nội dung chính của trang (page.tsx) */}
        {children}

        {/* --- PHẦN WATERMARK MỚI ĐÃ THÊM --- */}
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none select-none opacity-30 mix-blend-screen">
          <div className="text-right">
            <h1 className="text-5xl font-black italic text-red-600 tracking-tighter">Neville Studio</h1>
            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest -mt-2 mr-1">
              WBS-Official
            </p>
          </div>
        </div>
        {/* --- KẾT THÚC PHẦN WATERMARK --- */}

      </body>
    </html>
  );
}

