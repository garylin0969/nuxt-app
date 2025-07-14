# Nuxt 3 學習範例

> 從 React/Next.js 到 Vue/Nuxt 的完整學習指南

這是一個專為有 React 或 Next.js 經驗的開發者設計的 Nuxt 3 學習範例專案。透過實際的程式碼範例，展示如何使用 Nuxt 3 建立現代化的 Web 應用程式。

## 🚀 專案特色

-   **🎯 針對 React 開發者設計**：提供從 React/Next.js 到 Vue/Nuxt 的完整轉換指南
-   **📚 完整的學習範例**：包含 SSR、ISR、SSG、CSR 等不同渲染模式
-   **🎨 現代化 UI**：使用 Shadcn/ui 元件庫和 Tailwind CSS
-   **🏗️ 原子設計架構**：遵循 Atomic Design 原則的元件組織
-   **💪 TypeScript 支援**：完整的類型定義和型別安全
-   **🔧 表單驗證**：使用 vee-validate 和 zod 進行強大的表單驗證
-   **🗄️ 狀態管理**：使用 Pinia 進行狀態管理
-   **🌐 API 整合**：與 JSONPlaceholder API 整合的完整範例

## 📦 技術棧

### 核心技術

-   **Nuxt 3** - 現代化的 Vue 框架
-   **Vue 3** - 漸進式 JavaScript 框架
-   **TypeScript** - 型別安全的 JavaScript 超集
-   **Tailwind CSS** - 實用優先的 CSS 框架

### UI 元件庫

-   **Shadcn/ui** - 美觀且可客製化的 UI 元件
-   **Lucide Icons** - 精美的圖示庫
-   **Tailwind CSS** - 響應式設計

### 狀態管理與資料獲取

-   **Pinia** - Vue 生態系統的狀態管理庫
-   **useFetch** - Nuxt 3 內建的資料獲取工具
-   **$fetch** - 基於 ofetch 的 HTTP 用戶端

### 表單與驗證

-   **vee-validate** - 強大的表單驗證庫
-   **zod** - 類型安全的 schema 驗證
-   **@vee-validate/zod** - vee-validate 的 zod 整合

### 開發工具

-   **ESLint** - 程式碼品質檢查
-   **Prettier** - 程式碼格式化
-   **@nuxt/devtools** - 開發者工具

## 🏁 快速開始

### 環境需求

-   Node.js 18.0.0 或更高版本
-   pnpm (推薦) 或 npm

### 安裝步驟

1. **克隆專案**

```bash
git clone <repository-url>
cd nuxt-app
```

2. **安裝依賴**

```bash
pnpm install
```

3. **啟動開發伺服器**

```bash
pnpm dev
```

4. **開啟瀏覽器**
   開啟 http://localhost:3000 查看專案

### 建置專案

```bash
# 建置用於生產環境
pnpm build

# 預覽建置結果
pnpm preview

# 生成靜態站點
pnpm generate
```

## 📁 專案結構

```
nuxt-app/
├── assets/                    # 靜態資源
│   └── css/
│       └── main.css          # 全域樣式
├── components/               # Vue 元件
│   ├── atoms/               # 原子元件
│   │   ├── loading-spinner.vue
│   │   └── error-message.vue
│   ├── molecules/           # 分子元件
│   │   ├── user-card.vue
│   │   └── post-card.vue
│   ├── organisms/           # 有機體元件
│   ├── templates/           # 模板元件
│   └── ui/                  # Shadcn 元件
│       ├── button/
│       ├── card/
│       ├── input/
│       └── ...
├── composables/             # 可組合函數
│   ├── useApi.ts           # API 呼叫
│   ├── useUsers.ts         # 使用者相關
│   └── usePosts.ts         # 文章相關
├── layouts/                 # 布局元件
│   └── default.vue         # 預設布局
├── pages/                   # 頁面元件
│   ├── index.vue           # 首頁 (SSR)
│   ├── users/              # 使用者相關頁面
│   │   └── index.vue       # 使用者列表 (SSR)
│   ├── posts/              # 文章相關頁面
│   │   └── index.vue       # 文章列表 (CSR)
│   ├── rendering/          # 渲染範例
│   │   └── index.vue       # 渲染模式說明
│   └── forms/              # 表單範例
│       └── index.vue       # 表單驗證範例
├── stores/                  # Pinia 狀態管理
│   └── useUserStore.ts     # 使用者狀態
├── types/                   # TypeScript 類型定義
│   └── index.ts            # 通用類型
├── lib/                     # 工具庫
│   └── utils.ts            # 通用工具函數
├── nuxt.config.ts          # Nuxt 配置
├── package.json            # 專案依賴
├── tailwind.config.js      # Tailwind CSS 配置
├── components.json         # Shadcn 元件配置
└── README.md               # 專案說明文件
```

