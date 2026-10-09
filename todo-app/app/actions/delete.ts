'use server';
import { revalidatePath } from "next/cache";
import { deleteTodo as removeTodo } from "../lib/todos";

export async function deleteTodoAction(id: string): Promise<string | null> {
    if(!id){
        return 'Todo id is required';
    }

    const success = await removeTodo(id);
    if(!success){
        return "Failed to delete todo";
    }
    revalidatePath("/");
    return null;
}

export async function deleteTodo(id: string): Promise<void> {
    await deleteTodoAction(id);
}
