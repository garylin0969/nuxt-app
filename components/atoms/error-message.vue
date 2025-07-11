<template>
    <div
        v-if="message"
        class="rounded-md border border-red-200 bg-red-50 p-4"
        :class="[
            variant === 'solid' ? 'bg-red-500 text-white border-red-500' : '',
            variant === 'outline' ? 'bg-transparent text-red-700 border-red-300' : '',
            variant === 'ghost' ? 'bg-transparent text-red-700 border-transparent' : '',
            size === 'sm' ? 'p-2 text-sm' : '',
            size === 'lg' ? 'p-6 text-lg' : '',
            className,
        ]"
    >
        <div class="flex items-start">
            <Icon
                v-if="showIcon"
                name="lucide:alert-circle"
                class="mr-2 h-5 w-5 flex-shrink-0"
                :class="variant === 'solid' ? 'text-white' : 'text-red-600'"
            />
            <div class="flex-1">
                <h3 v-if="title" class="font-medium mb-1">{{ title }}</h3>
                <p>{{ message }}</p>
                <button
                    v-if="showClose"
                    class="mt-2 text-sm underline hover:no-underline"
                    :class="variant === 'solid' ? 'text-white' : 'text-red-700'"
                    @click="$emit('close')"
                >
                    關閉
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
// 定義 Props
defineProps({
    /** 錯誤訊息內容 */
    message: {
        type: String,
        required: true,
    },
    /** 錯誤標題 */
    title: {
        type: String,
        default: '',
    },
    /** 顯示樣式變體 */
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'solid', 'outline', 'ghost'].includes(value),
    },
    /** 大小 */
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
    /** 是否顯示圖示 */
    showIcon: {
        type: Boolean,
        default: true,
    },
    /** 是否顯示關閉按鈕 */
    showClose: {
        type: Boolean,
        default: false,
    },
    /** 自訂 CSS 類別 */
    className: {
        type: String,
        default: '',
    },
});

// 定義 Emits
defineEmits(['close']);
</script>
