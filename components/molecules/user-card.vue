<template>
    <Card class="w-full max-w-md">
        <CardHeader class="pb-3">
            <div class="flex items-center space-x-4">
                <div
                    class="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg"
                >
                    {{ userInitials }}
                </div>
                <div class="flex-1">
                    <CardTitle class="text-lg">{{ user.name }}</CardTitle>
                    <p class="text-sm text-gray-600">@{{ user.username }}</p>
                </div>
            </div>
        </CardHeader>

        <CardContent class="pt-0">
            <div class="space-y-3">
                <div class="flex items-center text-sm">
                    <Icon name="lucide:mail" class="mr-2 h-4 w-4 text-gray-500" />
                    <span class="text-gray-700">{{ user.email }}</span>
                </div>

                <div class="flex items-center text-sm">
                    <Icon name="lucide:phone" class="mr-2 h-4 w-4 text-gray-500" />
                    <span class="text-gray-700">{{ user.phone }}</span>
                </div>

                <div class="flex items-center text-sm">
                    <Icon name="lucide:globe" class="mr-2 h-4 w-4 text-gray-500" />
                    <a
                        :href="`https://${user.website}`"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                        {{ user.website }}
                    </a>
                </div>

                <div class="flex items-start text-sm">
                    <Icon name="lucide:map-pin" class="mr-2 h-4 w-4 text-gray-500 mt-0.5" />
                    <div class="text-gray-700">
                        <div>{{ user.address.street }}, {{ user.address.suite }}</div>
                        <div>{{ user.address.city }}, {{ user.address.zipcode }}</div>
                    </div>
                </div>

                <div class="flex items-center text-sm">
                    <Icon name="lucide:building" class="mr-2 h-4 w-4 text-gray-500" />
                    <div class="text-gray-700">
                        <div class="font-medium">{{ user.company.name }}</div>
                        <div class="text-xs text-gray-500">{{ user.company.catchPhrase }}</div>
                    </div>
                </div>
            </div>
        </CardContent>

        <CardFooter class="pt-3">
            <div class="flex gap-2 w-full">
                <Button variant="outline" size="sm" class="flex-1" @click="$emit('view-posts')">
                    <Icon name="lucide:file-text" class="mr-2 h-4 w-4" />
                    查看文章
                </Button>

                <Button variant="outline" size="sm" class="flex-1" @click="$emit('edit-user')">
                    <Icon name="lucide:edit" class="mr-2 h-4 w-4" />
                    編輯
                </Button>
            </div>
        </CardFooter>
    </Card>
</template>

<script setup>
// 定義 Props
const props = defineProps({
    /** 使用者資料 */
    user: {
        type: Object,
        required: true,
    },
});

// 定義 Emits
defineEmits(['view-posts', 'edit-user']);

// 計算使用者姓名縮寫
const userInitials = computed(() => {
    if (!props.user.name) return '?';

    const names = props.user.name.split(' ');
    if (names.length === 1) {
        return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
});
</script>
