'use client'

import { useState } from 'react'

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

  return (
    <main className="bg-animated" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="glass" style={{
        padding: '2.5rem 2rem',
        borderRadius: '1.5rem',
        maxWidth: '520px',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #D4A843, #F0D68A)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            margin: '0 auto 1rem',
            boxShadow: '0 8px 32px rgba(212, 168, 67, 0.25)',
          }}>
            🦵
          </div>
          <h1 className="text-gold" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>
            SaúdeGPT Fisioterapia
          </h1>
          <p style={{ color: '#8899AA', fontSize: '0.9rem' }}>
            Curso de Fisioterapia
          </p>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="construction-icon" style={{ fontSize: '3rem' }}>🚧</span>
        </div>

        <h2 style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '0.75rem',
          color: '#fff',
        }}>
          Em breve — Aguarde
        </h2>

        <p style={{
          textAlign: 'center',
          color: '#8899AA',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
        }}>
          O <strong style={{ color: '#D4A843' }}>SaúdeGPT Fisioterapia</strong> é o curso completo 
          de Fisioterapia com inteligência artificial. Domine traumato-ortopedia, 
          neurológica, respiratória, gerontologia e muito mais com suporte de IA.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
        }}>
          <span style={{
            background: 'rgba(212, 168, 67, 0.1)',
            border: '1px solid rgba(212, 168, 67, 0.2)',
            borderRadius: 20,
            padding: '4px 14px',
            fontSize: '0.8rem',
            color: '#D4A843',
            fontWeight: 600,
          }}>
            CREFITO
          </span>
        </div>

        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
        }}>
          <a
            href="https://saudegpt.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#F0D68A',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            💊 Curso de Farmácia → saudegpt.com
          </a>
        </div>

        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(212, 168, 67, 0.3), transparent)',
          marginBottom: '1.5rem',
        }} />

        {enviado ? (
          <div style={{
            textAlign: 'center',
            padding: '1.5rem',
            background: 'rgba(212, 168, 67, 0.08)',
            borderRadius: 16,
            border: '1px solid rgba(212, 168, 67, 0.2)',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
            <p style={{ color: '#F0D68A', fontWeight: 600, fontSize: '1rem' }}>
              Recebemos seu interesse!
            </p>
            <p style={{ color: '#8899AA', fontSize: '0.85rem', marginTop: '0.5rem' }}>
              Aviseremos quando o curso de Fisioterapia estiver disponível.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p style={{
              textAlign: 'center',
              color: '#AABBCC',
              fontSize: '0.85rem',
              marginBottom: '1rem',
              fontWeight: 500,
            }}>
              📋 Cadastre-se para ser avisado
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="input-glass"
                required
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-glass"
                required
              />
              <button type="submit" className="btn-gold" style={{ width: '100%' }}>
                Quero saber quando lançar
              </button>
            </div>
          </form>
        )}
      </div>

      <p style={{
        marginTop: '2rem',
        color: '#556677',
        fontSize: '0.8rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        © {new Date().getFullYear()} SaúdeGPT Fisioterapia — Todos os direitos reservados
      </p>
    </main>
  )
}
