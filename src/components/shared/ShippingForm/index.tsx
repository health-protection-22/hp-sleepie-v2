import React from 'react';

import { InputAutocomplete } from '../CustomInputs/InputAutocomplete';
import { useShippingForm } from './hooks/useShippingForm';
import { PaymentModal } from '../Modals/PaymentModal';
import { doNothing } from '../../../utils/functions';
import { Input } from '../Input';
import { When } from '../When';

export function ShippingForm() {
  const {
    validateLengthZipcode,
    setSelectedCountry,
    disabledStateInput,
    closePaymentModal,
    setSelectedState,
    enableCountries,
    handleSubmit,
    statesList,
    show,
  } = useShippingForm();
  return (
    <form
      className={'flex flex-col gap-4 w-full h-fit'}
      onSubmit={handleSubmit}
      id={'shippingForm'}
    >
      <div className={'flex flex-col lg:flex-row gap-4'}>
        <Input
          labelString={'First Name'}
          placeholder={'John'}
          id={'firstName'}
          width={'full'}
          required
        />
        <Input width={'full'} id={'lastName'} placeholder={'Doe'} labelString={'Last Name'} />
      </div>
      <Input
        placeholder={'2125 Chestnut Street'}
        labelString={'Address Line 1'}
        id={'addressLineOne'}
        width={'full'}
        required
      />
      <Input
        labelString={'Address Line 2'}
        placeholder={'Apartment 12'}
        id={'addressLineTwo'}
        width={'full'}
      />

      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4">
        <div className="col-span-1">
          <InputAutocomplete
            list={[{ value: 'US', label: 'United States' }]}
            dispatchActionOnSelect={setSelectedCountry}
            placeholder={'United States'}
            disabled={!enableCountries}
            labelString={'Country'}
            id={'addressCountry'}
            width={'full'}
          />
        </div>
        <div className="col-span-1">
          <InputAutocomplete
            dispatchActionOnSelect={setSelectedState}
            disabled={disabledStateInput}
            placeholder={'California'}
            labelString={'States'}
            id={'addressState'}
            list={statesList}
            width={'full'}
          />
        </div>
        <Input
          placeholder={'San francisco'}
          labelString={'City'}
          id={'addressCity'}
          width={'full'}
          required
        />
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4">
        <Input
          validateFunctions={[validateLengthZipcode]}
          labelString={'ZIP / postal code'}
          placeholder={'12345'}
          id={'addressZipcode'}
          width={'full'}
          required
        />
        <Input
          placeholder={'+14845219787'}
          labelString={'Phone'}
          id={'addressPhone'}
          width={'full'}
          required
        />
      </div>
      <When value={show}>
        <PaymentModal closeModal={closePaymentModal} show={show} onSubmit={doNothing} />
      </When>
    </form>
  );
}
