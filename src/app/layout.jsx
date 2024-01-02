import "./globals.css";

export const metadata = {
  title: "Content Management System",
  description: "The site build for the purpose of classes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0 m-0 h-dvw w-dvw bg-slate-600">{children}</body>
    </html>
  );
}
