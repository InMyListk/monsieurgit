import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center my-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
