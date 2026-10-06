// src/app/actions.ts
"use server";

import { revalidatePath } from "next/cache";

// In-memory data store (simplified for this example)
let todos: { id: number; text: string }[] = [];
let nextId = 1;

export async function addTodo(formData: FormData) {
  const text = formData.get("todo") as string;
  if (text && text.trim()) {
    todos.push({ id: nextId++, text: text.trim() });
    revalidatePath("/"); // Refresh the page data
  }
}

export async function deleteTodo(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
  revalidatePath("/");
}

export async function getTodos() {
  return todos;
}
