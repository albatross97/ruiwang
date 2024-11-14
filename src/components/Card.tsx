import React, { useCallback, useMemo, useState } from 'react';

import { Button } from '../lib/Button';

export enum Tag {
  FULL_STACK = 'FULL STACK',
  DATA_VIZ = 'DATA VIZ',
  AR_VR = 'AR/VR',
  MACHINE_LEARNING = 'MECHINE LEARNING',
}

export type CardType = {
  title: string;
  subtitle?: string;
  image: string;
  url: string;
  label: string;
  description: string;
  tag?: Tag[];
};

export const Card = ({
  title,
  subtitle,
  label,
  description,
  url,
  image,
}: CardType) => {
  const [isExtended, setIsExtended] = useState(false);
  const toggleExtended = useCallback(
    () => setIsExtended(!isExtended),
    [setIsExtended, isExtended]
  );
  const isExternalUrl = useMemo(
    () => url.startsWith('https://') || url.startsWith('http://'),
    [url]
  );

  return (
    <div className="project shadow-[1px_1px_6px_rgba(0,0,0,0.3)] h-fit">
      <div
        className="project-basic relative flex justify-center bg-[#5d5d5d] cursor-pointer"
        onClick={toggleExtended}>
        <img
          src={image}
          loading="lazy"
          sizes="(max-width: 479px) 80vw, (max-width: 767px) 58vw, (max-width: 991px) 18vw, 19vw"
          className="opacity-70 grayscale-[85%] hover:opacity-85 hover:grayscale-[50%]"
        />
        {!isExtended && (
          <div className="project-name absolute bottom-0 text-center mb-[10%] w-full flex flex-col gap-1 px-3 pointer-events-none">
            <div
              className="text-primary text-sm font-semibold"
              style={{ textShadow: '1px 1px 2px #5d5d5d' }}>
              {subtitle}
            </div>
            <div className="text-gray-100 text-base font-medium leading-4">
              {title}‍
            </div>
            <div className="text-xs text-gray-100">{label}</div>
          </div>
        )}
      </div>
      {isExtended && (
        <div className="card bg-white p-[20px] flex flex-col gap-4">
          <div>
            <div className="card-name font-bold text-xl leading-5 mb-1">
              {title}
            </div>
            <span className="card-label text-primary font-medium">{label}</span>
          </div>
          <div className="card-description">
            {description} <br />
          </div>
          <Button variant="outline" asChild>
            <a
              href={url}
              target={isExternalUrl ? '_blank' : ''}
              className="primary-button cardbutton w-button">
              &gt;&gt; Explore More
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};
