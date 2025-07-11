/**
 * 使用者相關類型定義
 */
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

/**
 * 文章相關類型定義
 */
export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

/**
 * 評論相關類型定義
 */
export interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

/**
 * 相簿相關類型定義
 */
export interface Album {
    id: number;
    userId: number;
    title: string;
}

/**
 * 照片相關類型定義
 */
export interface Photo {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

/**
 * 待辦事項相關類型定義
 */
export interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

/**
 * 路由元資料類型定義
 */
export interface RouteMetadata {
    title: string;
    description?: string;
    requiresAuth?: boolean;
    layout?: string;
}

/**
 * API 回應類型定義
 */
export interface ApiResponse<T> {
    data: T;
    loading: boolean;
    error: string | null;
}
