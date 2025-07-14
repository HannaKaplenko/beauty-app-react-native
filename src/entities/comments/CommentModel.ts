import { create } from 'zustand'
import { IComment } from './IComment'

interface ICommentStore {
    comments: IComment[],
    addComment: (newComment: IComment) => void;
    getCommentsById: (productId: number) => IComment[];
}

export const CommentStore = create<ICommentStore>((set, get) => ({
    comments: [],

    addComment: (newComment: IComment) =>
        set((state) => ({
            comments: [...state.comments, newComment],
        })),

    getCommentsById: (productId: number) =>
        get().comments.filter((comment) => comment.productId === productId),
}))