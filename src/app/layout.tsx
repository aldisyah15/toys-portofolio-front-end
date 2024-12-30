import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black h-screen max-h-screen overflow-x-hidden text-white font-exo`}
      >
        {children}
      </body>
    </html>
  );
}
