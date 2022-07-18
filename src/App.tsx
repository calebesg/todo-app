import { FormCreateTodo } from './components/FormCreateTodo'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header>
        <FormCreateTodo />
      </Header>

      <main>
        <p>Content!!!</p>
      </main>
    </>
  )
}
