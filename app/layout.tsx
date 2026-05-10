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
        <Script id="siteconcierge-widget" strategy="afterInteractive">
          {`
            (function() {
              var script = document.createElement('script');
              script.src = 'https://cidnxkkrlobjfmprbnmp.supabase.co/storage/v1/object/public/widget/siteconcierge-widget.js';
              script.async = true;
              script.onload = function() {
                SiteConcierge.init({
                  assistantId: 'f295006c-c1d3-44a1-abd9-c7612f9074e0',
                  supabaseUrl: 'https://cidnxkkrlobjfmprbnmp.supabase.co',
                  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZG54a2tybG9iamZtcHJibm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzODc5MDcsImV4cCI6MjA5Mzk2MzkwN30.OiWZcuymRTLdGgmAVs6zm89npLypXfZE886oiIHo4OI'
                });
              };
              document.body.appendChild(script);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
