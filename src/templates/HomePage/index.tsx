import { DetailsSection } from 'components/DetailsSection'
import { Form } from 'components/Form'
import { Header } from 'components/Header'

export function HomePage() {
  return (
    <main>
      <section className="flex flex-col gap-6 items-center bg-pattern-bg h-72 relative">
        <Header />
        <Form />
        <DetailsSection />
      </section>
    </main>
  )
}
