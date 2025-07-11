<template>
    <div class="space-y-8">
        <!-- 頁面標題 -->
        <div class="text-center">
            <h1 class="text-4xl font-bold text-purple-600 mb-4">CSR 客戶端渲染範例</h1>
            <p class="text-xl text-gray-600">此頁面使用 CSR 模式，在客戶端動態渲染內容</p>
        </div>

        <!-- 即時時間顯示 -->
        <Card class="p-6">
            <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">即時時間</h2>
                <div class="text-3xl font-mono text-purple-600 mb-2">{{ currentTime }}</div>
                <p class="text-sm text-gray-600">這個時間每秒更新一次，展示客戶端動態渲染的能力</p>
                <div class="mt-4 p-3 bg-purple-50 rounded-lg">
                    <p class="text-sm text-purple-800">
                        <Icon name="lucide:clock" class="h-4 w-4 inline mr-1" />
                        即時更新，無需重新載入頁面
                    </p>
                </div>
            </div>
        </Card>

        <!-- 互動式計數器 -->
        <Card class="p-6">
            <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">互動式計數器</h2>
                <div class="text-6xl font-bold text-purple-600 mb-4">{{ count }}</div>
                <div class="space-x-4">
                    <Button @click="decrement" variant="outline">
                        <Icon name="lucide:minus" class="h-4 w-4 mr-2" />
                        減少
                    </Button>
                    <Button @click="increment">
                        <Icon name="lucide:plus" class="h-4 w-4 mr-2" />
                        增加
                    </Button>
                    <Button @click="reset" variant="outline">
                        <Icon name="lucide:refresh-cw" class="h-4 w-4 mr-2" />
                        重置
                    </Button>
                </div>
            </div>
        </Card>

        <!-- 動態資料載入 -->
        <div class="space-y-6">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-gray-900">動態資料載入 (CSR)</h2>
                <Button @click="fetchTodos" :disabled="loading">
                    <Icon name="lucide:refresh-cw" class="h-4 w-4 mr-2" :class="{ 'animate-spin': loading }" />
                    {{ loading ? '載入中...' : '重新載入' }}
                </Button>
            </div>

            <div v-if="loading" class="text-center py-8">
                <LoadingSpinner />
                <p class="text-gray-600 mt-2">載入中...</p>
            </div>
            <div v-else-if="error" class="text-center py-8">
                <ErrorMessage :message="error" />
            </div>
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card
                    v-for="todo in todos"
                    :key="todo.id"
                    class="p-4 cursor-pointer transition-colors"
                    :class="{ 'bg-green-50 border-green-200': todo.completed }"
                    @click="toggleTodo(todo)"
                >
                    <div class="flex items-center space-x-3">
                        <div class="flex-shrink-0">
                            <Icon
                                :name="todo.completed ? 'lucide:check-circle' : 'lucide:circle'"
                                class="h-5 w-5"
                                :class="todo.completed ? 'text-green-600' : 'text-gray-400'"
                            />
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3
                                class="font-medium text-gray-900"
                                :class="{ 'line-through text-gray-500': todo.completed }"
                            >
                                {{ todo.title }}
                            </h3>
                            <p class="text-sm text-gray-500">待辦事項 #{{ todo.id }}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

        <!-- CSR 特點說明 -->
        <Card class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">CSR 特點</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-semibold text-purple-600 mb-3">優點</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                            <span>高度互動，可以創建豐富的使用者體驗</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                            <span>即時更新，無需重新載入頁面</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                            <span>減少伺服器負載，邏輯在客戶端執行</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:check" class="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                            <span>適合複雜的單頁應用程式</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-orange-600 mb-3">考慮事項</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:alert-triangle" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>SEO 較差，搜尋引擎難以爬取動態內容</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:alert-triangle" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>首次載入較慢，需要下載 JavaScript</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:alert-triangle" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>依賴客戶端 JavaScript 環境</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:alert-triangle" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>可能存在載入狀態和白屏問題</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>

        <!-- 適用場景 -->
        <Card class="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">適用場景</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-lg font-semibold text-purple-600 mb-3">理想場景</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:settings" class="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                            <span>管理後台和儀表板</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:message-circle" class="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                            <span>即時聊天和通訊應用</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:edit" class="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                            <span>線上編輯器和創作工具</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:gamepad-2" class="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                            <span>遊戲和互動式應用</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-orange-600 mb-3">不適合場景</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li class="flex items-start">
                            <Icon name="lucide:search" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>需要 SEO 優化的內容網站</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:book-open" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>部落格和新聞網站</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:shopping-cart" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>電商產品展示頁面</span>
                        </li>
                        <li class="flex items-start">
                            <Icon name="lucide:building" class="h-4 w-4 text-orange-500 mr-2 mt-0.5" />
                            <span>公司官網和著陸頁面</span>
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
    title: 'CSR 範例 - 客戶端渲染',
    description: '展示 Nuxt 3 CSR 客戶端渲染的特點和實際應用',
    ogTitle: 'CSR 範例 - 客戶端渲染',
    ogDescription: '展示 Nuxt 3 CSR 客戶端渲染的特點和實際應用',
});

// 設定 CSR 模式 - 禁用 SSR
// eslint-disable-next-line no-undef
definePageMeta({
    ssr: false,
});

// 響應式資料
const currentTime = ref('');
const count = ref(0);
const todos = ref([]);
const loading = ref(false);
const error = ref('');

// 更新時間
const updateTime = () => {
    currentTime.value = new Date().toLocaleString('zh-TW', {
        timeZone: 'Asia/Taipei',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
};

// 計數器方法
const increment = () => {
    count.value++;
};

const decrement = () => {
    count.value--;
};

const reset = () => {
    count.value = 0;
};

// 載入待辦事項
const fetchTodos = async () => {
    loading.value = true;
    error.value = '';

    try {
        // 模擬載入延遲
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await $fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
        todos.value = response;
    } catch (err) {
        error.value = err.message || '載入失敗';
    } finally {
        loading.value = false;
    }
};

// 切換待辦事項狀態
const toggleTodo = (todo) => {
    todo.completed = !todo.completed;
};

// 組件掛載時執行
onMounted(async () => {
    // 初始化時間
    updateTime();

    // 每秒更新時間
    setInterval(updateTime, 1000);

    // 載入初始資料
    await fetchTodos();
});
</script>
