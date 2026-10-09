'use server';
import { fetchTodoById, updateTodo } from "../lib/todos";
import { revalidatePath } from "next/cache";

export async function toggleTodo(id: string): Promise<void> {

    const todo = await fetchTodoById(id);

    if(!todo){
        return;
    }

    const success = await updateTodo(id, { completed: !todo.completed });

    if(!success){
        return;
    }

    revalidatePath("/");
}
