/**
 * 基本的 API composable
 * 提供通用的 API 請求功能
 */
export const useApi = () => {
    // 基本的 API 網址
    const baseURL = 'https://jsonplaceholder.typicode.com';

    /**
     * 通用的 GET 請求函數
     * @param endpoint - API 端點
     * @param options - 請求選項
     */
    const get = async <T>(endpoint: string, options?: any) => {
        try {
            const data = await $fetch<T>(`${baseURL}${endpoint}`, {
                method: 'GET',
                ...options,
            });
            return data;
        } catch (error) {
            console.error('API GET 請求失敗:', error);
            throw error;
        }
    };

    /**
     * 通用的 POST 請求函數
     * @param endpoint - API 端點
     * @param body - 請求主體
     * @param options - 請求選項
     */
    const post = async <T>(endpoint: string, body?: any, options?: any) => {
        try {
            const data = await $fetch<T>(`${baseURL}${endpoint}`, {
                method: 'POST',
                body,
                ...options,
            });
            return data;
        } catch (error) {
            console.error('API POST 請求失敗:', error);
            throw error;
        }
    };

    /**
     * 通用的 PUT 請求函數
     * @param endpoint - API 端點
     * @param body - 請求主體
     * @param options - 請求選項
     */
    const put = async <T>(endpoint: string, body?: any, options?: any) => {
        try {
            const data = await $fetch<T>(`${baseURL}${endpoint}`, {
                method: 'PUT',
                body,
                ...options,
            });
            return data;
        } catch (error) {
            console.error('API PUT 請求失敗:', error);
            throw error;
        }
    };

    /**
     * 通用的 DELETE 請求函數
     * @param endpoint - API 端點
     * @param options - 請求選項
     */
    const del = async <T>(endpoint: string, options?: any) => {
        try {
            const data = await $fetch<T>(`${baseURL}${endpoint}`, {
                method: 'DELETE',
                ...options,
            });
            return data;
        } catch (error) {
            console.error('API DELETE 請求失敗:', error);
            throw error;
        }
    };

    return {
        get,
        post,
        put,
        delete: del,
    };
};
