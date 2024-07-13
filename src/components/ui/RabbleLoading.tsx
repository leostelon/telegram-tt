import type { FC } from '../../lib/teact/teact';
import React, {
} from '../../lib/teact/teact';

import './RabbleLoading.scss';

import RabbleLogoSVGPath from '../../assets/rabble/Logo.svg';

export const RabbleLoading: FC = () => {
  return (
    <div className="loader-container fixed inset-0 z-50 grid place-items-center backdrop-blur-md">
      <img
        alt=""
        src={RabbleLogoSVGPath}
        className="animate-pulse size-36"
      />
    </div>
  );
};
