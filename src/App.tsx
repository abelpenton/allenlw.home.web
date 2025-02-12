import React from 'react';
import { Instagram, Youtube, Pointer as Pinterest, Mail, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Creando un hogar en familia</h1>
          <p className="text-xl mb-6">DIY, deco y recetas caseras</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/by.lisetlw/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
              <Instagram size={28} />
            </a>
            <a href="https://www.pinterest.com/lawrenti/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
              <Pinterest size={28} />
            </a>
            <a href="https://www.youtube.com/@familiaallenlw?si=Wd6p6HWiZaDASGT1" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
              <Youtube size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl italic text-gray-700">
            "Vivir aprendiendo y compartiendo lo que sé, creando y compartiendo lo que soy"
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            image="/img/labels.png"
            title="Etiquetas para Cocina"
            description="Organiza tu cocina con estilo"
            link="https://drive.google.com/drive/folders/1q-IOnc5HF5P-B53dQmvGCHt7hZxg1feR"
          />        
          <ProjectCard 
            image="/img/calendar.png"
            title="Calendario Adviento"
            description="Creaciones hechas con amor"
            link="https://drive.google.com/drive/folders/1ADC7kQWTUWG0sDBcEXmmL1ywYHznA3iC"
          />
          <ProjectCard
              image="/img/pinterest.jpg"
              title="Decoraciones Navidad"
              description="Haciendo de la navidad una magia"
              link="https://www.pinterest.com/lawrenti/"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-neutral-100 py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contáctame</h2>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Mail size={20} />
            <a href="mailto:allenlw.home@gmail.com" className="hover:text-pink-600 transition-colors">
              allenlw.home@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Heart size={16} className="text-pink-500" />
          <p>Hecho con amor © 2025</p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ image, title, description, link }: { image: string; title: string; description: string; link: string }) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
}

export default App;