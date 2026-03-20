/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Home, 
  Key, 
  MapPin, 
  Calendar, 
  Users, 
  FileText, 
  CheckCircle2, 
  Instagram, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Palette,
  ArrowRight,
  Building2,
  Gem,
  LayoutGrid
} from 'lucide-react';
import { motion } from 'motion/react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-gold/30">
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gem className="w-6 h-6 text-gold" />
            <span className="font-serif text-xl tracking-widest uppercase font-medium">Imobi<span className="text-gold">Gold</span></span>
          </div>
          <a 
            href="#oferta" 
            className="hidden md:block text-xs uppercase tracking-widest font-semibold hover:text-gold transition-colors"
          >
            Garantir Acesso
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/30 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/20 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-8"
            >
              <Instagram className="w-3 h-3" /> Exclusivo para Destaques do Instagram
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8"
            >
              Transforme seu Instagram em uma <span className="italic text-gold-gradient">Vitrine de Luxo</span> em Minutos
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            >
              O segredo dos corretores de elite para transmitir autoridade instantânea e atrair clientes de alto padrão através de um perfil impecável.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#oferta"
                className="inline-flex items-center gap-3 bg-gold-gradient text-black px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                Quero meu Perfil Premium Agora <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* The Pain Section */}
        <section className="py-24 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-grid-cols-2 gap-16 items-center">
              <motion.div {...fadeIn}>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                  Por que você está perdendo <span className="text-gold">clientes de alto valor?</span>
                </h2>
                <div className="space-y-6 text-gray-400 font-light text-lg">
                  <p>
                    No mercado imobiliário, a primeira impressão não é apenas importante ela é decisiva. 
                  </p>
                  <p>
                    Um perfil do Instagram desorganizado, com ícones genéricos ou sem padrão, comunica uma coisa ao seu cliente: <span className="text-white font-medium">Amadorismo.</span>
                  </p>
                  <p>
                    Se você vende imóveis de centenas de milhares ou milhões de reais, seu cartão de visitas digital precisa refletir esse valor. Caso contrário, o cliente de alto padrão simplesmente passará para o próximo corretor.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeIn}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: <Users className="w-6 h-6" />, title: "Falta de Confiança", desc: "Clientes hesitam em fechar negócios com quem não cuida da própria imagem." },
                  { icon: <Smartphone className="w-6 h-6" />, title: "Perfil Confuso", desc: "Destaques sem padrão dificultam a navegação e a venda." },
                  { icon: <Zap className="w-6 h-6" />, title: "Percepção de Valor Baixa", desc: "Sua marca parece 'barata' demais para imóveis de luxo." },
                  { icon: <ShieldCheck className="w-6 h-6" />, title: "Invisibilidade", desc: "Você se torna apenas 'mais um' na multidão de corretores." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl glass-card border-white/5">
                    <div className="text-gold mb-4">{item.icon}</div>
                    <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div {...fadeIn} className="mb-16">
              <h2 className="font-serif text-4xl md:text-6xl mb-6">A Solução <span className="italic text-gold-gradient">Definitiva</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-light">
                Apresentamos o Pack de Ícones Metálicos Dourados. Sofisticação, volume e brilho premium projetados especificamente para o mercado imobiliário.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Gem className="w-8 h-8" />, title: "Design Premium", desc: "Acabamento metálico com volume realista." },
                { icon: <Palette className="w-8 h-8" />, title: "Editável no Canva", desc: "Ajuste cores e tons em segundos." },
                { icon: <Zap className="w-8 h-8" />, title: "Pronto para Usar", desc: "Baixe e suba direto para o Instagram." },
                { icon: <LayoutGrid className="w-8 h-8" />, title: "Foco Imobiliário", desc: "Ícones pensados na sua rotina de vendas." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-medium mb-2 uppercase tracking-widest text-xs">{item.title}</h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="py-24 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <motion.div {...fadeIn} className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-gold-dark/50 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-black rounded-3xl p-8 border border-white/10">
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        <Home className="w-10 h-10 text-gold" />,
                        <Building2 className="w-10 h-10 text-gold" />,
                        <Key className="w-10 h-10 text-gold" />,
                        <FileText className="w-10 h-10 text-gold" />,
                        <MapPin className="w-10 h-10 text-gold" />,
                        <Calendar className="w-10 h-10 text-gold" />,
                        <Users className="w-10 h-10 text-gold" />,
                        <Smartphone className="w-10 h-10 text-gold" />,
                        <CheckCircle2 className="w-10 h-10 text-gold" />
                      ].map((icon, i) => (
                        <div key={i} className="aspect-square rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shadow-inner">
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="flex-1">
                <h2 className="font-serif text-4xl mb-8">O que você vai receber:</h2>
                <ul className="space-y-4 mb-10">
                  {[
                    "Acesso ao Template Exclusivo no Canva",
                    "Ícones de Casa, Apartamento e Cobertura",
                    "Ícones de Chave, Contrato e Documentação",
                    "Localização, Mapa e Tour Virtual",
                    "Calendário de Visitas e Agendamentos",
                    "Equipe, Sobre Nós e Depoimentos",
                    "Financiamento e Simuladores",
                    "BÔNUS: Fundo Preto Texturizado Premium"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 font-light">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
                  <p className="text-gold text-sm font-medium italic">
                    "Tudo organizado em um único lugar para facilitar sua vida."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <motion.div {...fadeIn} className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full opacity-30"></div>
                  <div className="relative glass-card p-10 rounded-[40px] border-gold/20 text-center">
                    <FileText className="w-16 h-16 text-gold mx-auto mb-6" />
                    <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] uppercase tracking-widest font-bold mb-4">
                      Entrega Instantânea
                    </div>
                    <h3 className="font-serif text-3xl mb-4">PDF de Acesso Premium</h3>
                    <p className="text-gray-400 text-sm font-light mb-8">
                      Você não recebe arquivos soltos e bagunçados. Você recebe um PDF elegante com o botão de acesso direto ao seu Template Exclusivo.
                    </p>
                    <div className="w-full h-12 bg-gold/10 rounded-xl border border-dashed border-gold/30 flex items-center justify-center text-gold/60 text-xs font-mono">
                      CLIQUE PARA ABRIR NO CANVA
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="flex-1">
                <h2 className="font-serif text-4xl md:text-5xl mb-8">Como você recebe e <span className="text-gold">edita</span></h2>
                <div className="space-y-8">
                  {[
                    { 
                      title: "Sem Softwares Complexos", 
                      desc: "Esqueça Photoshop ou Illustrator. Você edita tudo diretamente no Canva, usando apenas o seu navegador ou o aplicativo no celular." 
                    },
                    { 
                      title: "Controle Total de Cores", 
                      desc: "Altere gradientes, brilhos e elementos com poucos cliques. Deixe os ícones com a cara exata da sua identidade visual." 
                    },
                    { 
                      title: "Acesso Vitalício", 
                      desc: "O template é seu para sempre. Precise de um ícone novo ou quer mudar a cor daqui a um ano? Ele estará lá esperando por você." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0 font-serif italic">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 uppercase tracking-wider text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Disclaimer Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div {...fadeIn} className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-6">Transparência & Agilidade</h3>
              <div className="space-y-4 text-gray-400 text-sm font-light leading-relaxed">
                <p>
                  Este pack foi desenvolvido com foco total em <span className="text-white font-medium">performance digital</span>. 
                  Os arquivos possuem a resolução exata para os destaques do Instagram, garantindo que seu perfil carregue rápido e com nitidez perfeita.
                </p>
                <p>
                  Ao usar o <span className="text-white font-medium">Template do Canva</span>, você ganha a liberdade de ajustar cada detalhe sem precisar de conhecimentos técnicos. 
                  É a união perfeita entre o design profissional e a praticidade do dia a dia do corretor.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing / Offer Section */}
        <section id="oferta" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div {...fadeIn} className="mb-12">
              <h2 className="font-serif text-5xl md:text-7xl mb-6">Oferta <span className="text-gold-gradient">Irresistível</span></h2>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Acesso Vitalício + Bônus Exclusivo</p>
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="p-12 rounded-[40px] border border-gold/30 bg-black shadow-[0_0_50px_rgba(212,175,55,0.15)] relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-black px-6 py-1 rounded-full uppercase tracking-widest">
                Oportunidade Única
              </div>
              
              <div className="mb-8">
                <span className="text-gray-500 line-through text-xl block mb-2">De R$ 97,00</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-light">Por apenas</span>
                  <span className="text-6xl md:text-8xl font-serif text-gold-gradient">R$ XX,YY</span>
                </div>
                <p className="text-gray-400 mt-4 text-sm">Ou em até 12x no cartão</p>
              </div>

              <button className="w-full bg-gold-gradient text-black py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.3)] mb-8">
                Quero meu Perfil Premium Agora
              </button>

              <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold" /> Compra 100% Segura
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gold" /> Acesso Imediato
                </div>
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-gold" /> Pack Completo
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <motion.div {...fadeIn} className="w-40 h-40 flex-shrink-0">
              <div className="w-full h-full rounded-full border-4 border-gold/20 flex items-center justify-center relative">
                <div className="absolute inset-2 rounded-full border border-gold/40 flex items-center justify-center flex-col text-center">
                  <span className="text-gold font-serif text-4xl leading-none">7</span>
                  <span className="text-gold text-[8px] uppercase font-bold tracking-tighter">Dias de</span>
                  <span className="text-gold text-[8px] uppercase font-bold tracking-tighter">Garantia</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="text-center md:text-left">
              <h2 className="font-serif text-3xl mb-4">Sua Satisfação ou seu Dinheiro de Volta</h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Eu confio tanto na qualidade deste material que ofereço uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o pack não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento. Sem perguntas, sem letras miúdas.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gem className="w-5 h-5 text-gold" />
            <span className="font-serif text-lg tracking-widest uppercase font-medium">Imobi<span className="text-gold">Gold</span></span>
          </div>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-4">
            © 2026 Todos os direitos reservados. Este produto não tem vínculo com o Instagram ou Canva.
          </p>
          <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
