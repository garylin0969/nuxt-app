<template>
    <div class="space-y-8">
        <!-- 頁面標題 -->
        <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">表單驗證範例</h1>
            <p class="text-gray-600">使用 vee-validate 和 zod 進行表單驗證的完整範例</p>
        </div>

        <!-- 表單範例 -->
        <div class="max-w-2xl mx-auto">
            <Card class="p-8">
                <CardHeader class="pb-6">
                    <CardTitle class="text-2xl">使用者註冊表單</CardTitle>
                    <p class="text-gray-600">請填寫以下資訊來建立新的使用者帳戶</p>
                </CardHeader>

                <CardContent>
                    <form class="space-y-6" @submit="onSubmit">
                        <!-- 基本資訊 -->
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold text-gray-900">基本資訊</h3>

                            <!-- 姓名 -->
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700">姓名 *</label>
                                <Input
                                    v-model="name"
                                    placeholder="請輸入您的姓名"
                                    :class="{ 'border-red-500': errors.name }"
                                />
                                <p v-if="errors.name" class="text-sm text-red-600">
                                    {{ errors.name }}
                                </p>
                            </div>

                            <!-- Email -->
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700">Email *</label>
                                <Input
                                    v-model="email"
                                    type="email"
                                    placeholder="請輸入您的 Email"
                                    :class="{ 'border-red-500': errors.email }"
                                />
                                <p v-if="errors.email" class="text-sm text-red-600">
                                    {{ errors.email }}
                                </p>
                            </div>

                            <!-- 密碼 -->
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700">密碼 *</label>
                                <Input
                                    v-model="password"
                                    type="password"
                                    placeholder="請輸入密碼"
                                    :class="{ 'border-red-500': errors.password }"
                                />
                                <p v-if="errors.password" class="text-sm text-red-600">
                                    {{ errors.password }}
                                </p>
                            </div>

                            <!-- 確認密碼 -->
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700">確認密碼 *</label>
                                <Input
                                    v-model="confirmPassword"
                                    type="password"
                                    placeholder="請再次輸入密碼"
                                    :class="{ 'border-red-500': errors.confirmPassword }"
                                />
                                <p v-if="errors.confirmPassword" class="text-sm text-red-600">
                                    {{ errors.confirmPassword }}
                                </p>
                            </div>
                        </div>

                        <!-- 聯絡資訊 -->
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold text-gray-900">聯絡資訊</h3>

                            <!-- 電話 -->
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700">電話</label>
                                <Input
                                    v-model="phone"
                                    placeholder="請輸入電話號碼"
                                    :class="{ 'border-red-500': errors.phone }"
                                />
                                <p v-if="errors.phone" class="text-sm text-red-600">
                                    {{ errors.phone }}
                                </p>
                            </div>

                            <!-- 網站 -->
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700">個人網站</label>
                                <Input
                                    v-model="website"
                                    placeholder="https://example.com"
                                    :class="{ 'border-red-500': errors.website }"
                                />
                                <p v-if="errors.website" class="text-sm text-red-600">
                                    {{ errors.website }}
                                </p>
                            </div>
                        </div>

                        <!-- 地址資訊 -->
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold text-gray-900">地址資訊</h3>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- 街道 -->
                                <div class="space-y-2">
                                    <label class="text-sm font-medium text-gray-700">街道</label>
                                    <Input
                                        v-model="address.street"
                                        placeholder="請輸入街道地址"
                                        :class="{ 'border-red-500': errors['address.street'] }"
                                    />
                                    <p v-if="errors['address.street']" class="text-sm text-red-600">
                                        {{ errors['address.street'] }}
                                    </p>
                                </div>

                                <!-- 城市 -->
                                <div class="space-y-2">
                                    <label class="text-sm font-medium text-gray-700">城市</label>
                                    <Input
                                        v-model="address.city"
                                        placeholder="請輸入城市"
                                        :class="{ 'border-red-500': errors['address.city'] }"
                                    />
                                    <p v-if="errors['address.city']" class="text-sm text-red-600">
                                        {{ errors['address.city'] }}
                                    </p>
                                </div>

                                <!-- 郵遞區號 -->
                                <div class="space-y-2">
                                    <label class="text-sm font-medium text-gray-700">郵遞區號</label>
                                    <Input
                                        v-model="address.zipcode"
                                        placeholder="請輸入郵遞區號"
                                        :class="{ 'border-red-500': errors['address.zipcode'] }"
                                    />
                                    <p v-if="errors['address.zipcode']" class="text-sm text-red-600">
                                        {{ errors['address.zipcode'] }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- 公司資訊 -->
                        <div class="space-y-4">
                            <h3 class="text-lg font-semibold text-gray-900">公司資訊</h3>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- 公司名稱 -->
                                <div class="space-y-2">
                                    <label class="text-sm font-medium text-gray-700">公司名稱</label>
                                    <Input v-model="company.name" placeholder="請輸入公司名稱" />
                                </div>

                                <!-- 公司口號 -->
                                <div class="space-y-2">
                                    <label class="text-sm font-medium text-gray-700">公司口號</label>
                                    <Input v-model="company.catchPhrase" placeholder="請輸入公司口號" />
                                </div>
                            </div>

                            <!-- 公司業務 -->
                            <div class="space-y-2">
                                <label class="text-sm font-medium text-gray-700">公司業務</label>
                                <Input v-model="company.bs" placeholder="請描述公司主要業務" />
                            </div>
                        </div>

                        <!-- 同意條款 -->
                        <div class="flex items-center space-x-2">
                            <input
                                id="acceptTerms"
                                v-model="acceptTerms"
                                type="checkbox"
                                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            >
                            <label for="acceptTerms" class="text-sm text-gray-700">
                                我同意 <a href="#" class="text-blue-600 hover:text-blue-800">使用條款</a> 和
                                <a href="#" class="text-blue-600 hover:text-blue-800">隱私政策</a>
                            </label>
                        </div>
                        <p v-if="errors.acceptTerms" class="text-sm text-red-600">
                            {{ errors.acceptTerms }}
                        </p>

                        <!-- 提交按鈕 -->
                        <div class="flex gap-4">
                            <Button type="submit" class="flex-1" :disabled="!meta.valid || isSubmitting">
                                <Icon v-if="isSubmitting" name="lucide:loader-2" class="w-4 h-4 mr-2 animate-spin" />
                                {{ isSubmitting ? '註冊中...' : '註冊帳戶' }}
                            </Button>

                            <Button type="button" variant="outline" @click="handleReset"> 重設表單 </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>

        <!-- 表單資料預覽 -->
        <div class="max-w-2xl mx-auto">
            <Card class="p-6">
                <CardHeader>
                    <CardTitle class="text-lg">表單資料預覽</CardTitle>
                    <p class="text-sm text-gray-600">目前表單的資料狀態</p>
                </CardHeader>
                <CardContent>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <pre class="text-sm text-gray-700">{{ JSON.stringify(values, null, 2) }}</pre>
                    </div>

                    <div class="mt-4 text-sm">
                        <p class="text-gray-600">
                            表單狀態：
                            <Badge :variant="meta.valid ? 'default' : 'destructive'">
                                {{ meta.valid ? '有效' : '無效' }}
                            </Badge>
                        </p>
                        <p class="text-gray-600 mt-1">已修改欄位：{{ meta.dirty ? '是' : '否' }}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>

<script setup>
import { z } from 'zod';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

// 設定頁面元資料
useSeoMeta({
    title: '表單驗證範例 - Nuxt 3 學習範例',
    description: '使用 vee-validate 和 zod 進行表單驗證的完整範例',
});

// 定義驗證 schema
const validationSchema = toTypedSchema(
    z
        .object({
            name: z.string().min(2, '姓名至少需要 2 個字元').max(50, '姓名不能超過 50 個字元'),
            email: z.string().email('請輸入有效的 Email 格式'),
            password: z.string().min(8, '密碼至少需要 8 個字元').max(100, '密碼不能超過 100 個字元'),
            confirmPassword: z.string(),
            phone: z.string().optional().or(z.literal('')),
            website: z.string().url('請輸入有效的網址格式').optional().or(z.literal('')),
            address: z.object({
                street: z.string().optional(),
                city: z.string().optional(),
                zipcode: z.string().optional(),
            }),
            company: z.object({
                name: z.string().optional(),
                catchPhrase: z.string().optional(),
                bs: z.string().optional(),
            }),
            acceptTerms: z.boolean().refine((val) => val === true, '必須同意使用條款'),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: '密碼與確認密碼不一致',
            path: ['confirmPassword'],
        })
);

// 使用 vee-validate
const { handleSubmit, handleReset, values, errors, meta } = useForm({
    validationSchema,
    initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        website: '',
        address: {
            street: '',
            city: '',
            zipcode: '',
        },
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        },
        acceptTerms: false,
    },
});

// 建立表單欄位
const { value: name } = useField('name');
const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: confirmPassword } = useField('confirmPassword');
const { value: phone } = useField('phone');
const { value: website } = useField('website');
const { value: address } = useField('address');
const { value: company } = useField('company');
const { value: acceptTerms } = useField('acceptTerms');

// 提交狀態
const isSubmitting = ref(false);

// 處理表單提交
const onSubmit = handleSubmit(async (values) => {
    isSubmitting.value = true;

    try {
        // 模擬 API 呼叫
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // 這裡可以呼叫實際的 API
        // eslint-disable-next-line no-console
        console.log('提交的資料:', values);

        // 顯示成功訊息
        alert('註冊成功！');

        // 重設表單
        handleReset();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('註冊失敗:', error);
        alert('註冊失敗，請稍後重試');
    } finally {
        isSubmitting.value = false;
    }
});
</script>
