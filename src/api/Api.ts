import {api} from ".";
import {CommonListResponse, Faq} from "./type";


export const Api = {
    // sample api
    findAll: (page: number, size: number,) => api.get<CommonListResponse<Faq>>(`/faqs`, {
        params: {
            size, page
        }
    }),
    create: (data: { title: string, content: string, categoryId: number }) => api.post(`/faqs`, data),
}
