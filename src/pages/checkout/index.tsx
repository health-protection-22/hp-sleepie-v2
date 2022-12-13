import React from 'react';

import { CartMenuDrawer } from '../../components/shared/CartMenu/CartMenuDrawer';
import { AppDescription } from '../../components/shared/AppDescription';
import { LoginModal } from '../../components/shared/Modals/LoginModal';
import { ShortCardUser } from '../../components/shared/ShortCardUser';
import { StepIndicator } from '../../components/shared/StepIndicator';
import { ShippingForm } from '../../components/shared/ShippingForm';
import WithCartSetted from '../../components/shared/WithCartSetted';
import { useCheckout } from '../../hooks/pageCheckout/useCheckout';
import { DnaOption } from '../../components/shared/DnaOption';
import { CartMenu } from '../../components/shared/CartMenu';
import { SignUp } from '../../components/shared/SignUp';
import { When } from '../../components/shared/When';
import { doNothing } from '../../utils/functions';
import { Link, Spinner } from '@chakra-ui/react';
import { Page } from '../../components/Page';

function Checkout() {
  const {
    authenticationIsLoading,
    handleCloseLogin,
    isAuthenticated,
    handleOpenLogin,
    isWideVersion,
    description,
    actualStep,
    showLogin,
    nextStep,
    title,
  } = useCheckout();

  return (
    <Page title={title} description={description}>
      <LoginModal closeModal={handleCloseLogin} show={showLogin} onLogin={doNothing} />
      <main className="w-full h-fit flex justify-center">
        <div className=" max-w-[550px] xl:max-w-[1440px] w-full flex flex-col xl:flex-row gap-8 px-6 xl:px-[60px] py-8">
          <div className="flex flex-col flex-1 gap-8">
            <When value={!isAuthenticated}>
              <div className={`flex py-4 justify-center items-center w-full bg-highlightGray`}>
                {'Already have an account?'}
                {'\u00A0'}
                <button type={'button'} onClick={handleOpenLogin}>
                  <Link>Sign in</Link>
                </button>
              </div>
            </When>
            <div className="flex xl:border-b xl:border-b-borderColor w-full justify-center xl:justify-start py-4 items-center">
              <StepIndicator
                stepsLabel={['Sign Up', 'Payment & Shipping']}
                actualStep={actualStep}
              />
            </div>
            <When value={actualStep === 1}>
              <When value={authenticationIsLoading}>
                <div className="flex w-full h-full justify-center items-center">
                  <Spinner
                    color={'brand.500'}
                    emptyColor="gray.200"
                    size="md"
                    thickness="2px"
                    speed="0.75s"
                  />
                </div>
              </When>
              <When value={!authenticationIsLoading}>
                <SignUp onRegister={nextStep} />
              </When>
            </When>
            <When value={false}> {/* actualStep === 2 */}
              <DnaOption onSubmit={nextStep} />
            </When>
            <When value={false}> {/* actualStep === 3 */}
              <AppDescription onSubmit={nextStep} />
            </When>
            <When value={actualStep === 2}>  {/* actualStep === 4 */}
              <ShippingForm/>
            </When>
          </div>
          <div>
            <When value={isWideVersion}>
              <ShortCardUser />
              <CartMenu actualStep={actualStep} />
            </When>
          </div>
        </div>
      </main>
      <When value={!isWideVersion}>
        <CartMenuDrawer actualStep={actualStep} />
      </When>
    </Page>
  );
}

export default WithCartSetted(Checkout);
