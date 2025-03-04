import { defineStore } from 'pinia';
import { ref } from 'vue';
import faqJson from '@/api/faq';

export const useMain = defineStore('main', () => {
    const faq = ref(faqJson.list);

    return { faq };
});
