<template>
    <div class="space-y-8">
        <!-- 頁面標題 -->
        <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Nuxt 3 渲染模式範例</h1>
            <p class="text-xl text-gray-600">了解 SSR、ISR、SSG、CSR 的差異與應用場景</p>
        </div>

        <!-- 渲染模式比較 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- SSR 卡片 -->
            <Card class="p-6">
                <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="lucide:server" class="h-8 w-8 text-green-600" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">SSR</h3>
                    <p class="text-sm text-gray-600 mb-4">伺服器端渲染</p>
                    <div class="space-y-2 text-xs text-left">
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-green-500 mr-2" />
                            <span>SEO 友善</span>
                        </div>
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-green-500 mr-2" />
                            <span>首屏快速</span>
                        </div>
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-green-500 mr-2" />
                            <span>即時資料</span>
                        </div>
                    </div>
                    <NuxtLink to="/rendering/ssr" class="w-full mt-4">
                        <Button size="sm" class="w-full"> 查看範例 </Button>
                    </NuxtLink>
                </div>
            </Card>

            <!-- ISR 卡片 -->
            <Card class="p-6">
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="lucide:refresh-cw" class="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">ISR</h3>
                    <p class="text-sm text-gray-600 mb-4">增量靜態再生</p>
                    <div class="space-y-2 text-xs text-left">
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-blue-500 mr-2" />
                            <span>靜態快取</span>
                        </div>
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-blue-500 mr-2" />
                            <span>按需更新</span>
                        </div>
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-blue-500 mr-2" />
                            <span>資料新鮮度</span>
                        </div>
                    </div>
                    <NuxtLink to="/rendering/isr" class="w-full mt-4">
                        <Button size="sm" variant="outline" class="w-full"> 查看範例 </Button>
                    </NuxtLink>
                </div>
            </Card>

            <!-- SSG 卡片 -->
            <Card class="p-6">
                <div class="text-center">
                    <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="lucide:file-text" class="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">SSG</h3>
                    <p class="text-sm text-gray-600 mb-4">靜態網站生成</p>
                    <div class="space-y-2 text-xs text-left">
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-yellow-500 mr-2" />
                            <span>極速載入</span>
                        </div>
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-yellow-500 mr-2" />
                            <span>CDN 友善</span>
                        </div>
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-yellow-500 mr-2" />
                            <span>低成本</span>
                        </div>
                    </div>
                    <NuxtLink to="/rendering/ssg" class="w-full mt-4">
                        <Button size="sm" variant="outline" class="w-full"> 查看範例 </Button>
                    </NuxtLink>
                </div>
            </Card>

            <!-- CSR 卡片 -->
            <Card class="p-6">
                <div class="text-center">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="lucide:globe" class="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">CSR</h3>
                    <p class="text-sm text-gray-600 mb-4">客戶端渲染</p>
                    <div class="space-y-2 text-xs text-left">
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-purple-500 mr-2" />
                            <span>互動性強</span>
                        </div>
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-purple-500 mr-2" />
                            <span>動態更新</span>
                        </div>
                        <div class="flex items-center">
                            <Icon name="lucide:check" class="h-3 w-3 text-purple-500 mr-2" />
                            <span>即時反應</span>
                        </div>
                    </div>
                    <NuxtLink to="/rendering/csr" class="w-full mt-4">
                        <Button size="sm" variant="outline" class="w-full"> 查看範例 </Button>
                    </NuxtLink>
                </div>
            </Card>
        </div>

        <!-- 詳細說明 -->
        <div class="bg-white rounded-lg shadow-sm p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">渲染模式詳細說明</h2>

            <Tabs default-value="ssr" class="w-full">
                <TabsList class="grid w-full grid-cols-4">
                    <TabsTrigger value="ssr">SSR</TabsTrigger>
                    <TabsTrigger value="isr">ISR</TabsTrigger>
                    <TabsTrigger value="ssg">SSG</TabsTrigger>
                    <TabsTrigger value="csr">CSR</TabsTrigger>
                </TabsList>

                <TabsContent value="ssr" class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-900">伺服器端渲染 (SSR)</h3>
                    <p class="text-gray-600">
                        每次請求時在伺服器端生成 HTML，然後傳送到客戶端。適合需要即時資料和 SEO 優化的頁面。
                    </p>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h4 class="font-medium text-green-800 mb-2">適用場景：</h4>
                        <ul class="text-sm text-green-700 space-y-1">
                            <li>• 需要即時資料的頁面</li>
                            <li>• 需要 SEO 優化的內容頁面</li>
                            <li>• 使用者認證後的個人化內容</li>
                            <li>• 經常變動的資料展示</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="isr" class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-900">增量靜態再生 (ISR)</h3>
                    <p class="text-gray-600">
                        結合靜態生成和伺服器端渲染的優點，可以在後台更新靜態頁面，確保內容的新鮮度。
                    </p>
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h4 class="font-medium text-blue-800 mb-2">適用場景：</h4>
                        <ul class="text-sm text-blue-700 space-y-1">
                            <li>• 內容定期更新的頁面</li>
                            <li>• 電商產品頁面</li>
                            <li>• 新聞文章頁面</li>
                            <li>• 需要快速載入但資料會變化的頁面</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="ssg" class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-900">靜態網站生成 (SSG)</h3>
                    <p class="text-gray-600">在建置時預先生成所有頁面的 HTML，適合內容不經常變動的網站。</p>
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <h4 class="font-medium text-yellow-800 mb-2">適用場景：</h4>
                        <ul class="text-sm text-yellow-700 space-y-1">
                            <li>• 部落格文章</li>
                            <li>• 產品說明頁面</li>
                            <li>• 文件網站</li>
                            <li>• 公司介紹頁面</li>
                        </ul>
                    </div>
                </TabsContent>

                <TabsContent value="csr" class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-900">客戶端渲染 (CSR)</h3>
                    <p class="text-gray-600">在客戶端使用 JavaScript 動態生成頁面內容，適合需要高度互動的應用程式。</p>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h4 class="font-medium text-purple-800 mb-2">適用場景：</h4>
                        <ul class="text-sm text-purple-700 space-y-1">
                            <li>• 管理後台</li>
                            <li>• 即時聊天應用</li>
                            <li>• 互動式表單</li>
                            <li>• 單頁應用程式 (SPA)</li>
                        </ul>
                    </div>
                </TabsContent>
            </Tabs>
        </div>

        <!-- 效能比較 -->
        <div class="bg-white rounded-lg shadow-sm p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">效能比較</h2>

            <div class="overflow-x-auto">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="border-b">
                            <th class="text-left py-3 px-4">特性</th>
                            <th class="text-center py-3 px-4 text-green-600">SSR</th>
                            <th class="text-center py-3 px-4 text-blue-600">ISR</th>
                            <th class="text-center py-3 px-4 text-yellow-600">SSG</th>
                            <th class="text-center py-3 px-4 text-purple-600">CSR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="py-3 px-4 font-medium">首屏載入速度</td>
                            <td class="py-3 px-4 text-center">快</td>
                            <td class="py-3 px-4 text-center">很快</td>
                            <td class="py-3 px-4 text-center">最快</td>
                            <td class="py-3 px-4 text-center">慢</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-3 px-4 font-medium">SEO 友善度</td>
                            <td class="py-3 px-4 text-center">優秀</td>
                            <td class="py-3 px-4 text-center">優秀</td>
                            <td class="py-3 px-4 text-center">優秀</td>
                            <td class="py-3 px-4 text-center">差</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-3 px-4 font-medium">伺服器負載</td>
                            <td class="py-3 px-4 text-center">高</td>
                            <td class="py-3 px-4 text-center">中</td>
                            <td class="py-3 px-4 text-center">低</td>
                            <td class="py-3 px-4 text-center">低</td>
                        </tr>
                        <tr class="border-b">
                            <td class="py-3 px-4 font-medium">資料即時性</td>
                            <td class="py-3 px-4 text-center">即時</td>
                            <td class="py-3 px-4 text-center">準即時</td>
                            <td class="py-3 px-4 text-center">靜態</td>
                            <td class="py-3 px-4 text-center">即時</td>
                        </tr>
                        <tr>
                            <td class="py-3 px-4 font-medium">互動性</td>
                            <td class="py-3 px-4 text-center">好</td>
                            <td class="py-3 px-4 text-center">好</td>
                            <td class="py-3 px-4 text-center">好</td>
                            <td class="py-3 px-4 text-center">最好</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
// 設定頁面元資料
useSeoMeta({
    title: '渲染模式範例 - Nuxt 3 學習範例',
    description: '了解 Nuxt 3 中 SSR、ISR、SSG、CSR 的差異與應用場景',
    ogTitle: '渲染模式範例 - Nuxt 3 學習範例',
    ogDescription: '了解 Nuxt 3 中 SSR、ISR、SSG、CSR 的差異與應用場景',
});
</script>
