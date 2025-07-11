
import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-green-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Biogênios
              </h1>
              <p className="text-xs text-gray-600">Biologia para Medicina</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">
              Início
            </a>
            <a href="#diferenciais" className="text-gray-700 hover:text-green-600 transition-colors">
              Diferenciais
            </a>
            <a href="#conteudo" className="text-gray-700 hover:text-green-600 transition-colors">
              Conteúdo
            </a>
            <a href="#plano" className="text-gray-700 hover:text-green-600 transition-colors">
              Plano de Estudo
            </a>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
              Começar Agora
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-100 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">
                Início
              </a>
              <a href="#diferenciais" className="text-gray-700 hover:text-green-600 transition-colors">
                Diferenciais
              </a>
              <a href="#conteudo" className="text-gray-700 hover:text-green-600 transition-colors">
                Conteúdo
              </a>
              <a href="#plano" className="text-gray-700 hover:text-green-600 transition-colors">
                Plano de Estudo
              </a>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 w-full">
                Começar Agora
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
