<template>
    <div class="space-y-8">
        <!-- 歡迎區塊 -->
        <section class="text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">歡迎使用 Nuxt 3 學習範例</h1>
            <p class="text-xl text-gray-600 mb-8">從 React/Next.js 到 Vue/Nuxt 的完整學習指南</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card class="p-6 text-center">
                    <Icon name="lucide:zap" class="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 class="text-lg font-semibold mb-2">SSR</h3>
                    <p class="text-sm text-gray-600">伺服器端渲染</p>
                </Card>

                <Card class="p-6 text-center">
                    <Icon name="lucide:refresh-cw" class="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 class="text-lg font-semibold mb-2">ISR</h3>
                    <p class="text-sm text-gray-600">增量靜態再生</p>
                </Card>

                <Card class="p-6 text-center">
                    <Icon name="lucide:file-text" class="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 class="text-lg font-semibold mb-2">SSG</h3>
                    <p class="text-sm text-gray-600">靜態網站生成</p>
                </Card>

                <Card class="p-6 text-center">
                    <Icon name="lucide:globe" class="h-12 w-12 text-purple-500 mx-auto mb-4" />
                    <h3 class="text-lg font-semibold mb-2">CSR</h3>
                    <p class="text-sm text-gray-600">客戶端渲染</p>
                </Card>
            </div>
        </section>

        <!-- 功能介紹 -->
        <section class="bg-white rounded-lg shadow-sm p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">主要功能</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg font-semibold mb-3 flex items-center">
                        <Icon name="lucide:users" class="mr-2 h-5 w-5 text-blue-500" />
                        使用者管理
                    </h3>
                    <ul class="space-y-2 text-gray-600">
                        <li>• 使用者列表展示</li>
                        <li>• 使用者詳細資料</li>
                        <li>• 使用者資料編輯</li>
                        <li>• 使用者搜尋功能</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3 flex items-center">
                        <Icon name="lucide:file-text" class="mr-2 h-5 w-5 text-green-500" />
                        文章管理
                    </h3>
                    <ul class="space-y-2 text-gray-600">
                        <li>• 文章列表展示</li>
                        <li>• 文章內容展示</li>
                        <li>• 評論功能</li>
                        <li>• 文章分類和標籤</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3 flex items-center">
                        <Icon name="lucide:palette" class="mr-2 h-5 w-5 text-purple-500" />
                        UI 元件
                    </h3>
                    <ul class="space-y-2 text-gray-600">
                        <li>• Shadcn/ui 元件庫</li>
                        <li>• 原子設計架構</li>
                        <li>• 響應式設計</li>
                        <li>• 深色模式支援</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3 flex items-center">
                        <Icon name="lucide:code" class="mr-2 h-5 w-5 text-orange-500" />
                        技術特色
                    </h3>
                    <ul class="space-y-2 text-gray-600">
                        <li>• TypeScript 支援</li>
                        <li>• Pinia 狀態管理</li>
                        <li>• 表單驗證</li>
                        <li>• API 整合</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 快速開始 -->
        <section class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">快速開始</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <NuxtLink to="/users" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <Icon name="lucide:users" class="h-8 w-8 text-blue-500 mb-3" />
                    <h3 class="text-lg font-semibold mb-2">探索使用者</h3>
                    <p class="text-gray-600">查看使用者列表和詳細資料</p>
                </NuxtLink>

                <NuxtLink to="/posts" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <Icon name="lucide:file-text" class="h-8 w-8 text-green-500 mb-3" />
                    <h3 class="text-lg font-semibold mb-2">瀏覽文章</h3>
                    <p class="text-gray-600">閱讀文章和評論</p>
                </NuxtLink>

                <NuxtLink to="/rendering" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <Icon name="lucide:layers" class="h-8 w-8 text-purple-500 mb-3" />
                    <h3 class="text-lg font-semibold mb-2">渲染範例</h3>
                    <p class="text-gray-600">了解不同的渲染模式</p>
                </NuxtLink>

                <NuxtLink to="/forms" class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <Icon name="lucide:clipboard-check" class="h-8 w-8 text-orange-500 mb-3" />
                    <h3 class="text-lg font-semibold mb-2">表單驗證</h3>
                    <p class="text-gray-600">學習表單驗證和資料處理</p>
                </NuxtLink>
            </div>
        </section>

        <!-- 即時資料展示 -->
        <section class="bg-white rounded-lg shadow-sm p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">即時資料</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-semibold mb-3">最新使用者</h3>
                    <div v-if="pending" class="space-y-4">
                        <div v-for="i in 3" :key="i" class="animate-pulse">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-gray-200 rounded-full" />
                                <div class="flex-1 space-y-2">
                                    <div class="h-4 bg-gray-200 rounded w-3/4" />
                                    <div class="h-3 bg-gray-200 rounded w-1/2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="space-y-4">
                        <div v-for="user in users?.slice(0, 3)" :key="user.id" class="flex items-center space-x-3">
                            <div
                                class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold"
                            >
                                {{ user.name.charAt(0) }}
                            </div>
                            <div>
                                <p class="font-medium">{{ user.name }}</p>
                                <p class="text-sm text-gray-600">{{ user.email }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">最新文章</h3>
                    <div v-if="pending" class="space-y-4">
                        <div v-for="i in 3" :key="i" class="animate-pulse">
                            <div class="space-y-2">
                                <div class="h-4 bg-gray-200 rounded w-full" />
                                <div class="h-3 bg-gray-200 rounded w-2/3" />
                            </div>
                        </div>
                    </div>
                    <div v-else class="space-y-4">
                        <div v-for="post in posts?.slice(0, 3)" :key="post.id">
                            <h4 class="font-medium">{{ post.title }}</h4>
                            <p class="text-sm text-gray-600">{{ post.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// 設定頁面元資料
useSeoMeta({
    title: 'Nuxt 3 學習範例',
    description: '從 React/Next.js 到 Vue/Nuxt 的完整學習指南',
    ogTitle: 'Nuxt 3 學習範例',
    ogDescription: '從 React/Next.js 到 Vue/Nuxt 的完整學習指南',
    ogImage: '/og-image.png',
    twitterCard: 'summary_large_image',
});

// 使用 useFetch 載入資料（SSR）
const { data: users, pending: usersPending } = await useFetch('https://jsonplaceholder.typicode.com/users');
const { data: posts, pending: postsPending } = await useFetch('https://jsonplaceholder.typicode.com/posts');

// 整合載入狀態
const pending = computed(() => usersPending.value || postsPending.value);
</script>
