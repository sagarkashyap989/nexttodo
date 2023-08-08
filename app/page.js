import AddTodoForm from "./addTodoForm"
import { TodoItem } from "@/components/serverComponent"
import {cookies} from 'next/headers'

const fetchTodo = async (token) => {

  try {
      const res = await fetch(`${process.env.SERVER_URL}/api/mytask`, {
          cache: 'no-cache',
        headers:{
          cookie:`token=${token}`
        }
      })

      console.log(res, 'res1')
      const data = await res.json();
      console.log(data, 'data1')
      if (!data.tasks) return [];

      return data.tasks;
  } catch (error) {
    console.log(error)  
    return []


  }

}




export default async function  Home() {

const token = cookies().get('token')?.value;
  const tasks = await fetchTodo(token);
console.log(tasks, 'tasks3')

  return (
  <div className="container">
  <AddTodoForm/>
    <section className="todosContainer">
      {
        tasks.map((ele) =>{
   return (       
    <TodoItem title={ele.title} description={ele.description} id={ele._id} key={ele._id } isCompleted={ele.isCompleted} />
)
        })
      }

         
    </section>
  </div>
  )
}
