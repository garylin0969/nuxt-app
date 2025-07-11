<template>
    <div class="flex items-center justify-center" :class="containerClass">
        <div
            class="animate-spin rounded-full border-solid border-gray-300"
            :class="spinnerClass"
            :style="{ borderTopColor: color }"
        />
        <span v-if="text" class="ml-2 text-sm text-gray-600">{{ text }}</span>
    </div>
</template>

<script setup>
// 定義 Props 並設定預設值
const props = defineProps({
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
    color: {
        type: String,
        default: '#3b82f6',
    },
    text: {
        type: String,
        default: '',
    },
    containerClass: {
        type: String,
        default: '',
    },
});

// 根據大小設定不同的 CSS 類別
const spinnerClass = computed(() => {
    const sizeMap = {
        sm: 'w-4 h-4 border-2',
        md: 'w-6 h-6 border-2',
        lg: 'w-8 h-8 border-3',
    };
    return sizeMap[props.size];
});
</script>

<style scoped>
/* 自訂載入動畫樣式 */
.animate-spin {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
