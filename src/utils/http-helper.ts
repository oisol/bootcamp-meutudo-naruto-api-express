interface HttpResponde {
  statusCode: number;
  body: any;
};

export const ok = async (data: any): Promise<HttpResponde> => {
  return {
    statusCode: 200,
    body: data
  }
}

export const noContent = async (data: any): Promise<HttpResponde> => {
  return {
    statusCode: 204,
    body: null
  }
}
