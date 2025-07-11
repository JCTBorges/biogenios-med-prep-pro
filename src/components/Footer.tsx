
import { BookOpen, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Biogênios
                </h3>
                <p className="text-xs text-gray-400">Biologia para Medicina</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              O cursinho de biologia mais completo para quem quer conquistar uma vaga na medicina.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-green-400">Curso</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Videoaulas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guias Mestres</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Simulados</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cronograma</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Correção Individual</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-blue-400">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Reembolso</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-purple-400">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">contato@biogenios.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">São Paulo, SP</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Redes Sociais</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <Youtube className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 Biogênios - Todos os direitos reservados. Desenvolvido com ♥ para futuros médicos.</p>
        </div>
      </div>
    </footer>
  );
};
