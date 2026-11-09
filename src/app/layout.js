import "./globals.css";

import { ViewTransitions } from "next-view-transitions";

import ClientLayout from "@/components/ClientLayout";
import Footer from "@/components/Footer";
import Menu, { MenuProvider } from "@/components/Menu";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL("https://capstone.teamfaraday.com"),
  title: "Duoband",
  description: "A smart, occlusive wound dressing that catches infection before symptoms show.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <ClientLayout>
            <MenuProvider>
              <Navbar />
              <Menu />

              <div data-page-shell>
                {children}
                <Footer />
              </div>
            </MenuProvider>
          </ClientLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
