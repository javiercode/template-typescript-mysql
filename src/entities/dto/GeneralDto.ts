
export interface MessageResponse {
    success: boolean,
    message: string,
    code: number,
    data?:any,
    total?:number
}

export interface ListPaginate {
    data: any[],
    count: number
}
