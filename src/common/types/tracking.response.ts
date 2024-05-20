export interface TrackingProduct {
  id: string;
  name: string;
  currentPrice: number;
  link: string;
  img: string;
}

export interface TrackingResponse {
  data: TrackingProduct[] | TrackingProduct,
  ok: boolean;
  message?: string;
}