import Footer from "./component/organism/Home/footer";
import Header from "./component/organism/Home/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black h-screen max-h-screen overflow-x-hidden w-screen text-white font-exo border-2 border-red-600`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
