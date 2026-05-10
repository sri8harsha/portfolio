import type { Metadata } from 'next'
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.SiteConciergeConfig = {
                assistantId: '07126998-31c8-494c-ac28-96741e60d8d6',
                supabaseUrl: 'https://cidnxkkrlobjfmprbnmp.supabase.co',
                supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZG54a2tybG9iamZtcHJibm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzODc5MDcsImV4cCI6MjA5Mzk2MzkwN30.OiWZcuymRTLdGgmAVs6zm89npLypXfZE886oiIHo4OI'
              };
            `,
          }}
        />
        <iframe
          src="https://cidnxkkrlobjfmprbnmp.supabase.co/storage/v1/object/public/widgets/siteconcierge-widget.html"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            border: 'none',
            zIndex: 999999,
            borderRadius: '50%',
          }}
          id="siteconcierge-widget-frame"
        />
      </body>
    </html>
  )
}
