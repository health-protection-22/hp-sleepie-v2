import { FiltersProps } from '../../components/Nutratherapy/@types/FiltersProps';
import { ProductsPacks } from '../../services/nutratherapy/okCapsule/types';
import { GetCombinationsData, Product } from '../../services/nutratherapy/types';

export type UserProfile = {
  filters?: FiltersProps;
  responseCombinations?: Pick<GetCombinationsData, 'combinations' | 'excludedNutraceuticals' | 'excludedFoods'>;
}

export type CartContextData = {
  setTryToConvert: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setProductsPacks: React.Dispatch<React.SetStateAction<ProductsPacks>>;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  setSubtotalSum: React.Dispatch<React.SetStateAction<number>>;
  setTotalSum: React.Dispatch<React.SetStateAction<number>>;
  removeCartItem: (indexSelected: number) => void;
  enableSwitchBetweenMethods: boolean;
  tryToConvert: boolean | undefined;
  setSubscribeMethod: () => void;
  setOneTimeMethod: () => void;
  productsPacks: ProductsPacks;
  selectedMethod: BuyMethods;
  isCartItemsSetted: boolean;
  isSubscribeMethod: boolean;
  isOneTimeMethod: boolean;
  userProfile: UserProfile;
  cartItems: Product[];
  subtotalSum: number;
  totalSum: number;
};


export type BuyMethods = 'oneTime' | 'subscribe';
