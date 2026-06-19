import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaúdeGPT Fisioterapia — Curso Completo com IA',
  description: 'Curso de Fisioterapia com inteligência artificial. Traumato-Ortopedia, Neurológica, Respiratória, Gerontologia e mais. Preparatório CREFITO.',
  keywords: ['fisioterapia', 'curso', 'CREFITO', 'saudegpt', 'traumato-ortopedia', 'fisioterapia neurológica', 'fisioterapia respiratória'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
