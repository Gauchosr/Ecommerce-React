import Navbar from '../pages/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;