export interface FeedMensagemInterface {
    id: string;
    remetente: string;
    title: string;
    content: string;
    date: string;
    attachment: null | Blob | string; 
}
