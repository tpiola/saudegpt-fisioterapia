'use client'

import { useState } from 'react'

type Section = 'hero' | 'sobre' | 'conteudo' | 'diferenciais' | 'cta'

export default function Home() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nome && email) {
      setEnviado(true)
    }
  }

  const scrollTo = (id: Section) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 1.5rem',
  }

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '0.75rem',
    color: '#EDF0EC',
  }

  const sectionSubStyle: React.CSSProperties = {
    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
    color: '#80A098',
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto 3rem',
    lineHeight: 1.7,
  }

  const cardBase: React.CSSProperties = {
    background: '#0A1A17',
    border: '1px solid rgba(0, 201, 167, 0.1)',
    borderRadius: 20,
    padding: '2rem',
    transition: 'all 0.3s ease',
  }

  const gradBtn: React.CSSProperties = {
    background: 'linear-gradient(135deg, #00C9A7, #059669)',
    color: '#050F0D',
    fontWeight: 700,
    padding: '16px 40px',
    borderRadius: 14,
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.05rem',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  }

  return (
    <main className="bg-gradient" style={{ minHeight: '100vh' }}>

      {/* ===== NAV ===== */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(5, 15, 13, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0, 201, 167, 0.08)',
      }}>
        <div style={{
          ...containerStyle,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🦴</span>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#EDF0EC' }}>
              SaúdeGPT <span style={{ color: '#00C9A7' }}>Fisioterapia</span>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            {[
              { label: 'Sobre', id: 'sobre' as Section },
              { label: 'Módulos', id: 'conteudo' as Section },
              { label: 'Diferenciais', id: 'diferenciais' as Section },
            ].map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} style={{
                background: 'transparent',
                border: 'none',
                color: '#80A098',
                padding: '8px 14px',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#00C9A7'}
                onMouseLeave={e => e.currentTarget.style.color = '#80A098'}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('cta')} style={{
              background: 'linear-gradient(135deg, #00C9A7, #059669)',
              border: 'none',
              color: '#050F0D',
              padding: '8px 18px',
              borderRadius: 10,
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginLeft: '0.5rem',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Matricule-se
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" className="bg-gradient-hero" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="orb orb-emerald" />
        <div className="orb orb-gold" />

        <div style={{ ...containerStyle, textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Badge */}
          <div className="animate-fade-up" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(0, 201, 167, 0.08)',
            border: '1px solid rgba(0, 201, 167, 0.2)',
            borderRadius: 100,
            padding: '6px 18px 6px 8px',
            marginBottom: '2rem',
          }}>
            <span style={{
              background: '#00C9A7',
              color: '#050F0D',
              fontSize: '0.7rem',
              fontWeight: 800,
              padding: '3px 8px',
              borderRadius: 6,
            }}>CREFITO</span>
            <span style={{ color: '#80A098', fontSize: '0.85rem', fontWeight: 500 }}>
              Curso preparatório
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-up-1" style={{
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            color: '#EDF0EC',
          }}>
            Sua jornada na{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00C9A7, #34D399)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Fisioterapia
            </span>{' '}
            começa aqui
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-2" style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#80A098',
            maxWidth: 640,
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            O curso completo de Fisioterapia com inteligência artificial. Domine
            Traumato-Ortopedia, Neurológica, Respiratória e muito mais — com
            conteúdo atualizado e suporte CREFITO.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-3" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}>
            <button
              onClick={() => scrollTo('cta')}
              className="pulse-glow"
              style={gradBtn}
            >
              🚀 Quero me matricular
            </button>
            <button
              onClick={() => scrollTo('conteudo')}
              style={{
                ...gradBtn,
                background: 'transparent',
                border: '1px solid rgba(0, 201, 167, 0.3)',
                color: '#00C9A7',
              }}
            >
              📖 Ver conteúdo
            </button>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up-4" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 4vw, 3.5rem)',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '6', label: 'Módulos' },
              { value: '40+', label: 'Aulas' },
              { value: '100%', label: 'Online' },
              { value: 'CREFITO', label: 'Preparatório' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#00C9A7' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#80A098', marginTop: '0.25rem' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOBRE O CURSO ===== */}
      <section id="sobre" style={{
        padding: '5rem 1.5rem',
        position: 'relative',
      }}>
        <div className="orb orb-emerald-sm" />
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>
            Áreas do Curso
          </h2>
          <p style={sectionSubStyle}>
            Três grandes pilares da Fisioterapia abordados com profundidade,
            cases clínicos e suporte de inteligência artificial.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {/* Card 1 */}
            <div style={cardBase}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'rgba(0, 201, 167, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: '1.25rem',
              }}>
                🦴
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#EDF0EC', marginBottom: '0.75rem' }}>
                Traumato-Ortopedia e Reabilitação
              </h3>
              <p style={{ color: '#80A098', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Lesões esportivas, fraturas, pós-operatório de quadril e joelho,
                reabilitação de coluna, ombro e tornozelo. Diagnóstico cinesiológico
                e protocolos baseados em evidências.
              </p>
            </div>

            {/* Card 2 */}
            <div style={cardBase}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'rgba(212, 168, 67, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: '1.25rem',
              }}>
                🧠
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#EDF0EC', marginBottom: '0.75rem' }}>
                Fisioterapia Neurológica
              </h3>
              <p style={{ color: '#80A098', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Reabilitação em AVE, lesão medular, Parkinson e Esclerose Múltipla.
                Conceitos Bobath, PNF, CIR, treino de marcha, equilíbrio e
                funcionalidade com abordagem baseada em neuroplasticidade.
              </p>
            </div>

            {/* Card 3 */}
            <div style={cardBase}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'rgba(0, 201, 167, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: '1.25rem',
              }}>
                🫁
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#EDF0EC', marginBottom: '0.75rem' }}>
                Fisioterapia Respiratória e Cardiovascular
              </h3>
              <p style={{ color: '#80A098', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Ventilação mecânica, fisioterapia em UTI, reabilitação cardíaca,
                DPOC, asma, pós-COVID e técnicas de higiene brônquica com
                suporte de simulação clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" style={{ maxWidth: 800, margin: '0 auto' }} />

      {/* ===== CONTEÚDO PROGRAMÁTICO ===== */}
      <section id="conteudo" style={{
        padding: '5rem 1.5rem',
      }}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>
            Conteúdo Programático
          </h2>
          <p style={sectionSubStyle}>
            6 módulos completos para você dominar a Fisioterapia do básico ao avançado.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              {
                num: '01',
                title: 'Anatomia e Cinesiologia',
                desc: 'Sistema esquelético e articular, biomecânica dos movimentos, palpação óssea e muscular, planos e eixos, goniometria e avaliação postural.',
                color: '#00C9A7',
              },
              {
                num: '02',
                title: 'Traumato-Ortopedia e Reabilitação',
                desc: 'Lesões musculares e ligamentares, fraturas, pós-operatório, reabilitação de ombro, joelho, quadril e coluna vertebral. Protocolos atualizados.',
                color: '#00C9A7',
              },
              {
                num: '03',
                title: 'Fisioterapia Neurológica',
                desc: 'AVE, lesão medular, Parkinson, EM, paralisia cerebral. Bobath, PNF, CIR, treino de marcha, órteses e tecnologia assistiva.',
                color: '#D4A843',
              },
              {
                num: '04',
                title: 'Fisioterapia Respiratória e Cardiovascular',
                desc: 'Ventilação mecânica, UTI, DPOC, asma, reabilitação cardíaca, teste ergométrico, pós-COVID e técnicas de higiene brônquica.',
                color: '#00C9A7',
              },
              {
                num: '05',
                title: 'Gerontologia e Saúde da Mulher',
                desc: 'Envelhecimento ativo, quedas no idoso, osteoporose, incontinência urinária, saúde pélvica, gestação e pós-parto.',
                color: '#D4A843',
              },
              {
                num: '06',
                title: 'Fisioterapia do Trabalho e Ergonomia',
                desc: 'Análise ergonômica, LER/DORT, ginástica laboral, avaliação postural no trabalho, perícias e legislação trabalhista.',
                color: '#00C9A7',
              },
            ].map(mod => (
              <div key={mod.num} style={cardBase}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${mod.color}33`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `rgba(0, 201, 167, 0.1)`,
                    border: `1px solid rgba(0, 201, 167, 0.15)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: mod.color,
                    flexShrink: 0,
                  }}>
                    {mod.num}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#EDF0EC', lineHeight: 1.3 }}>
                    {mod.title}
                  </h3>
                </div>
                <p style={{ color: '#80A098', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" style={{ maxWidth: 800, margin: '0 auto' }} />

      {/* ===== DIFERENCIAIS ===== */}
      <section id="diferenciais" style={{
        padding: '5rem 1.5rem',
        position: 'relative',
      }}>
        <div className="orb orb-emerald" style={{ top: -100, right: -200 }} />
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>
            Por que escolher o SaúdeGPT?
          </h2>
          <p style={sectionSubStyle}>
            Diferenciais que fazem do nosso curso a melhor escolha para sua formação.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              {
                icon: '📜',
                title: 'Preparatório CREFITO',
                desc: 'Conteúdo alinhado ao edital do CREFITO com simulados, questões comentadas e revisão guiada para aprovação.',
              },
              {
                icon: '🎓',
                title: 'Certificado Reconhecido',
                desc: 'Certificado de conclusão com carga horária válida em todo o território nacional para horas complementares.',
              },
              {
                icon: '💬',
                title: 'Suporte com IA',
                desc: 'Tire dúvidas 24/7 com nossa inteligência artificial treinada nos conteúdos do curso. Tire dúvidas em tempo real.',
              },
              {
                icon: '⚡',
                title: 'Metodologia Ativa',
                desc: 'Aulas práticas, estudos de caso, simulações clínicas e gamificação para aprendizado acelerado e duradouro.',
              },
            ].map(d => (
              <div key={d.title} style={cardBase}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                  {d.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#EDF0EC', marginBottom: '0.6rem' }}>
                  {d.title}
                </h3>
                <p style={{ color: '#80A098', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="cta" style={{
        padding: '5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="orb orb-emerald" style={{ top: '30%', left: '30%', opacity: 0.06 }} />
        <div style={containerStyle}>
          <div className="glass" style={{
            maxWidth: 700,
            margin: '0 auto',
            borderRadius: 28,
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: 24,
              background: 'linear-gradient(135deg, #00C9A7, #059669)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.2rem', margin: '0 auto 1.5rem',
              boxShadow: '0 8px 32px rgba(0, 201, 167, 0.25)',
            }}>
              🦴
            </div>

            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#EDF0EC',
              marginBottom: '1rem',
            }}>
              Comece sua jornada na Fisioterapia
            </h2>

            <p style={{
              color: '#80A098',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: 500,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
              Inscreva-se agora e tenha acesso completo a todos os 6 módulos,
              suporte com IA, simulados CREFITO e certificado de conclusão.
            </p>

            {enviado ? (
              <div style={{
                padding: '1.5rem',
                background: 'rgba(0, 201, 167, 0.06)',
                borderRadius: 16,
                border: '1px solid rgba(0, 201, 167, 0.15)',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
                <p style={{ color: '#00C9A7', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Inscrição recebida com sucesso!
                </p>
                <p style={{ color: '#80A098', fontSize: '0.88rem' }}>
                  Enviaremos seu acesso por e-mail em instantes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ maxWidth: 440, margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(0, 201, 167, 0.12)',
                      borderRadius: 12,
                      padding: '14px 18px',
                      color: '#EDF0EC',
                      fontSize: '0.95rem',
                      width: '100%',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#00C9A7'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 201, 167, 0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(0, 201, 167, 0.12)',
                      borderRadius: 12,
                      padding: '14px 18px',
                      color: '#EDF0EC',
                      fontSize: '0.95rem',
                      width: '100%',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#00C9A7'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 201, 167, 0.1)' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0, 201, 167, 0.12)'; e.currentTarget.style.boxShadow = 'none' }}
                    required
                  />
                  <button type="submit" style={{
                    ...gradBtn,
                    justifyContent: 'center',
                    width: '100%',
                    padding: '16px 32px',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 201, 167, 0.3)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    Quero me matricular
                  </button>
                </div>
                <p style={{ color: '#80A098', fontSize: '0.78rem', marginTop: '1rem', opacity: 0.7 }}>
                  🔒 Seus dados estão seguros. Não enviaremos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{
        borderTop: '1px solid rgba(0, 201, 167, 0.06)',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{ ...containerStyle }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🦴</span>
            <span style={{ fontWeight: 700, color: '#EDF0EC' }}>
              SaúdeGPT <span style={{ color: '#00C9A7' }}>Fisioterapia</span>
            </span>
          </div>
          <p style={{ color: '#80A098', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} SaúdeGPT — Todos os direitos reservados.
          </p>
          <p style={{ color: '#80A098', fontSize: '0.78rem', marginTop: '0.5rem', opacity: 0.6 }}>
            Curso de Fisioterapia com suporte de Inteligência Artificial.
          </p>
        </div>
      </footer>
    </main>
  )
}
