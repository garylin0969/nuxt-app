<template>
    <div class="space-y-8">
        <!-- 頁面標題 -->
        <div class="text-center">
            <h1 class="text-4xl font-bold text-green-600 mb-4">SSR 伺服器端渲染範例</h1>
            <p class="text-xl text-gray-600">此頁面使用 SSR 模式，每次請求時在伺服器端生成 HTML</p>
        </div>

        <!-- 時間戳顯示 -->
        <Card class="p-6">
            <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">請求時間戳</h2>
                <div class="text-3xl font-mono text-green-600 mb-2">{{ serverTime }}</div>
                <p class="text-sm text-gray-600">這個時間戳是在伺服器端生成的，每次刷新都會更新</p>
                <Button @click="refresh" class="mt-4">
                    <Icon name="lucide:refresh-cw" class="h-4 w-4 mr-2" />
                    刷新頁面
                </Button>
            </div>
        </Card>

        <!-- 用戶資料展示 -->
        <div class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">用戶資料 (SSR)</h2>
            <div v-if="pending" class="text-center py-8">
                <LoadingSpinner />
                <p class="text-gray-600 mt-2">載入中...</p>
            </div>
            <div v-else-if="error" class="text-center py-8">
                <ErrorMessage :message="error.message" />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <UserCard v-for="user in users" :key="user.id" :user="user" />
            </div>
        </div>

        <!-- SSR 特點說明 -->
        <Card class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">SSR 特點</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-semibold text-green-600 mb-3">優點</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>SEO 友善，搜尋引擎可以直接爬取內容</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>首屏載入速度快，使用者能立即看到內容</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>資料即時更新，每次請求都是最新資料</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <span>適合個人化內容和動態資料</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-orange-600 mb-3">考慮事項</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:alert-triangle" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>伺服器負載較高，需要處理每次請求</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:alert-triangle" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>回應時間取決於伺服器和 API 效能</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:alert-triangle" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>需要更多的伺服器資源</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

        <!-- 返回按鈕 -->
        <div class="text-center">
            <NuxtLink to="/rendering">
                <Button variant="outline">
                    <Icon name="lucide:arrow-left" class="h-4 w-4 mr-2" />
                    返回渲染模式說明
                </Button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
// 設定頁面元資料
useSeoMeta({
    title: 'SSR 範例 - 伺服器端渲染',
    description: '展示 Nuxt 3 SSR 伺服器端渲染的特點和實際應用',
    ogTitle: 'SSR 範例 - 伺服器端渲染',
    ogDescription: '展示 Nuxt 3 SSR 伺服器端渲染的特點和實際應用',
});

// 生成伺服器時間戳
const serverTime = new Date().toLocaleString('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

// 使用 SSR 模式獲取用戶資料
const {
    data: users,
    pending,
    error,
} = await useAsyncData('users-ssr', () => {
    return $fetch('https://jsonplaceholder.typicode.com/users');
});

// 刷新頁面方法
const refresh = () => {
    navigateTo('/rendering/ssr', { external: true });
};
</script>
