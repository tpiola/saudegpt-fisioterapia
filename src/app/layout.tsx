import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaúdeGPT',
  description: 'Plataforma EAD Multi-Curso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
