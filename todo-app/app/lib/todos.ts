import { getTodosCollection } from "./db"
import { Todo, CreateTodoInput, UpdateTodoInput } from "../type/todo"
import { ObjectId } from "mongodb";
import { unstable_rethrow } from "next/navigation";

export async function fetchTodos(): Promise<Todo[]> {
    try {
    const collection = await getTodosCollection();

   const todos = await collection.find().sort({ createdAt: -1 }).toArray();

   return todos.map((todo) => ({
    _id: todo._id.toString(),
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
    }));

    } 
    catch (error) {
        unstable_rethrow(error);
        console.error("Error fetching todos:", error);
        return [];
    }

}

export async function fetchTodoById(id: string): Promise<Todo | null> {
    try {
        const collection = await getTodosCollection();
        const todo = await collection.findOne({ _id: new ObjectId(id) });

        if(!todo){
            return null;
        }
        return {
            _id: todo._id.toString(),
            title: todo.title,
            completed: todo.completed,
            createdAt: todo.createdAt,
            updatedAt: todo.updatedAt,
        };
    }
    catch (error) {
        unstable_rethrow(error);
        console.error("Error fetching todo by id:", error);
        return null;
    }
}

export async function createTodo(todo: CreateTodoInput): Promise<string | null> {

    try {
        const collection = await getTodosCollection();

        const result = await collection.insertOne({
            title: todo.title,
            completed: false,
            createdAt: todo.createdAt ?? new Date(),
        });

        return result.insertedId.toString();
    }
    catch (error) {
        unstable_rethrow(error);
        console.error("Error creating todo:", error);
        return null;
    }
}

export async function updateTodo(id: string, todo: UpdateTodoInput): Promise<boolean> {
    try {
        const collection = await getTodosCollection();
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: todo });
        return result.modifiedCount > 0;
    }
    catch (error) {
        unstable_rethrow(error);
        console.error("Error updating todo:", error);
        return false;
    }
}

export async function deleteTodo(id: string): Promise<boolean> {
    try {
        const collection = await getTodosCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0;
    }
    catch (error) {
        unstable_rethrow(error);
        console.error("Error deleting todo:", error);
        return false;
    }
}
