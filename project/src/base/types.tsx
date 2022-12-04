export type InputGroupProps = {
  title: string;
  name: string;
  type: string;
  items: { value: string; description: string }[];
  className?: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

export type FormData = {
  title: string;
  productType: string;
  currentPrice: string;
  oldPrice: string;
  promo: string;
  img: string;
  description: string;
  bestBefore: string;
  delivery: string;
  id: string;
};

export type FormFields = {
  title: HTMLInputElement;
  productType: HTMLInputElement;
  currentPrice: HTMLInputElement;
  oldPrice: HTMLInputElement;
  promo: HTMLInputElement;
  img: HTMLInputElement;
  description: HTMLTextAreaElement;
  bestBefore: HTMLInputElement;
  delivery: RadioNodeList;
};

export type CardsContent = FormData[];

export interface FormProps {
  onSubmit: (data: FormData) => void;
}
