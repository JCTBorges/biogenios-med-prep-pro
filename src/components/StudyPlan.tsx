
import { Calendar, Clock, Zap, BarChart3, Settings, CheckCircle } from "lucide-react";

export const StudyPlan = () => {
  return (
    <section id="plano" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Plano de Estudo Revolucionário
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O primeiro cronograma que considera tempo de exercícios, não apenas aulas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Como Funciona o Cronograma Personalizado
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Dias de Estudo</h4>
                    <p className="text-gray-600">Escolha quais dias da semana você quer estudar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tempo Disponível</h4>
                    <p className="text-gray-600">Informe quantas horas por dia você tem para estudar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Velocidade das Aulas</h4>
                    <p className="text-gray-600">Defina se prefere aulas em 1x, 1.25x, 1.5x ou 2x</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tempo de Exercícios</h4>
                    <p className="text-gray-600 font-semibold">
                      DIFERENCIAL: Calculamos automaticamente o tempo necessário para praticar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Exemplo de Cronograma</h3>
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Segunda-feira</span>
                    <span className="text-sm text-green-600">3h disponíveis</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>• Videoaulas: Citologia</span>
                      <span>1h 30min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Exercícios: Citologia</span>
                      <span>1h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Flashcards: Revisão</span>
                      <span>30min</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Terça-feira</span>
                    <span className="text-sm text-blue-600">2h disponíveis</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>• Videoaulas: Genética</span>
                      <span>1h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Exercícios: Genética</span>
                      <span>1h</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Diferencial Único</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Outros cursos só calculam tempo de aulas. Nós calculamos tempo real de estudo com exercícios!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Seu Cronograma Personalizado?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Crie agora seu plano de estudos que realmente funciona
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
            Criar Meu Cronograma
          </button>
        </div>
      </div>
    </section>
  );
};