## 🎯 功能特色

### 1. 多種渲染模式

專案展示了 Nuxt 3 的四種主要渲染模式：

#### SSR (Server-Side Rendering)

-   **範例頁面**：`/users` - 使用者列表頁面
-   **特色**：每次請求時在伺服器端生成 HTML
-   **適用場景**：需要 SEO 優化和即時資料的頁面

#### CSR (Client-Side Rendering)

-   **範例頁面**：`/posts` - 文章列表頁面
-   **特色**：在客戶端動態載入和渲染內容
-   **適用場景**：高度互動的應用程式

#### SSG (Static Site Generation)

-   **特色**：在建置時預先生成靜態 HTML
-   **適用場景**：內容不經常變動的頁面

#### ISR (Incremental Static Regeneration)

-   **特色**：結合靜態生成和動態更新
-   **適用場景**：需要快速載入但內容會定期更新的頁面

### 2. 原子設計架構

專案採用 Atomic Design 原則組織元件：

-   **Atoms (原子)**：最小的 UI 元件

    -   `loading-spinner.vue` - 載入動畫
    -   `error-message.vue` - 錯誤訊息

-   **Molecules (分子)**：由原子組成的簡單元件

    -   `user-card.vue` - 使用者卡片
    -   `post-card.vue` - 文章卡片

-   **Organisms (有機體)**：複雜的 UI 區塊
-   **Templates (模板)**：頁面級別的元件布局
-   **Pages (頁面)**：具體的頁面實現

### 3. 狀態管理

使用 Pinia 進行狀態管理：

```typescript
// stores/useUserStore.ts
export const useUserStore = defineStore('user', () => {
    const users = ref<User[]>([]);
    const currentUser = ref<User | null>(null);

    const fetchUsers = async () => {
        // 載入使用者資料
    };

    return {
        users,
        currentUser,
        fetchUsers,
    };
});
```

### 4. API 整合

提供完整的 API 整合範例：

```typescript
// composables/useApi.ts
export const useApi = () => {
  const get = async <T>(endpoint: string) => {
    return await $fetch<T>(`https://jsonplaceholder.typicode.com${endpoint}`)
  }

  return { get, post, put, delete }
}
```

### 5. 表單驗證

使用 vee-validate 和 zod 進行強大的表單驗證：

```vue
<script setup>
import { z } from 'zod';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

const validationSchema = toTypedSchema(
    z.object({
        name: z.string().min(2, '姓名至少需要 2 個字元'),
        email: z.string().email('請輸入有效的 Email 格式'),
        password: z.string().min(8, '密碼至少需要 8 個字元'),
    })
);

const { handleSubmit, errors } = useForm({ validationSchema });
</script>
```

## 🔧 配置說明

### Nuxt 配置

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@pinia/nuxt', 'shadcn-nuxt'],
    css: ['~/assets/css/main.css'],
    shadcn: {
        prefix: '',
        componentDir: './components/ui',
    },
});
```

### Shadcn 配置

```json
// components.json
{
    "style": "default",
    "rsc": false,
    "tsx": false,
    "tailwind": {
        "config": "tailwind.config.js",
        "css": "assets/css/main.css",
        "baseColor": "slate",
        "cssVariables": true
    },
    "aliases": {
        "components": "~/components",
        "utils": "~/lib/utils"
    }
}
```

## 🌟 學習指南

### 從 React 到 Vue

如果您來自 React 背景，以下是一些關鍵的對應關係：

| React         | Vue                     | 說明         |
| ------------- | ----------------------- | ------------ |
| `useState`    | `ref` / `reactive`      | 狀態管理     |
| `useEffect`   | `watch` / `watchEffect` | 副作用處理   |
| `useMemo`     | `computed`              | 計算屬性     |
| `useCallback` | `computed`              | 函數記憶化   |
| `useContext`  | `provide` / `inject`    | 依賴注入     |
| `zustand`     | `useStore` (Pinia)      | 複雜狀態管理 |

