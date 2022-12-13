import React, { useEffect, useState } from 'react';

import { usePostCreateAddressMutate } from '../../../../services/user/address/hooks/usePostCreateAddressMutate';
import { usePublicApiCountry } from '../../../../hooks/usePublicApiCountry';
import { Address } from '../../../../services/user/address/types';
import { useQueryClient } from '@tanstack/react-query';
import { useValidator } from '../../../../validators/hooks/useValidator';

export function useShippingForm() {
  const [selectedCountry, setSelectedCountry] = useState({ label: '', value: '' });
  const [selectedState, setSelectedState] = useState({ label: '', value: '' });
  const [show, setShow] = useState(false);
  const queryClient = useQueryClient();
  const { validateStringLength } = useValidator();
  const { mutateAsync: createAddressMutate, isLoading } = usePostCreateAddressMutate();
  const {
    isFetchedCountriesData,
    isLoadingCitiesData,
    isLoadingStatesData,
    hasAccessToken,
    countriesData,
    statesData,
    citiesData,
  } = usePublicApiCountry({
    selectedCountry: selectedCountry.label,
    selectedState: selectedState.label,
  });
  function validateLengthZipcode(zipcode: string) {
    const zipcodeNormalized = zipcode.replace(/[^0-9]/g, '');
    const validationWithFive = validateStringLength(5, zipcodeNormalized);
    if (validationWithFive.isValid) {
      return validationWithFive;
    }
    const validationWithNine = validateStringLength(9, zipcodeNormalized);

    return validationWithNine;

    

  }
  const enableCountries = hasAccessToken && isFetchedCountriesData;

  useEffect(() => {
    queryClient.invalidateQueries(['publicApiCountry-states']);
    queryClient.invalidateQueries(['publicApiCountry-cities']);
  }, [selectedCountry.value]);

  useEffect(() => {
    queryClient.invalidateQueries(['publicApiCountry-cities']);
  }, [selectedState]);

  const disabledStateInput = !selectedCountry.value || isLoadingStatesData;
  const disabledCityInput = !selectedState || isLoadingCitiesData;

  const countriesList =
    !!countriesData && countriesData.length > 0
      ? countriesData.map((country) => ({
        value: country.country_short_name,
        label: country.country_name,
      }))
      : [{ value: '', label: '' }];

  const statesList =
    !!statesData && statesData.length > 0
      ? statesData.map((state) => ({
        value: state.state_name,
        label: state.state_name,
      }))
      : [{ value: '', label: '' }];

  const citiesList =
    !!citiesData && citiesData.length > 0
      ? citiesData.map((city) => ({
        value: city.city_name,
        label: city.city_name,
      }))
      : [{ value: '', label: '' }];

  function openPaymentModal() {
    setShow(true);
  }

  function closePaymentModal() {
    setShow(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const countryCodeInput = document.getElementById('addressCountry-value') as HTMLInputElement;
    const addressLineOneInput = document.getElementById('addressLineOne') as HTMLInputElement;
    const addressLineTwoInput = document.getElementById('addressLineTwo') as HTMLInputElement;
    const countryInput = document.getElementById('addressCountry-label') as HTMLInputElement;
    const stateInput = document.getElementById('addressState-value') as HTMLInputElement;
    const zipcodeInput = document.getElementById('addressZipcode') as HTMLInputElement;
    const firstNameInput = document.getElementById('firstName') as HTMLInputElement;
    const phoneInput = document.getElementById('addressPhone') as HTMLInputElement;
    const lastNameInput = document.getElementById('lastName') as HTMLInputElement;
    const cityInput = document.getElementById('addressCity') as HTMLInputElement;

    const zipcode = zipcodeInput.value.replace(/[^0-9]+/g, '');
    const phone = phoneInput.value.replace(/[^0-9]+/g, '');
    const address_line1 = addressLineOneInput.value;
    const address_line2 = addressLineTwoInput.value;
    const country_code = countryCodeInput.value;
    const first_name = firstNameInput.value;
    const last_name = lastNameInput.value;
    const country = countryInput.value;
    const state = stateInput.value;
    const city = cityInput.value;

    const addressObject = {
      address_line1,
      address_line2,
      is_default: 1,
      country_code,
      first_name,
      last_name,
      zipcode,
      country,
      phone,
      state,
      city,
    } as Address;

    createAddressMutate(addressObject, { onSuccess: () => openPaymentModal() });
  }

  return {
    validateLengthZipcode,
    setSelectedCountry,
    disabledStateInput,
    disabledCityInput,
    closePaymentModal,
    openPaymentModal,
    setSelectedState,
    enableCountries,
    selectedCountry,
    countriesList,
    handleSubmit,
    citiesList,
    statesList,
    isLoading,
    show,
  };
}
