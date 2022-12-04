import { FormFields } from 'base/types';

const validateFields = (form: EventTarget & HTMLFormElement & FormFields, deliveryList: string) => {
  return {
    title: () => form.title.value && form.title.value.length >= 2 && form.title.value.length <= 15,
    productType: () => form.productType && form.productType.value.length,
    currentPrice: () => form.currentPrice && form.currentPrice.value.length,
    promo: () => form.promo && form.promo.value.length,
    img: () => {
      if (!form.img || form.img.files === null || !form.img.files.length) return false;
      const extName = form.img.files[0].name.split('.').at(-1);
      return ['jpg', 'jpeg', 'png'].filter((ext) => ext === extName).length;
    },
    bestBefore: () => form.bestBefore && new Date(form.bestBefore.value) > new Date(Date.now()),
    delivery: () => deliveryList.length,
    description: () => form.description && form.description.value.length <= 300,
  };
};

export default validateFields;
