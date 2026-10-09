export type Todo = {
    _id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    updatedAt?: Date;
}

export type CreateTodoInput = {
    title: string;
    createdAt?: Date;
}

export type UpdateTodoInput = {
    title?: string;
    completed?: boolean;
}

export type DeleteTodoInput = {
    id: string;
}