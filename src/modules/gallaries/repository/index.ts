import { useHttpClient } from "@/core/hooks/useHttpClient";
import { AxiosRequestConfig, type AxiosInstance } from "axios";

export default class GalleriesService {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = useHttpClient();
  }

  async getGallaries(payload: any,config?: AxiosRequestConfig) {
    return await this.httpClient.post("/Galleries/Search",payload, config);
  }

  async getGallery(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.get(`/galleries/${id}`, config);
  }

  async createGallery(payload: any, config?: AxiosRequestConfig) {
    return await this.httpClient.post("/galleries", payload, config);
  }

  async updateGallery(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.put(`/galleries/${id}`, config);
  }

  async deleteGallery(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.delete(`/galleries/${id}`, config);
  }
}
