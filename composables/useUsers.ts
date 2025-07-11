import type { User } from '~/types';

/**
 * 使用者資料相關的 composable
 */
export const useUsers = () => {
    const { get, post, put, delete: del } = useApi();

    /**
     * 獲取所有使用者
     */
    const getUsers = async () => {
        const { data, error } = await useFetch<User[]>('/users', {
            baseURL: 'https://jsonplaceholder.typicode.com',
            key: 'users',
        });

        return {
            users: data,
            error,
        };
    };

    /**
     * 根據 ID 獲取單一使用者
     * @param id - 使用者 ID
     */
    const getUserById = async (id: number) => {
        const { data, error } = await useFetch<User>(`/users/${id}`, {
            baseURL: 'https://jsonplaceholder.typicode.com',
            key: `user-${id}`,
        });

        return {
            user: data,
            error,
        };
    };

    /**
     * 建立新使用者
     * @param userData - 使用者資料
     */
    const createUser = async (userData: Omit<User, 'id'>) => {
        try {
            const newUser = await post<User>('/users', userData);
            return { user: newUser, error: null };
        } catch (error) {
            return { user: null, error };
        }
    };

    /**
     * 更新使用者資料
     * @param id - 使用者 ID
     * @param userData - 更新的使用者資料
     */
    const updateUser = async (id: number, userData: Partial<User>) => {
        try {
            const updatedUser = await put<User>(`/users/${id}`, userData);
            return { user: updatedUser, error: null };
        } catch (error) {
            return { user: null, error };
        }
    };

    /**
     * 刪除使用者
     * @param id - 使用者 ID
     */
    const deleteUser = async (id: number) => {
        try {
            await del(`/users/${id}`);
            return { success: true, error: null };
        } catch (error) {
            return { success: false, error };
        }
    };

    return {
        getUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser,
    };
};
