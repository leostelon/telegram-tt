import type { FC } from '../../lib/teact/teact';
import React from '../../lib/teact/teact';

import Loading from '../ui/Loading';

const Wallet: FC = () => {
  return 'isWalletLoaded condition here' ? (
    <div>
      Wallet here
    </div>
  ) : <Loading />;
};

export default Wallet;
