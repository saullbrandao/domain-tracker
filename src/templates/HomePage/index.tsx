import dynamic from 'next/dynamic'
import { DetailsSection } from 'components/DetailsSection'
import { Form } from 'components/Form'
import { Header } from 'components/Header'
import { useMemo } from 'react'
import { Toaster } from 'react-hot-toast'

export function HomePage() {
  const MapSection = useMemo(
    () =>
      dynamic(() => import('components/MapSection'), {
        ssr: false,
      }),
    [],
  )

  return (
    <main className="flex flex-col h-screen w-screen">
      <Toaster />
      <section className="flex flex-col gap-3 items-center bg-pattern-bg bg-cover w-full h-64 relative ">
        <Header />
        <Form />
        <DetailsSection />
      </section>
      <MapSection />
    </main>
  )
}
