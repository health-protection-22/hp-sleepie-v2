import React from 'react';

import { InputCheckbox } from '../CustomInputs/InputCheckbox';
import RefreshIcon from '../../../assets/icon/Refresh';
import WarningIcon from '../../../assets/icon/Warning';
import { InputFile } from '../CustomInputs/InputFile';
import { doNothing } from '../../../utils/functions';
import UploadIcon from '../../../assets/icon/Upload';
import { useDnaOption } from './hook/useDnaOption';
import { Button, Text } from '@chakra-ui/react';
import { When } from '../When';

type Props = {
  onSubmit: () => void;
};

export function DnaOption({ onSubmit }: Props) {
  const {
    enableSwitchBetweenMethods,
    setSelectedDecodeOption,
    selectedDecodeOption,
    setSubscribeMethod,
    messageValidation,
    handleSubmit,
    idUploadFile,
    ref,
  } = useDnaOption({ onSubmit });
  return (
    <form onSubmit={handleSubmit} className={'flex flex-col items-center xl:items-start'}>
      <div>
        <Text fontWeight={600} fontSize={20} mb={8}>
          Do you already have your decoded DNA?
        </Text>
      </div>
      <div
        className={`flex  w-full max-w-[550px] xl:max-w-full gap-4 mb-6 
         ${
           !enableSwitchBetweenMethods
             ? 'flex-col-reverse xl:flex-row-reverse'
             : 'flex-col-reverse xl:flex-row-reverse'
         } 
         `}
      >
        <div
          className={
            'border w-full border-borderColor rounded-lg h-[230px] flex flex-col justify-between items-center py-4 px-6'
          }
        >
          <When value={!enableSwitchBetweenMethods}>
            <Text
              textAlign={'center'}
              fontWeight={600}
              width={'250px'}
              lineHeight={4}
              fontSize={14}
            >
              Yes, I can upload it to improve your personalized recommendation
            </Text>
          </When>
          <When value={enableSwitchBetweenMethods}>
            <Text
              flexDirection={'column'}
              textAlign={'center'}
              display={'flex'}
              fontWeight={600}
              width={'full'}
              lineHeight={4}
              fontSize={14}
            >
              <span>Yes, </span>
              <span className="font-normal">
                I want to upload it to improve my personalized recommendation{' '}
              </span>
              <span>for $30</span>
            </Text>
          </When>

          <InputFile onSetFile={() => setSelectedDecodeOption('upload')} id={idUploadFile} />
          <Button gap={4} borderRadius={8} type={'button'}>
            <UploadIcon /> <span>Upload file</span>
          </Button>
        </div>
        <div
          className={
            'border-2 w-full border-red-500 rounded-lg h-[230px] flex flex-col justify-between items-center py-4 px-6'
          }
        >
          <When value={!enableSwitchBetweenMethods}>
            <Text
              textAlign={'center'}
              color={'red.500'}
              fontWeight={600}
              width={'200px'}
              lineHeight={4}
              fontSize={14}
            >
              No, we are delighted to send you a free DNA decoding
            </Text>
          </When>
          <When value={enableSwitchBetweenMethods}>
            <Text
              flexDirection={'column'}
              textAlign={'center'}
              color={'red.500'}
              display={'flex'}
              fontWeight={600}
              width={'full'}
              lineHeight={4}
              fontSize={14}
            >
              <span>No, </span>
              <span className="font-normal">but i want to decode it</span>
              <span>for $160</span>
            </Text>
          </When>
          <div className={'flex flex-col justify-center items-center w-[150px] gap-2'}>
            <InputCheckbox
              defaultCheck={selectedDecodeOption === 'yes'}
              onClick={() => setSelectedDecodeOption((prev)=> prev === 'yes' ? undefined : 'yes')}
              colorScheme={'red'}
            />
            <When value={!enableSwitchBetweenMethods}>
              <Text lineHeight={4} fontWeight={400} fontSize={14} textAlign={'center'}>
                Yes, I want to decode my DNA for free
              </Text>
            </When>
            <When value={enableSwitchBetweenMethods}>
              <div className="h-10" />
            </When>
          </div>
          <div />
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <div className={'mb-6'}>
          <InputCheckbox
            defaultCheck={selectedDecodeOption === 'no'}
            onClick={() => setSelectedDecodeOption((prev)=> prev === 'no' ? undefined : 'no')}
          >
            <div className={'flex flex-col'}>
              <Text lineHeight={4} fontWeight={600} fontSize={14}>
                {" I don't want to upload or decode my DNA."}
              </Text>
              <Text lineHeight={4} fontWeight={300} fontSize={14} color={'textSecondary'}>
                {
                  "This option can be changed later and we'll send you a free collect kit and decode it"
                }
              </Text>
            </div>
          </InputCheckbox>
        </div>
        <Text lineHeight={4} fontWeight={400} fontSize={12} color={'textSecondary'} w={'400px'}>
          I take data protection really serious and all your data will be safe with us. You can read
          Sleepie Data Protection Policy
        </Text>
      </div>
      <input
        name={'validatorItem'}
        required={true}
        onChange={doNothing}
        className={'hidden'}
        checked={!messageValidation}
        type={'checkbox'}
        ref={ref}
      />
      <When value={messageValidation}>
        <div
          data-testid={'messageValidation'}
          className={'flex flex-row gap-2 items-center pl-4 h-max mt-2 mb-2'}
        >
          <WarningIcon />
          <label className={'text-alerts-red font-light text-xs leading-4'}>
            {messageValidation}
          </label>
        </div>
      </When>

      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <When value={enableSwitchBetweenMethods}>
          <Button
            onClick={setSubscribeMethod}
            justifyContent={'center'}
            alignItems={'center'}
            colorScheme={'red'}
            h={'fit-content'}
            display={'flex'}
            lineHeight={16}
            fontSize={14}
            w={'full'}
            flex={1}
            gap={4}
            p={4}
          >
            <RefreshIcon /> <Text color={'white'}>Change to subscription</Text>
          </Button>
        </When>
        <Button
          type={'submit'}
          w={'full'}
          h={'fit-content'}
          fontSize={14}
          p={4}
          flex={1}
          lineHeight={16}
        >
          <Text color={'white'}>Go to Checkout</Text>
        </Button>
      </div>
    </form>
  );
}
