// src/app/page.tsx
import { addTodo, deleteTodo, getTodos } from "./actions";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">My Todo App</h1>

      {/* Add Todo Form */}
      <form action={addTodo} className="flex gap-2 mb-8">
        <input
          type="text"
          name="todo"
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
          >
            <span>{todo.text}</span>
            <form action={deleteTodo.bind(null, todo.id)}>
              <button type="submit" className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </form>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="text-gray-500 text-center py-4">
            No todos yet. Add one above!
          </li>
        )}
      </ul>
    </main>
  );
}
