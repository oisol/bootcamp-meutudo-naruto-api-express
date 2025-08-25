import { HttpResponse } from "../models/HttpResponse";

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data
  }
}

export const created = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: data
  }
}

export const noContent = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null
  }
}

export const badRequest = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: data
  }
}
