import type { Post, Comment } from '~/types';

/**
 * 文章資料相關的 composable
 */
export const usePosts = () => {
    const { get, post, put, delete: del } = useApi();

    /**
     * 獲取所有文章
     */
    const getPosts = async () => {
        const { data, error } = await useFetch<Post[]>('/posts', {
            baseURL: 'https://jsonplaceholder.typicode.com',
            key: 'posts',
        });

        return {
            posts: data,
            error,
        };
    };

    /**
     * 根據 ID 獲取單一文章
     * @param id - 文章 ID
     */
    const getPostById = async (id: number) => {
        const { data, error } = await useFetch<Post>(`/posts/${id}`, {
            baseURL: 'https://jsonplaceholder.typicode.com',
            key: `post-${id}`,
        });

        return {
            post: data,
            error,
        };
    };

    /**
     * 根據使用者 ID 獲取文章
     * @param userId - 使用者 ID
     */
    const getPostsByUserId = async (userId: number) => {
        const { data, error } = await useFetch<Post[]>(`/posts?userId=${userId}`, {
            baseURL: 'https://jsonplaceholder.typicode.com',
            key: `posts-user-${userId}`,
        });

        return {
            posts: data,
            error,
        };
    };

    /**
     * 獲取文章的評論
     * @param postId - 文章 ID
     */
    const getCommentsByPostId = async (postId: number) => {
        const { data, error } = await useFetch<Comment[]>(`/posts/${postId}/comments`, {
            baseURL: 'https://jsonplaceholder.typicode.com',
            key: `comments-post-${postId}`,
        });

        return {
            comments: data,
            error,
        };
    };

    /**
     * 建立新文章
     * @param postData - 文章資料
     */
    const createPost = async (postData: Omit<Post, 'id'>) => {
        try {
            const newPost = await post<Post>('/posts', postData);
            return { post: newPost, error: null };
        } catch (error) {
            return { post: null, error };
        }
    };

    /**
     * 更新文章
     * @param id - 文章 ID
     * @param postData - 更新的文章資料
     */
    const updatePost = async (id: number, postData: Partial<Post>) => {
        try {
            const updatedPost = await put<Post>(`/posts/${id}`, postData);
            return { post: updatedPost, error: null };
        } catch (error) {
            return { post: null, error };
        }
    };

    /**
     * 刪除文章
     * @param id - 文章 ID
     */
    const deletePost = async (id: number) => {
        try {
            await del(`/posts/${id}`);
            return { success: true, error: null };
        } catch (error) {
            return { success: false, error };
        }
    };

    return {
        getPosts,
        getPostById,
        getPostsByUserId,
        getCommentsByPostId,
        createPost,
        updatePost,
        deletePost,
    };
};
