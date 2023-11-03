import AuthProvider from "@/context/AuthProvider";

export const metadata = {
  title: "Chatbot",
  description: "Chatbot created using next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