### 從 Next.js 到 Nuxt

| Next.js                     | Nuxt                       | 說明             |
| --------------------------- | -------------------------- | ---------------- |
| `async function Page()`     | `definePageMeta`           | 頁面配置         |
| `generateMetadata`          | `useSeoMeta`               | SEO 元資料       |
| `generateStaticParams`      | `defineStaticPaths`        | 靜態路徑生成     |
| `useRouter`                 | `useRouter`                | 路由操作         |
| `next/image`                | `NuxtImg`                  | 圖片最佳化       |
| `fetch` in Server Component | `useFetch` (server: true)  | 伺服器端資料獲取 |
| `fetch` in Client Component | `useFetch` (server: false) | 客戶端資料獲取   |
| `loading.tsx`               | `NuxtLoadingIndicator`     | 載入狀態         |
| `error.tsx`                 | `error.vue`                | 錯誤處理         |
| `layout.tsx`                | `layouts/default.vue`      | 布局定義         |

### 資料獲取比較

Nuxt 3 提供了三種主要的資料獲取方式：

#### 1. useFetch

```typescript
// 在元件掛載時自動獲取資料
const { data, pending, error, refresh } = await useFetch('/api/posts');
```

特點：

-   預設在元件初始化時立即執行
-   支援 SSR（伺服器端渲染）和 hydration
-   自動處理載入和錯誤狀態
-   內建資料快取和請求去重
-   提供響應式的資料和狀態
-   適合用於頁面或元件級別的資料獲取

#### 2. useLazyFetch

```typescript
// 延遲加載資料，需要手動觸發
const { data, pending, error, refresh } = useLazyFetch(() => `/api/search?q=${searchQuery.value}`);

// 在事件處理程序中手動觸發
const handleSearch = () => {
    refresh();
};
```

特點：

-   不會在元件初始化時自動執行
-   適用於條件式資料載入
-   可以透過 refresh() 手動觸發
-   支援動態 URL 和參數
-   適合用於分頁、搜尋等使用者互動場景

#### 3. $fetch

```typescript
// 直接發送 HTTP 請求
const handleSubmit = async () => {
    try {
        const response = await $fetch('/api/posts', {
            method: 'POST',
            body: formData,
        });
        // 手動處理成功回應
    } catch (error) {
        // 手動處理錯誤
    }
};
```

特點：

-   輕量級的 HTTP 客戶端
-   不包含額外的狀態管理
-   需要手動處理載入和錯誤狀態
-   適合用於事件處理程序或非元件邏輯

#### 客戶端資料獲取最佳實踐

```vue
<script setup>
// 1. 頁面必需的初始資料：使用 useFetch
const { data: posts } = await useFetch('/api/posts', {
    // 可以設定快取策略
    cache: 'memory',
});

// 2. 使用者互動觸發的資料載入：使用 useLazyFetch
const { data: searchResults, refresh: refreshSearch } = useLazyFetch(() => ({
    url: '/api/search',
    query: { q: searchQuery.value },
}));

// 3. 表單提交或其他 HTTP 請求：使用 $fetch
const handleSubmit = async () => {
    try {
        await $fetch('/api/posts', {
            method: 'POST',
            body: formData,
        });
        // 處理成功
    } catch (error) {
        // 處理錯誤
    }
};
</script>

<template>
    <!-- 展示主要內容 -->
    <div v-if="posts">
        <PostList :posts="posts" />
    </div>

    <!-- 搜尋功能 -->
    <div>
        <input v-model="searchQuery" @input="refreshSearch" />
        <div v-if="searchResults">
            <SearchResults :results="searchResults" />
        </div>
    </div>

    <!-- 表單提交 -->
    <form @submit.prevent="handleSubmit">
        <!-- 表單內容 -->
    </form>
</template>
```

#### 選擇建議

1. **使用 useFetch 當：**

    - 需要在元件載入時就獲取資料（如頁面主要內容）
    - 需要 SSR 支援和自動 hydration
    - 需要自動的載入狀態和錯誤處理
    - 需要資料快取和請求去重

2. **使用 useLazyFetch 當：**

    - 需要延遲載入資料（如次要內容）
    - 需要根據使用者互動載入資料（如搜尋、篩選）
    - 需要動態 URL 或查詢參數
    - 需要手動控制資料重新載入

