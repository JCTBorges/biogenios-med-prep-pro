
import { Play, Users, Award, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Biogênios
                </span>
                <br />
                <span className="text-gray-800">
                  O Futuro da Sua Aprovação em Medicina
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                O único cursinho de biologia com correção individual de discursivas e plano de estudo personalizado que considera tempo de exercícios, não apenas aulas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Começar Agora</span>
              </button>
              <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300">
                Ver Demonstração
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">5.000+</div>
                <div className="text-sm text-gray-600">Alunos Aprovados</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">95%</div>
                <div className="text-sm text-gray-600">Taxa de Aprovação</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">24h</div>
                <div className="text-sm text-gray-600">Suporte WhatsApp</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582203989433-62c2cf9f8194?w=600&h=400&fit=crop"
                alt="Estudante de medicina estudando biologia"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Online</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1:1</div>
                <div className="text-sm text-gray-600">Correção Individual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
