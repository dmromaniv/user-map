import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] px-10">
      <Header />
      <main className="relative h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
