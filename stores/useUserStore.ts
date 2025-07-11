import type { User } from '~/types';

/**
 * 使用者狀態管理 Store
 */
export const useUserStore = defineStore('user', () => {
    // 狀態定義
    const users = ref<User[]>([]);
    const currentUser = ref<User | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    // Getters
    const getUserCount = computed(() => users.value.length);

    const getUserById = (id: number) => {
        return users.value.find((user) => user.id === id);
    };

    const getAuthenticatedUser = computed(() => currentUser.value);

    const isAuthenticated = computed(() => currentUser.value !== null);

    // Actions
    const setLoading = (loadingState: boolean) => {
        loading.value = loadingState;
    };

    const setError = (errorMessage: string | null) => {
        error.value = errorMessage;
    };

    const setUsers = (userList: User[]) => {
        users.value = userList;
    };

    const setCurrentUser = (user: User | null) => {
        currentUser.value = user;
    };

    const addUser = (user: User) => {
        users.value.push(user);
    };

    const updateUser = (updatedUser: User) => {
        const index = users.value.findIndex((user) => user.id === updatedUser.id);
        if (index !== -1) {
            users.value[index] = updatedUser;
        }
    };

    const removeUser = (userId: number) => {
        users.value = users.value.filter((user) => user.id !== userId);
    };

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const { users: fetchedUsers, error: fetchError } = await useUsers().getUsers();

            if (fetchError.value) {
                setError(fetchError.value.message);
            } else if (fetchedUsers.value) {
                setUsers(fetchedUsers.value);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : '載入使用者失敗');
        } finally {
            setLoading(false);
        }
    };

    const fetchUserById = async (id: number) => {
        setLoading(true);
        setError(null);

        try {
            const { user, error: fetchError } = await useUsers().getUserById(id);

            if (fetchError.value) {
                setError(fetchError.value.message);
            } else if (user.value) {
                // 如果用戶不在列表中，添加到列表
                const existingUser = users.value.find((u) => u.id === id);
                if (!existingUser) {
                    addUser(user.value);
                }
                return user.value;
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : '載入使用者失敗');
        } finally {
            setLoading(false);
        }
    };

    const login = async (userId: number) => {
        try {
            const user = await fetchUserById(userId);
            if (user) {
                setCurrentUser(user);
                return user;
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : '登入失敗');
        }
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const reset = () => {
        users.value = [];
        currentUser.value = null;
        loading.value = false;
        error.value = null;
    };

    return {
        // 狀態
        users: readonly(users),
        currentUser: readonly(currentUser),
        loading: readonly(loading),
        error: readonly(error),
        // Getters
        getUserCount,
        getUserById,
        getAuthenticatedUser,
        isAuthenticated,
        // Actions
        setLoading,
        setError,
        setUsers,
        setCurrentUser,
        addUser,
        updateUser,
        removeUser,
        fetchUsers,
        fetchUserById,
        login,
        logout,
        reset,
    };
});
