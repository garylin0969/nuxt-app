<template>
    <Card class="w-full">
        <CardHeader class="pb-3">
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <CardTitle class="text-lg leading-tight mb-2">
                        {{ post.title }}
                    </CardTitle>
                    <div class="flex items-center text-sm text-gray-500">
                        <Icon name="lucide:user" class="mr-1 h-4 w-4" />
                        <span>使用者 #{{ post.userId }}</span>
                        <span class="mx-2">•</span>
                        <Icon name="lucide:calendar" class="mr-1 h-4 w-4" />
                        <span>{{ formatDate(new Date()) }}</span>
                    </div>
                </div>
                <Badge variant="secondary" class="ml-2"> ID: {{ post.id }} </Badge>
            </div>
        </CardHeader>

        <CardContent class="pt-0">
            <div class="space-y-3">
                <p class="text-gray-700 leading-relaxed">
                    {{ truncatedBody }}
                </p>

                <div v-if="post.body.length > maxBodyLength" class="flex items-center">
                    <button class="text-blue-600 hover:text-blue-800 text-sm font-medium" @click="toggleExpanded">
                        {{ isExpanded ? '收起' : '展開更多' }}
                    </button>
                </div>
            </div>
        </CardContent>

        <CardFooter class="pt-3 border-t">
            <div class="flex gap-2 w-full">
                <Button variant="outline" size="sm" class="flex-1" @click="$emit('view-comments')">
                    <Icon name="lucide:message-circle" class="mr-2 h-4 w-4" />
                    查看評論
                </Button>

                <Button variant="outline" size="sm" class="flex-1" @click="$emit('edit-post')">
                    <Icon name="lucide:edit" class="mr-2 h-4 w-4" />
                    編輯
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    class="text-red-600 hover:text-red-800"
                    @click="$emit('delete-post')"
                >
                    <Icon name="lucide:trash-2" class="h-4 w-4" />
                </Button>
            </div>
        </CardFooter>
    </Card>
</template>

<script setup>
// 定義 Props
const props = defineProps({
    /** 文章資料 */
    post: {
        type: Object,
        required: true,
    },
    /** 文章內容最大顯示長度 */
    maxBodyLength: {
        type: Number,
        default: 150,
    },
});

// 定義 Emits
defineEmits(['view-comments', 'edit-post', 'delete-post']);

// 展開/收起狀態
const isExpanded = ref(false);

// 切換展開狀態
const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value;
};

// 截斷的文章內容
const truncatedBody = computed(() => {
    if (isExpanded.value || props.post.body.length <= props.maxBodyLength) {
        return props.post.body;
    }
    return props.post.body.substring(0, props.maxBodyLength) + '...';
});

// 格式化日期
const formatDate = (date) => {
    return new Intl.DateTimeFormat('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};
</script>
