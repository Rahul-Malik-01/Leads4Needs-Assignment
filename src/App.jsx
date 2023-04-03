import Header from './components/Header';
import Stories from './components/Stories';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0F172A] pt-5">
      <Header />
      <Stories />

      <div className="flex justify-center bg-slate-800 mt-10 p-1 rounded-2xl mx-5">
        <button className="bg-blue-500 rounded-2xl py-2 w-full text-center text-[#fff] font-['Poppins']">Explore</button>
        <button className="rounded-2xl py-2 w-full text-center text-[#fff] font-['Poppins']">Explore</button>
      </div>

      <Card />
      <Footer />
    </div>
  );
}

export default App
