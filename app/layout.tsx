import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="siteconcierge-config" strategy="beforeInteractive">
          {`
            window.SiteConciergeConfig = {
              assistantId: '07126998-31c8-494c-ac28-96741e60d8d6',
              supabaseUrl: 'https://cidnxkkrlobjfmprbnmp.supabase.co',
              supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZG54a2tybG9iamZtcHJibm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzODc5MDcsImV4cCI6MjA5Mzk2MzkwN30.OiWZcuymRTLdGgmAVs6zm89npLypXfZE886oiIHo4OI'
            };
          `}
        </Script>
        <Script src="/widget/siteconcierge-widget.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
