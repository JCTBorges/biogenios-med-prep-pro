
import { CheckCircle, ArrowRight, Gift } from "lucide-react";

export const CTA = () => {
  const benefits = [
    "Correção individual de discursivas",
    "Cronograma personalizado com exercícios",
    "WhatsApp direto com professor",
    "Simulados com questões inéditas",
    "Guias mestres completos",
    "Aulas ao vivo de revisão",
    "Flashcards inteligentes",
    "Suporte 24h"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <Gift className="w-5 h-5 mr-2" />
              <span className="font-semibold">Oferta Especial - Tempo Limitado</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Sua Aprovação em Medicina Começa Agora
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Seja parte do cursinho que mais aprova em medicina no Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">O que você vai ter:</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-left">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">95%</div>
                <div className="text-xl mb-6">Taxa de Aprovação</div>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">12x</div>
                    <div className="text-sm">R$ 97,90</div>
                  </div>
                  <div className="text-sm opacity-75">
                    ou R$ 997 à vista com 15% de desconto
                  </div>
                </div>

                <button className="w-full bg-white text-green-600 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Quero Me Inscrever Agora</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">Garantia de 30 Dias</h3>
            <p className="text-sm opacity-90">
              Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm opacity-75">
              Mais de 5.000 alunos já confiaram no Biogênios para realizar o sonho da medicina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
