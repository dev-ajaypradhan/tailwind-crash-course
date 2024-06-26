import Body from "./assets/Components/Body";
import Footer from "./assets/Components/Footer";
import Header from "./assets/Components/Header";

function App() {
  return (
    <>
      <div className="min-h-screen px-6 py-3 bg-amber-50 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:justify-between">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
