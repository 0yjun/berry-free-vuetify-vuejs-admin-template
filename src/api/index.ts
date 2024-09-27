import axios, { isAxiosError, type AxiosRequestConfig } from 'axios';
import { ref } from 'vue';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

type ConfigType = 'body' | 'header';

interface ApiConfig {
  type: ConfigType;
}

interface ApiParams {
  url: string;
  params?: object;
  config?: ApiConfig;
}

const useApi = () => {
  const data = ref(null);
  const error = ref();
  const isError = ref(false);
  const isLoading = ref(false);

  const handleRequest = async (method: 'get' | 'post' | 'put' | 'delete', { url, params = {}, config = { type: 'body' } }: ApiParams) => {
    isLoading.value = false;

    try {
      let reqestConfig: AxiosRequestConfig = {};
      if (config.type === 'body') {
        reqestConfig = { data: params };
      } else if (config.type === 'header') {
        reqestConfig = { params: params };
      }

      const response = await apiClient.request({ method, url, ...reqestConfig });
      console.log(response);
      data.value = response.data;
    } catch (err) {
      if (isAxiosError(err)) {
        error.value = err;
      }
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };
  const useGet = (apiParams: ApiParams) => handleRequest('get', apiParams);
  const usePost = (apiParams: ApiParams) => handleRequest('post', apiParams);
  const usePut = (apiParams: ApiParams) => handleRequest('put', apiParams);
  const useDelete = (apiParams: ApiParams) => handleRequest('delete', apiParams);

  return { data, isError, error, isLoading, useGet, usePost, usePut, useDelete };
};

export default useApi;
