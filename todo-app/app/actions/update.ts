'use server';
import { redirect, unstable_rethrow } from "next/navigation";
import { fetchTodoById, updateTodo } from "../lib/todos";
import { revalidatePath } from "next/cache";


export async function updateTodoAction(formData: FormData): Promise<void> {
    const id = formData.get('id') as string;
    const existingTodo = await fetchTodoById(id);
    try {
        if(!existingTodo){
            return;
        }
        const title = formData.get('title') as string;
        if(!title || title.trim() === ''){
            return;
        }
      
        const success = await updateTodo(id, { title: title.trim() });
        if(!success){
            return;
        }
        revalidatePath('/');
    } catch (error) {
        unstable_rethrow(error);
        console.error('Error updating todo:', error);
        return;
    }
    redirect('/');
}
