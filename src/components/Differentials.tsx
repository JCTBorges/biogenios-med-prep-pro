
import { Star, MessageCircle, Calendar, Target } from "lucide-react";

export const Differentials = () => {
  const differentials = [
    {
      icon: Star,
      title: "Correção Individual de Discursivas",
      description: "O ÚNICO curso de biologia que oferece correção personalizada das suas questões discursivas",
      highlight: "Exclusivo",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: MessageCircle,
      title: "Tira-Dúvidas Direto com Professor",
      description: "WhatsApp direto com o professor para esclarecer todas as suas dúvidas em tempo real",
      highlight: "24h",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Calendar,
      title: "Cronograma que Conta Exercícios",
      description: "Plano de estudo que considera tempo de exercícios, não apenas aulas - um diferencial único",
      highlight: "Inovador",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Target,
      title: "Simulados com Questões Inéditas",
      description: "Questões exclusivas criadas especialmente para testar seu conhecimento de forma única",
      highlight: "Exclusivo",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Nossos Diferenciais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que torna o Biogênios único no mercado de cursinhos de biologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div className="absolute top-4 right-4">
                <span className={`bg-gradient-to-r ${item.color} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                  {item.highlight}
                </span>
              </div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Por que escolher o Biogênios?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Somos o único cursinho que entende que aprovar em medicina vai além de assistir aulas. 
              Precisamos praticar, corrigir e personalizar o estudo para cada aluno.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Conhecer Todos os Diferenciais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