3. **使用 $fetch 當：**
    - 在事件處理程序中發送請求（如表單提交）
    - 在 Pinia store 中進行資料獲取
    - 需要完全控制請求的生命週期
    - 不需要響應式資料和自動狀態管理

這樣的區分可以讓您的應用程式：

-   有更好的效能（避免不必要的請求）
-   更好的使用者體驗（適時載入資料）
-   更好的狀態管理（自動處理載入狀態）
-   更好的程式碼組織（依據用途選擇適當的 API）

### 渲染模式設定

Nuxt 3 提供了多種方式來控制頁面的渲染模式：

#### 1. 全域設定（nuxt.config.ts）

```typescript
export default defineNuxtConfig({
    // 預設為 'universal'
    ssr: true, // 啟用 SSR
    // 靜態網站生成
    nitro: {
        prerender: {
            routes: ['/about', '/blog/[id]'],
        },
    },
});
```

#### 2. 頁面級別設定

```typescript
// pages/about.vue
definePageMeta({
    // SSR（預設）
    ssr: true,

    // CSR（禁用 SSR）
    ssr: false,

    // SSG（靜態生成）
    static: true,

    // ISR（增量式靜態再生成）
    static: true,
    revalidate: 60, // 60 秒後重新驗證
});
```

#### 3. 路由規則（nuxt.config.ts）

```typescript
export default defineNuxtConfig({
    routeRules: {
        // SSR - 動態渲染
        '/admin/**': { ssr: true },

        // CSR - 僅客戶端渲染
        '/dashboard/**': { ssr: false },

        // SSG - 靜態生成
        '/blog/**': { static: true },

        // ISR - 增量式靜態再生成
        '/products/**': {
            static: true,
            revalidate: 60, // 60 秒後重新驗證
        },

        // 快取策略
        '/api/**': {
            cache: {
                maxAge: 60, // 快取 60 秒
            },
        },
    },
});
```

#### 渲染模式判定邏輯

1. **SSR（伺服器端渲染）**

    - 預設模式
    - `ssr: true` 且未設定 `static: true`
    - 適用於需要即時資料的頁面

2. **CSR（客戶端渲染）**

    - 設定 `ssr: false`
    - 適用於高度互動且不需要 SEO 的頁面

3. **SSG（靜態網站生成）**

    - 設定 `static: true`
    - 在建置時生成靜態 HTML
    - 適用於內容固定的頁面

4. **ISR（增量式靜態再生成）**
    - 設定 `static: true` 和 `revalidate`
    - 結合 SSG 的效能和動態內容的即時性
    - 適用於需要定期更新的頁面

#### 最佳實踐建議

-   **動態內容為主的頁面**：使用 SSR

    ```typescript
    definePageMeta({ ssr: true });
    ```

-   **管理後台/儀表板**：使用 CSR

    ```typescript
    definePageMeta({ ssr: false });
    ```

-   **行銷/文檔頁面**：使用 SSG

    ```typescript
    definePageMeta({ static: true });
    ```

-   **電商產品頁面**：使用 ISR
    ```typescript
    definePageMeta({
        static: true,
        revalidate: 3600, // 每小時更新一次
    });
    ```

## 📚 API 參考

### Composables

#### useApi()

通用的 API 呼叫工具

```typescript
const { get, post, put, delete } = useApi()
```

#### useUsers()

使用者相關的 API 操作

```typescript
const { getUsers, getUserById, createUser, updateUser, deleteUser } = useUsers();
```

#### usePosts()

文章相關的 API 操作

```typescript
const { getPosts, getPostById, createPost, updatePost, deletePost } = usePosts();
```

### Stores

#### useUserStore()

使用者狀態管理

```typescript
const userStore = useUserStore();
await userStore.fetchUsers();
```

### Components

#### UserCard

使用者資訊卡片元件

```vue
<UserCard :user="user" @view-posts="handleViewPosts" @edit-user="handleEditUser" />
```

#### PostCard

文章卡片元件

```vue
<PostCard
    :post="post"
    @view-comments="handleViewComments"
    @edit-post="handleEditPost"
    @delete-post="handleDeletePost"
/>
```

## 🚀 部署

### Vercel 部署

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署到 Vercel
vercel
```

### Netlify 部署

```bash
# 建置專案
pnpm build

# 部署到 Netlify
netlify deploy --prod --dir=.output/public
```

### Docker 部署

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
```
