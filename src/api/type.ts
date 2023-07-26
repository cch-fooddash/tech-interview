export interface CommonListResponse<T> {
    contents: T[];
    totalElements: number;
    totalPages: number;
    isLast: boolean;
}

export interface Faq {
    title: string;
    content: string;
    categoryName: string;
}
