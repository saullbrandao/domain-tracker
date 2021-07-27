import { Button } from 'components/Button'
import { Input } from 'components/Input'

export function Form() {
  return (
    <form className="flex justify-between w-5/6">
      <Input />
      <Button />
    </form>
  )
}
