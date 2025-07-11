<template>
    <div class="space-y-6">
        <!-- 頁面標題 -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold text-gray-900">文章列表</h1>
                <p class="text-gray-600 mt-2">瀏覽所有文章內容</p>
            </div>
            <Badge variant="outline" class="text-purple-600 border-purple-600"> CSR 渲染 </Badge>
        </div>

        <!-- 搜尋和篩選 -->
        <Card class="p-6">
            <div class="flex flex-col sm:flex-row gap-4">
                <div class="flex-1">
                    <Input v-model="searchQuery" placeholder="搜尋文章標題或內容..." class="w-full" />
                </div>
                <div class="flex gap-2">
                    <select v-model="selectedUserId" class="px-3 py-2 border border-gray-300 rounded-md text-sm">
                        <option value="">所有使用者</option>
                        <option v-for="user in users" :key="user.id" :value="user.id">
                            {{ user.name }}
                        </option>
                    </select>
                    <Button
                        variant="outline"
                        size="sm"
                        :disabled="!searchQuery && !selectedUserId"
                        @click="clearFilters"
                    >
                        清除篩選
                    </Button>
                </div>
            </div>
        </Card>

        <!-- 文章統計 -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card class="p-6">
                <div class="flex items-center">
                    <Icon name="lucide:file-text" class="h-8 w-8 text-blue-500 mr-3" />
                    <div>
                        <p class="text-sm text-gray-600">總文章數</p>
                        <p class="text-2xl font-bold">{{ filteredPosts.length }}</p>
                    </div>
                </div>
            </Card>

            <Card class="p-6">
                <div class="flex items-center">
                    <Icon name="lucide:users" class="h-8 w-8 text-green-500 mr-3" />
                    <div>
                        <p class="text-sm text-gray-600">作者數</p>
                        <p class="text-2xl font-bold">{{ uniqueAuthors.length }}</p>
                    </div>
                </div>
            </Card>

            <Card class="p-6">
                <div class="flex items-center">
                    <Icon name="lucide:type" class="h-8 w-8 text-purple-500 mr-3" />
                    <div>
                        <p class="text-sm text-gray-600">平均字數</p>
                        <p class="text-2xl font-bold">{{ averageWordCount }}</p>
                    </div>
                </div>
            </Card>

            <Card class="p-6">
                <div class="flex items-center">
                    <Icon name="lucide:message-circle" class="h-8 w-8 text-orange-500 mr-3" />
                    <div>
                        <p class="text-sm text-gray-600">總評論數</p>
                        <p class="text-2xl font-bold">{{ totalComments }}</p>
                    </div>
                </div>
            </Card>
        </div>

        <!-- 載入狀態 -->
        <div v-if="pending" class="space-y-4">
            <LoadingSpinner size="lg" text="載入文章中..." container-class="py-12" />
        </div>

        <!-- 文章列表 -->
        <div v-else-if="filteredPosts.length > 0" class="space-y-6">
            <PostCard
                v-for="post in paginatedPosts"
                :key="post.id"
                :post="post"
                @view-comments="viewComments"
                @edit-post="editPost"
                @delete-post="deletePost"
            />

            <!-- 分頁 -->
            <div class="flex justify-center mt-8">
                <div class="flex gap-2">
                    <Button variant="outline" size="sm" :disabled="currentPage === 1" @click="previousPage">
                        上一頁
                    </Button>

                    <span class="px-4 py-2 text-sm text-gray-600">
                        第 {{ currentPage }} 頁 / 共 {{ totalPages }} 頁
                    </span>

                    <Button variant="outline" size="sm" :disabled="currentPage === totalPages" @click="nextPage">
                        下一頁
                    </Button>
                </div>
            </div>
        </div>

        <!-- 沒有找到文章 -->
        <div v-else class="text-center py-12">
            <Icon name="lucide:file-x" class="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">沒有找到文章</h3>
            <p class="text-gray-600">嘗試調整搜尋條件或重新整理頁面</p>
        </div>

        <!-- 錯誤訊息 -->
        <ErrorMessage v-if="error" :message="error.message" title="載入失敗" show-close @close="error = null" />
    </div>
</template>

<script setup>
// 設定頁面為 CSR 渲染（使用 process.client 確保在客戶端載入）;

// 設定頁面元資料
useSeoMeta({
    title: '文章列表 - Nuxt 3 學習範例',
    description: '瀏覽所有文章內容，展示 CSR 渲染效果',
    ogTitle: '文章列表 - Nuxt 3 學習範例',
    ogDescription: '瀏覽所有文章內容，展示 CSR 渲染效果',
});

// 使用 useLazyFetch 載入資料（CSR）
const {
    data: posts,
    pending: postsPending,
    error: postsError,
} = await useLazyFetch('/posts', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    key: 'posts-list',
    server: false,
});

const {
    data: users,
    pending: usersPending,
    error: usersError,
} = await useLazyFetch('/users', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    key: 'users-for-posts',
    server: false,
});

// 整合載入狀態和錯誤
const pending = computed(() => postsPending.value || usersPending.value);
const error = computed(() => postsError.value || usersError.value);

// 搜尋和篩選
const searchQuery = ref('');
const selectedUserId = ref('');

// 分頁
const currentPage = ref(1);
const postsPerPage = 6;

// 清除篩選
const clearFilters = () => {
    searchQuery.value = '';
    selectedUserId.value = '';
};

// 篩選文章
const filteredPosts = computed(() => {
    if (!posts.value) return [];

    let filtered = [...posts.value];

    // 根據搜尋條件篩選
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
            (post) => post.title.toLowerCase().includes(query) || post.body.toLowerCase().includes(query)
        );
    }

    // 根據使用者 ID 篩選
    if (selectedUserId.value) {
        filtered = filtered.filter((post) => post.userId === parseInt(selectedUserId.value));
    }

    return filtered;
});

// 分頁資料
const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage));

const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage;
    const end = start + postsPerPage;
    return filteredPosts.value.slice(start, end);
});

// 分頁操作
const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

// 統計數據
const uniqueAuthors = computed(() => {
    if (!posts.value) return [];
    const authors = posts.value.map((post) => post.userId);
    return [...new Set(authors)];
});

const averageWordCount = computed(() => {
    if (!posts.value || posts.value.length === 0) return 0;

    const totalWords = posts.value.reduce((sum, post) => {
        return sum + post.body.split(' ').length;
    }, 0);

    return Math.round(totalWords / posts.value.length);
});

// 模擬評論數據
const totalComments = computed(() => {
    if (!posts.value) return 0;
    return posts.value.length * 5; // 每篇文章平均 5 個評論
});

// 查看評論
const viewComments = (postId) => {
    navigateTo(`/posts/${postId}/comments`);
};

// 編輯文章
const editPost = (postId) => {
    navigateTo(`/posts/${postId}/edit`);
};

// 刪除文章
const deletePost = (postId) => {
    // 實際應用中這裡會呼叫 API 刪除
    // eslint-disable-next-line no-console
    console.log('刪除文章:', postId);
};

// 監聽篩選變化，重設分頁
watch([searchQuery, selectedUserId], () => {
    currentPage.value = 1;
});
</script>
