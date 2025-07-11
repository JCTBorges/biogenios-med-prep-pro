
import { 
  Play, 
  BookOpen, 
  FileText, 
  BarChart3, 
  PenTool, 
  MessageSquare, 
  Zap, 
  Video,
  Users,
  Bookmark
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Play,
      title: "Videoaulas Completas",
      description: "Aulas detalhadas com os melhores professores de biologia",
      color: "from-red-400 to-red-600"
    },
    {
      icon: BookOpen,
      title: "Guias Mestres",
      description: "Apostilas de conteúdo completas e organizadas",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FileText,
      title: "Apostilas de Questões",
      description: "Milhares de questões organizadas por tópico",
      color: "from-green-400 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Simulados Progressivos",
      description: "Avaliações que evoluem com seu aprendizado",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: PenTool,
      title: "Simulados Inéditos",
      description: "Questões exclusivas criadas pelos nossos professores",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: MessageSquare,
      title: "Suporte WhatsApp",
      description: "Tire dúvidas diretamente com o professor",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Zap,
      title: "Flashcards Inteligentes",
      description: "Memorização ativa com repetição espaçada",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: Video,
      title: "Aulas ao Vivo",
      description: "Revisões ao vivo para esclarecer dúvidas",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Users,
      title: "Revisão Orientada",
      description: "Professor orienta sua revisão personalizada",
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: Bookmark,
      title: "Questões por Banca",
      description: "Apostilas organizadas por instituição",
      color: "from-amber-400 to-yellow-500"
    }
  ];

  return (
    <section id="conteudo" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Conteúdo Completo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para dominar a biologia e conquistar sua vaga na medicina
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Material Didático</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Guias Mestres com teoria completa</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Apostilas com questões comentadas</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Material organizado por banca</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Acompanhamento</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Correção individual de discursivas</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>WhatsApp direto com professor</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Revisão orientada personalizada</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Avaliações</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>Simulados progressivos</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>Questões inéditas exclusivas</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Análise de desempenho detalhada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
