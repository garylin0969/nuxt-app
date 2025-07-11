<template>
    <div class="space-y-8">
        <!-- 頁面標題 -->
        <div class="text-center">
            <h1 class="text-4xl font-bold text-blue-600 mb-4">ISR 增量靜態再生範例</h1>
            <p class="text-xl text-gray-600">此頁面使用 ISR 模式，結合靜態生成和動態更新</p>
        </div>

        <!-- 重新驗證時間顯示 -->
        <Card class="p-6">
            <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">頁面生成時間</h2>
                <div class="text-3xl font-mono text-blue-600 mb-2">{{ generatedTime }}</div>
                <p class="text-sm text-gray-600">這個時間戳顯示頁面的靜態生成時間，每 60 秒重新驗證一次</p>
                <div class="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p class="text-sm text-blue-800">
                        <Icon name="lucide:info" class="h-4 w-4 inline mr-1" />
                        頁面會在背景自動重新生成，確保內容保持相對新鮮
                    </p>
                </div>
            </div>
        </Card>

        <!-- 文章資料展示 -->
        <div class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">文章列表 (ISR)</h2>
            <div v-if="pending" class="text-center py-8">
                <LoadingSpinner />
                <p class="text-gray-600 mt-2">載入中...</p>
            </div>
            <div v-else-if="error" class="text-center py-8">
                <ErrorMessage :message="error.message" />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PostCard v-for="post in posts" :key="post.id" :post="post" />
            </div>
        </div>

        <!-- ISR 特點說明 -->
        <Card class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">ISR 特點</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-semibold text-blue-600 mb-3">優點</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                            <span>結合靜態生成的速度和動態更新的靈活性</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                            <span>可以設定重新驗證時間，平衡效能和資料新鮮度</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                            <span>減少伺服器負載，大部分請求都是靜態資源</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                            <span>SEO 友善，搜尋引擎可以直接爬取內容</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-orange-600 mb-3">適用場景</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:globe" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>電商產品頁面，需要定期更新價格和庫存</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:newspaper" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>新聞文章，需要保持內容相對新鮮</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:trending-up" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>社交媒體內容，需要定期更新互動數據</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:calendar" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>活動頁面，需要更新報名狀態</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

        <!-- 重新驗證說明 -->
        <Card class="p-6 bg-gradient-to-r from-blue-50 to-cyan-50">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">重新驗證機制</h2>
            <div class="space-y-4">
                <div class="flex items-start space-x-4">
                    <div
                        class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >
                        1
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">初始靜態生成</h3>
                        <p class="text-gray-600">頁面在建置時或首次請求時生成靜態 HTML</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div
                        class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >
                        2
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">服務靜態版本</h3>
                        <p class="text-gray-600">在重新驗證間隔內，所有使用者都會看到相同的靜態版本</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div
                        class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >
                        3
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">背景重新生成</h3>
                        <p class="text-gray-600">到達重新驗證時間後，在背景重新生成新版本</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div
                        class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >
                        4
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">更新靜態版本</h3>
                        <p class="text-gray-600">新版本生成完成後，後續請求將看到更新的內容</p>
                    </div>
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
    title: 'ISR 範例 - 增量靜態再生',
    description: '展示 Nuxt 3 ISR 增量靜態再生的特點和實際應用',
    ogTitle: 'ISR 範例 - 增量靜態再生',
    ogDescription: '展示 Nuxt 3 ISR 增量靜態再生的特點和實際應用',
});

// 設定 ISR 模式 - 每 60 秒重新驗證
// eslint-disable-next-line no-undef
definePageMeta({
    isr: 60, // 60 秒重新驗證間隔
});

// 生成時間戳
const generatedTime = new Date().toLocaleString('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

// 使用 ISR 模式獲取文章資料
const {
    data: posts,
    pending,
    error,
} = await useAsyncData('posts-isr', () => {
    return $fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
});
</script>
