'use server';

import { redirect } from "next/navigation";
import { createTodo } from "../lib/todos";
import { revalidatePath } from "next/cache";

export async function createTodoAction(
  _prevState: { error: string } | null,
  formData: FormData,
): Promise<{ error: string } | null> {
  const title = formData.get('title') as string;
  if(!title || title.trim() === ''){
    return { error: 'Title is required' };
  }
  const todoId = await createTodo({ title: title.trim() });
  if(!todoId){
    return { error: 'Failed to create todo' };
  }
  revalidatePath('/');
  redirect('/');
}
