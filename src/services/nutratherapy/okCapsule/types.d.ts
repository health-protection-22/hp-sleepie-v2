export type ProductPack = {
  full_dosage: number;
  capsules: number;
  dosage: number;
  amount: number;
  price: number;
  days: number;
  uuid: string;
};

export type ProductsPacks = {
    [key: string]: ProductPack[];
}


export type PayloadCreateTransaction = {
    transaction_id: string;
    address_uuid: string;
} 