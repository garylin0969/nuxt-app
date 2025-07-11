<template>
    <div class="space-y-6">
        <!-- 頁面標題 -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold text-gray-900">使用者列表</h1>
                <p class="text-gray-600 mt-2">瀏覽所有使用者的基本資訊</p>
            </div>
            <Badge variant="outline" class="text-green-600 border-green-600"> SSR 渲染 </Badge>
        </div>

        <!-- 搜尋和篩選 -->
        <Card class="p-6">
            <div class="flex flex-col sm:flex-row gap-4">
                <div class="flex-1">
                    <Input v-model="searchQuery" placeholder="搜尋使用者姓名或 email..." class="w-full" />
                </div>
                <div class="flex gap-2">
                    <Button variant="outline" size="sm" :disabled="!searchQuery" @click="clearSearch">
                        清除搜尋
                    </Button>
                    <Button variant="outline" size="sm" :disabled="pending" @click="refreshUsers">
                        <Icon name="lucide:refresh-cw" class="h-4 w-4 mr-2" />
                        重新整理
                    </Button>
                </div>
            </div>
        </Card>

        <!-- 使用者統計 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card class="p-6">
                <div class="flex items-center">
                    <Icon name="lucide:users" class="h-8 w-8 text-blue-500 mr-3" />
                    <div>
                        <p class="text-sm text-gray-600">總使用者數</p>
                        <p class="text-2xl font-bold">{{ filteredUsers.length }}</p>
                    </div>
                </div>
            </Card>

            <Card class="p-6">
                <div class="flex items-center">
                    <Icon name="lucide:building" class="h-8 w-8 text-green-500 mr-3" />
                    <div>
                        <p class="text-sm text-gray-600">公司數量</p>
                        <p class="text-2xl font-bold">{{ uniqueCompanies.length }}</p>
                    </div>
                </div>
            </Card>

            <Card class="p-6">
                <div class="flex items-center">
                    <Icon name="lucide:map-pin" class="h-8 w-8 text-purple-500 mr-3" />
                    <div>
                        <p class="text-sm text-gray-600">城市數量</p>
                        <p class="text-2xl font-bold">{{ uniqueCities.length }}</p>
                    </div>
                </div>
            </Card>
        </div>

        <!-- 載入狀態 -->
        <div v-if="pending" class="space-y-4">
            <div v-for="i in 6" :key="i" class="animate-pulse">
                <Card class="p-6">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-gray-200 rounded-full"/>
                        <div class="flex-1 space-y-2">
                            <div class="h-4 bg-gray-200 rounded w-3/4"/>
                            <div class="h-3 bg-gray-200 rounded w-1/2"/>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

        <!-- 使用者列表 -->
        <div v-else-if="filteredUsers.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UserCard
                v-for="user in filteredUsers"
                :key="user.id"
                :user="user"
                @view-posts="viewUserPosts"
                @edit-user="editUser"
            />
        </div>

        <!-- 沒有找到使用者 -->
        <div v-else class="text-center py-12">
            <Icon name="lucide:user-x" class="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-lg font-semibold text-gray-900 mb-2">沒有找到使用者</h3>
            <p class="text-gray-600">嘗試調整搜尋條件或重新整理頁面</p>
        </div>

        <!-- 錯誤訊息 -->
        <ErrorMessage v-if="error" :message="error.message" title="載入失敗" show-close @close="error = null" />
    </div>
</template>

<script setup>
// 設定頁面元資料
useSeoMeta({
    title: '使用者列表 - Nuxt 3 學習範例',
    description: '瀏覽所有使用者的基本資訊，展示 SSR 渲染效果',
    ogTitle: '使用者列表 - Nuxt 3 學習範例',
    ogDescription: '瀏覽所有使用者的基本資訊，展示 SSR 渲染效果',
});

// 使用 useFetch 載入資料（SSR）
const {
    data: users,
    pending,
    error,
    refresh,
} = await useFetch('/users', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    key: 'users-list',
    // 設定快取時間（5 分鐘）
    server: true,
    lazy: false,
});

// 搜尋功能
const searchQuery = ref('');

// 清除搜尋
const clearSearch = () => {
    searchQuery.value = '';
};

// 重新整理使用者資料
const refreshUsers = async () => {
    await refresh();
};

// 篩選使用者
const filteredUsers = computed(() => {
    if (!users.value) return [];

    if (!searchQuery.value) {
        return users.value;
    }

    const query = searchQuery.value.toLowerCase();
    return users.value.filter(
        (user) =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.username.toLowerCase().includes(query)
    );
});

// 獨特公司列表
const uniqueCompanies = computed(() => {
    if (!users.value) return [];

    const companies = users.value.map((user) => user.company.name);
    return [...new Set(companies)];
});

// 獨特城市列表
const uniqueCities = computed(() => {
    if (!users.value) return [];

    const cities = users.value.map((user) => user.address.city);
    return [...new Set(cities)];
});

// 查看使用者文章
const viewUserPosts = (userId) => {
    navigateTo(`/users/${userId}/posts`);
};

// 編輯使用者
const editUser = (userId) => {
    navigateTo(`/users/${userId}/edit`);
};
</script>
