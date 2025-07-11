<template>
    <div class="space-y-8">
        <!-- 頁面標題 -->
        <div class="text-center">
            <h1 class="text-4xl font-bold text-yellow-600 mb-4">SSG 靜態網站生成範例</h1>
            <p class="text-xl text-gray-600">此頁面使用 SSG 模式，在建置時預先生成靜態 HTML</p>
        </div>

        <!-- 建置時間顯示 -->
        <Card class="p-6">
            <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">建置時間</h2>
                <div class="text-3xl font-mono text-yellow-600 mb-2">{{ buildTime }}</div>
                <p class="text-sm text-gray-600">這個時間戳是在建置時生成的，除非重新建置，否則不會變動</p>
                <div class="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p class="text-sm text-yellow-800">
                        <Icon name="lucide:zap" class="h-4 w-4 inline mr-1" />
                        頁面已預先生成，載入速度極快，適合內容相對固定的頁面
                    </p>
                </div>
            </div>
        </Card>

        <!-- 靜態資料展示 -->
        <div class="space-y-6">
            <h2 class="text-2xl font-bold text-gray-900">相簿展示 (SSG)</h2>
            <div v-if="pending" class="text-center py-8">
                <LoadingSpinner />
                <p class="text-gray-600 mt-2">載入中...</p>
            </div>
            <div v-else-if="error" class="text-center py-8">
                <ErrorMessage :message="error.message" />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card v-for="album in albums" :key="album.id" class="p-4">
                    <div class="space-y-3">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Icon name="lucide:camera" class="h-5 w-5 text-yellow-600" />
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">相簿 #{{ album.id }}</h3>
                                <p class="text-sm text-gray-600">用戶 {{ album.userId }}</p>
                            </div>
                        </div>
                        <h4 class="font-medium text-gray-800">{{ album.title }}</h4>
                        <div class="flex items-center justify-between text-sm text-gray-500">
                            <span>靜態生成內容</span>
                            <Icon name="lucide:image" class="h-4 w-4" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>

        <!-- SSG 特點說明 -->
        <Card class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">SSG 特點</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-semibold text-yellow-600 mb-3">優點</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                            <span>載入速度極快，所有內容都已預先生成</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                            <span>伺服器負載極低，可以使用 CDN 加速</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                            <span>成本低廉，可以部署到靜態託管服務</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                            <span>高安全性，沒有伺服器端攻擊風險</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-orange-600 mb-3">適用場景</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:book-open" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>部落格文章和技術文件</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:building" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>公司官網和產品介紹頁面</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:image" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>作品集和展示網站</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:help-circle" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>常見問題和說明頁面</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

        <!-- 建置流程說明 -->
        <Card class="p-6 bg-gradient-to-r from-yellow-50 to-orange-50">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">建置流程</h2>
            <div class="space-y-4">
                <div class="flex items-start space-x-4">
                    <div
                        class="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >
                        1
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">資料獲取</h3>
                        <p class="text-gray-600">在建置時從 API 或文件系統獲取所需資料</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div
                        class="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >
                        2
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">頁面生成</h3>
                        <p class="text-gray-600">根據資料生成所有頁面的靜態 HTML 文件</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div
                        class="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >
                        3
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">資產最佳化</h3>
                        <p class="text-gray-600">壓縮圖片、CSS 和 JavaScript 文件</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div
                        class="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold"
                    >
                        4
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">部署上線</h3>
                        <p class="text-gray-600">將生成的靜態文件部署到 CDN 或靜態託管服務</p>
                    </div>
                </div>
            </div>
        </Card>

        <!-- 效能指標 -->
        <Card class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">效能指標</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="text-center">
                    <div class="text-3xl font-bold text-green-600 mb-2">&lt; 100ms</div>
                    <h3 class="font-semibold text-gray-900">首屏載入</h3>
                    <p class="text-sm text-gray-600">極快的載入速度</p>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <h3 class="font-semibold text-gray-900">SEO 分數</h3>
                    <p class="text-sm text-gray-600">搜尋引擎完美支援</p>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-purple-600 mb-2">$0.1</div>
                    <h3 class="font-semibold text-gray-900">月成本</h3>
                    <p class="text-sm text-gray-600">極低的託管成本</p>
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
    title: 'SSG 範例 - 靜態網站生成',
    description: '展示 Nuxt 3 SSG 靜態網站生成的特點和實際應用',
    ogTitle: 'SSG 範例 - 靜態網站生成',
    ogDescription: '展示 Nuxt 3 SSG 靜態網站生成的特點和實際應用',
});

// 設定 SSG 模式 - 預渲染此頁面
// eslint-disable-next-line no-undef
definePageMeta({
    prerender: true,
});

// 建置時間戳
const buildTime = new Date().toLocaleString('zh-TW', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

// 使用 SSG 模式獲取相簿資料
const {
    data: albums,
    pending,
    error,
} = await useAsyncData('albums-ssg', () => {
    return $fetch('https://jsonplaceholder.typicode.com/albums?_limit=12');
});
</script>
