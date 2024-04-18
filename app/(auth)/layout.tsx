import "../globals.css";
import AuthBlock from "./components/AuthBlock";
import AuthImgBlock from "./components/AuthImgBlock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <main className="mt-0">
            <section className="xl:grid grid-cols-2 gap-[16px]">
              <AuthBlock>{children}</AuthBlock>
              <AuthImgBlock />
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
