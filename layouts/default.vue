<template>
    <div class="min-h-screen bg-gray-50">
        <!-- 頂部導航欄 -->
        <header class="bg-white shadow-sm border-b">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    <div class="flex items-center">
                        <NuxtLink to="/" class="text-xl font-bold text-gray-900"> Nuxt 學習範例 </NuxtLink>
                    </div>

                    <nav class="hidden md:flex space-x-8">
                        <NuxtLink
                            to="/"
                            class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            active-class="text-blue-600 bg-blue-50"
                        >
                            首頁
                        </NuxtLink>
                        <NuxtLink
                            to="/users"
                            class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            active-class="text-blue-600 bg-blue-50"
                        >
                            使用者
                        </NuxtLink>
                        <NuxtLink
                            to="/posts"
                            class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            active-class="text-blue-600 bg-blue-50"
                        >
                            文章
                        </NuxtLink>
                        <NuxtLink
                            to="/rendering"
                            class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            active-class="text-blue-600 bg-blue-50"
                        >
                            渲染範例
                        </NuxtLink>
                        <NuxtLink
                            to="/forms"
                            class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            active-class="text-blue-600 bg-blue-50"
                        >
                            表單驗證
                        </NuxtLink>
                    </nav>

                    <!-- 手機版選單按鈕 -->
                    <div class="md:hidden">
                        <Button variant="ghost" size="sm" @click="toggleMobileMenu">
                            <Icon name="lucide:menu" class="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                <!-- 手機版選單 -->
                <div v-if="showMobileMenu" class="md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NuxtLink
                            to="/"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
                            active-class="text-blue-600 bg-blue-50"
                            @click="showMobileMenu = false"
                        >
                            首頁
                        </NuxtLink>
                        <NuxtLink
                            to="/users"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
                            active-class="text-blue-600 bg-blue-50"
                            @click="showMobileMenu = false"
                        >
                            使用者
                        </NuxtLink>
                        <NuxtLink
                            to="/posts"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
                            active-class="text-blue-600 bg-blue-50"
                            @click="showMobileMenu = false"
                        >
                            文章
                        </NuxtLink>
                        <NuxtLink
                            to="/rendering"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
                            active-class="text-blue-600 bg-blue-50"
                            @click="showMobileMenu = false"
                        >
                            渲染範例
                        </NuxtLink>
                        <NuxtLink
                            to="/forms"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
                            active-class="text-blue-600 bg-blue-50"
                            @click="showMobileMenu = false"
                        >
                            表單驗證
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </header>

        <!-- 主要內容區域 -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <slot />
        </main>

        <!-- 頁尾 -->
        <footer class="bg-white border-t mt-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="text-gray-600 text-sm">© 2024 Nuxt 學習範例 - 使用 Nuxt 3 和 Vue 3 建立</div>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-gray-600">
                            <Icon name="lucide:github" class="h-5 w-5" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-600">
                            <Icon name="lucide:twitter" class="h-5 w-5" />
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-600">
                            <Icon name="lucide:linkedin" class="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
// 手機版選單狀態
const showMobileMenu = ref(false);

// 切換手機版選單
const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
};

// 監聽路由變化，關閉手機版選單
const route = useRoute();
watch(
    () => route.path,
    () => {
        showMobileMenu.value = false;
    }
);
</script>
