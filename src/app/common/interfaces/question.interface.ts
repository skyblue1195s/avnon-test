export interface IQuestion {
    question?: string;
    type?: 'paragraphy' | 'checkbox';
    answer?: any;
}
export interface IAnswer {
    id?: string;
    value?: string
}
