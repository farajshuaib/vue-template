import { useHttpClient } from "@/core/hooks/useHttpClient";
import { AxiosRequestConfig, type AxiosInstance } from "axios";

export default class GalleriesService {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = useHttpClient();
  }

  async getGallaries(config: AxiosRequestConfig) {
    return await this.httpClient.get("/gallaries", config);
  }

  async getGallery(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.get(`/gallaries/${id}`, config);
  }

  async createGallery(payload: any, config?: AxiosRequestConfig) {
    return await this.httpClient.post("/gallaries", payload, config);
  }

  async updateGallery(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.put(`/gallaries/${id}`, config);
  }

  async deleteGallery(config: AxiosRequestConfig, id: string) {
    return await this.httpClient.delete(`/gallaries/${id}`, config);
  }
}
