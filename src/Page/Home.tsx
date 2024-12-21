import { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { gsap } from 'gsap';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.to('.bg-gradient-to-r', { duration: 1, opacity: 1 });

      const icons = document.querySelectorAll('.icon');
      icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { scale: 1.2, duration: 0.3 });
        });
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, { scale: 1, duration: 0.3 });
        });
      });
    }
  }, [loading]);

  return (
    <>
      <Header />
      <main className="container mx-auto p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}></div>
        <section className="text-center w-full h-screen my-8 relative z-10">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Welcome to Butipalar Salon</h1>
          <p className="text-lg italic">Your beauty, our passion. Experience the best in beauty and wellness.</p>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="relative group">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/048/332/633/small_2x/cartoon-makeup-brush-3d-illustration-isolated-on-the-transparent-background-png.png" alt="Icon 1" className="w-16 h-16 transform transition-transform duration-300 icon" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Makeup Brush</span>
            </div>
            <div className="relative group">
              <img id="lipstick-icon" src="https://cdn3d.iconscout.com/3d/premium/thumb/lipstick-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cosmetic-makeup-items-pack-beauty-icons-5740525.png?f=webp" alt="Icon 5" className="w-16 h-16 transform transition-transform duration-300 cursor-pointer icon" onClick={() => window.location.href = '/lipstick'} />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lipstick</span>
            </div>
            <div className="relative group">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/eyelashes-scissor-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cosmetic-makeup-items-pack-beauty-icons-5740524.png?f=webp" alt="Icon 2" className="w-16 h-16 transform transition-transform duration-300 icon" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Eyelash Scissor</span>
            </div>
            <div className="relative group">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/nail-polish-3d-icon-download-in-png-blend-fbx-gltf-file-formats--paint-art-pedicure-beauty-cosmetics-pack-icons-6209474.png?f=webp" alt="Icon 3" className="w-16 h-16 transform transition-transform duration-300 icon" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Nail Polish</span>
            </div>
            <div className="relative group">
              <img src="https://images.jdmagicbox.com/quickquotes/images_main/madhuri-heena-cone-2018654287-o6awyvh7.png" alt="Icon 4" className="w-16 h-16 transform transition-transform duration-300 icon" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Henna Cone</span>
            </div>
          </div>
        </section>
        <section className="my-8 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg relative z-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-4">
            At Butipalar Salon, we believe in providing top-notch services to our customers. Here are a few reasons why you should choose us:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Experienced and professional staff</li>
            <li>High-quality products and equipment</li>
            <li>Relaxing and comfortable environment</li>
            <li>Personalized services tailored to your needs</li>
            <li>Competitive pricing and special offers</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;