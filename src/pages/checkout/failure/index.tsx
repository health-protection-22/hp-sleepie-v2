import React from 'react';

import WithAuthentication from '../../../components/shared/WithAuthentication';
import { Page } from '../../../components/Page';
import { TextBox } from '../../../components/shared/TextBox';

function Failure() {
  return (
    <Page>
      <main className="w-full h-[200px] flex justify-center items-center">
        <div className=" max-w-[550px] xl:max-w-[550px] w-full flex flex-col  gap-8 px-6 xl:px-[60px] py-8">
          <TextBox title='Failure'>
            Ops, something went wrong. Please contact to us.
          </TextBox>
        </div>
      </main>
    </Page>
  );
}

export default WithAuthentication(Failure);
