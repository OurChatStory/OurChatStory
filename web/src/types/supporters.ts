export interface BMCSupporterData {
  supporter_name?: string;
  payer_name?: string;
  support_coffees: number;
  support_note?: string;
  support_coffee_price?: string;
}

export interface BMCSubscriptionData {
  payer_name?: string;
  subscription_coffee_num: number;
  subscription_message?: string;
  subscription_coffee_price?: string;
}

export interface Supporter {
  supporter_name: string;
  support_coffees: number;
  support_note?: string;
  support_amount: number;
}
