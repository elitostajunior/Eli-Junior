enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export interface PostInputDTO {
    photo: string,
    description: string,
    createdAt: Date,
    type: POST_TYPES
}