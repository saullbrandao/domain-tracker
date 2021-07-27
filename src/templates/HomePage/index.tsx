import { Form } from 'components/Form'
import { Header } from 'components/Header'

export function HomePage() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center bg-pattern-bg">
      <Header />
      <Form />
    </main>
  )
}
