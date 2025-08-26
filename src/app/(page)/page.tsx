import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}
