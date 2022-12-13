import Image from 'next/image';
import React from 'react';
import { ContentContainer } from '../ContentContainer';

export function BasedOnScienceContent() {
  return (
    <ContentContainer>
      <div className="flex flex-col items-center w-full gap-9">
        <div className="flex items-center justify-center gap-7">
          <Image
            src={'/images/Collected.png'}
            width={60}
            height={61}
            alt="Image of a report with a checked icon, symbolizing collected"
          />
          <div className="max-w-[200px] flex flex-col gap-2">
            <h3 className="font-semibold text-2xl text-text-secondary">Collected</h3>
            <h4 className="text-lg font-normal leading-5 text-text-primary">
              + 60.000 scientific studies collected
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Image
            src={'/images/Categorized.png'}
            width={60}
            height={61}
            alt="Image of a sankey graph in vertical, with 1 block on top, 2 on middle and 3 on base."
          />
          <div className="max-w-[200px]">
            <h3 className="font-semibold text-2xl text-text-secondary">Categorized</h3>
            <h4 className="text-lg font-normal leading-5 text-text-primary">
              Studies categorized by health goals
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Image
            src={'/images/Summarized.png'}
            width={60}
            height={61}
            alt="Image of a rounded meter with the pointer in the center"
          />
          <div className="max-w-[200px]">
            <h3 className="font-semibold text-2xl text-text-secondary">Summarized</h3>
            <h4 className="text-lg font-normal leading-5 text-text-primary">
              Studies summarized and graded
            </h4>
          </div>
        </div>
      </div>
      <p className="text-xl text-center font-normal text-textSecondary max-w-[570px]">
        Science is our driving force, therefore all of the information you provide will be analyzed
        by our team of specialists to assure that your personalized treatment is precise and
        effective.
      </p>
    </ContentContainer>
  );
}
