export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div className="glass" style={{
        padding: '3rem',
        borderRadius: '1.5rem',
        maxWidth: '600px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #D4A843, #F0D68A)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🚧 Em Construção
        </h1>
        <p style={{ color: '#8899AA', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Plataforma EAD Multi-Curso do ecossistema tpiola.
          Em breve aqui.
        </p>
      </div>
    </main>
  )
}
