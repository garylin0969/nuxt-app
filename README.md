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
| `useReducer`  | `useStore` (Pinia)      | 複雜狀態管理 |

### 從 Next.js 到 Nuxt

| Next.js              | Nuxt                       | 說明         |
| -------------------- | -------------------------- | ------------ |
| `getServerSideProps` | `useFetch` (server: true)  | SSR 資料獲取 |
| `getStaticProps`     | `useFetch` (server: false) | SSG 資料獲取 |
| `getStaticPaths`     | `generateStaticParams`     | 動態路由生成 |
| `useRouter`          | `useRouter`                | 路由操作     |
| `next/head`          | `useSeoMeta`               | SEO 設定     |
| `next/image`         | `NuxtImg`                  | 圖片最佳化   |

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

## 🤝 貢獻指南

歡迎貢獻！請遵循以下步驟：

1. Fork 專案
2. 建立特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

## 📝 許可證

本專案使用 MIT 許可證。詳細資訊請參閱 [LICENSE](LICENSE) 文件。

## 🙏 致謝

-   [Nuxt 3](https://nuxt.com/) - 強大的 Vue 框架
-   [Vue 3](https://vuejs.org/) - 漸進式 JavaScript 框架
-   [Tailwind CSS](https://tailwindcss.com/) - 實用優先的 CSS 框架
-   [Shadcn/ui](https://ui.shadcn.com/) - 美觀的 UI 元件庫
-   [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 免費的 REST API 服務

## 📞 聯絡我們

如果您有任何問題或建議，請隨時聯絡我們：

-   📧 Email: [your-email@example.com]
-   🐛 Issues: [GitHub Issues](https://github.com/your-username/nuxt-app/issues)
-   💬 討論: [GitHub Discussions](https://github.com/your-username/nuxt-app/discussions)

---

**快樂編程！** 🎉
