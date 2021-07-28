import dynamic from 'next/dynamic'
import { DetailsSection } from 'components/DetailsSection'
import { Form } from 'components/Form'
import { Header } from 'components/Header'
import { useMemo } from 'react'

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
      <section className="flex flex-col gap-6 items-center bg-pattern-bg bg-cover h-72 lg:h-56 relative">
        <Header />
        <Form />
        <DetailsSection />
      </section>
      <MapSection />
    </main>
  )
}
