export type PayloadStartCheckout = {
  type: 'payment' | 'subscription';
  shipping_address_line1?: string;
  shipping_address_line2?: string;
  shipping_country_code?: string;
  shipping_postal_code?: string;
  customer_id: number | string;
  shipping_full_name?: string;
  shipping_state?: string;
  shipping_city?: string;
  customer_email: string;
  success_url?: string;
  failure_url?: string;
  description: string;
  plan_id?: number;
  currency?: 'usd';
  properties?: any;
  amount?: number;
};

export type GetTransactionData = {
  refunded_amount: number;
  subscription_id: string;
  status_message: string;
  customer_email: string;
  total_amount: number;
  description: string;
  customer_id: number;
  charged_at: string;
  payment_id: string;
  started_at: string;
  currency: string;
  plan_id: number;
  status: number;
  type: string;
  uuid: string;
};

export type PostStartCheckoutData = { checkout_key: string };
