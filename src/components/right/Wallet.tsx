import type { FC } from '../../lib/teact/teact';
import React, {
  memo,
} from '../../lib/teact/teact';
import { withGlobal } from '../../global';

import useHistoryBack from '../../hooks/useHistoryBack';

import Loading from '../ui/Loading';

type StateProps = {};

export type OwnProps = {
  isActive: boolean;
  onClose: NoneToVoidFunction;
};

const Wallet: FC<OwnProps & StateProps> = ({ isActive, onClose }) => {
  useHistoryBack({
    isActive,
    onBack: onClose,
  });

  return 'isWalletLoaded condition here' ? (
    <div>
      Wallet here
    </div>
  ) : <Loading />;
};

export default memo(withGlobal(
  (): StateProps => {
    return {
    };
  },
)(Wallet));
