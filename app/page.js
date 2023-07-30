import AddTodoForm from "./addTodoForm"
import { TodoItem } from "@/components/serverComponent"

export default function Home() {
  return (
  <div className="container">
  <AddTodoForm/>
    <section className="todosContainer">
      
      <TodoItem title={'hello wolrd'} description={'lorem Epsum wllah busi hafuol'} id={3} isCompleted={true} />

    </section>
  </div>
  )
}
