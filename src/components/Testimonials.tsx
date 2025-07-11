
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Clara",
      university: "FMUSP - 2023",
      text: "A correção individual das discursivas foi o diferencial que me fez passar. O professor apontava exatamente onde eu estava errando!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b19c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Pedro Santos",
      university: "UNIFESP - 2023",
      text: "O cronograma que considera tempo de exercícios mudou minha forma de estudar. Finalmente consegui organizar meus estudos de verdade!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maria Eduarda",
      university: "UFRJ - 2024",
      text: "O suporte via WhatsApp é incrível! Sempre que tinha dúvida, o professor respondia rapidamente. Isso fez toda diferença.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lucas Oliveira",
      university: "UFMG - 2024",
      text: "Os simulados com questões inéditas me prepararam para situações que não encontrava em outros lugares. Fundamental!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "5.000+", label: "Alunos Aprovados" },
    { number: "95%", label: "Taxa de Aprovação" },
    { number: "500+", label: "Questões Corrigidas/Mês" },
    { number: "24h", label: "Suporte WhatsApp" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Nossos Aprovados
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que dizem os estudantes que conquistaram suas vagas na medicina
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-green-200" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-green-600 font-semibold">{testimonial.university}</p>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Seja o Próximo Aprovado!
          </h3>
          <p className="text-gray-600 mb-6">
            Junte-se aos milhares de estudantes que já conquistaram suas vagas na medicina
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};
