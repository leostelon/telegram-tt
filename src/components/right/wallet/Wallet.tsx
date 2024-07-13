import type { FC } from '../../../lib/teact/teact';
import React, {
  memo,
} from '../../../lib/teact/teact';
import { withGlobal } from '../../../global';

import { getShortWalletAddress } from '../../../util/userWallet';

import useHistoryBack from '../../../hooks/useHistoryBack';

import { RabbleLoading } from '../../ui/RabbleLoading';

import './Wallet.scss';

import ArbLogoPath from '../../../assets/rabble/arb.png';
import EthLogoPath from '../../../assets/rabble/eth.png';
import OpLogoPath from '../../../assets/rabble/op.png';
import PlusLogoPath from '../../../assets/rabble/plus.png';
import PolLogoPath from '../../../assets/rabble/pol.png';
import SendLogoPath from '../../../assets/rabble/send.png';
import SettingLogoPath from '../../../assets/rabble/setting.png';
import SwapLogoPath from '../../../assets/rabble/swap.png';

type StateProps = {
  walletAddress: string;
};

export type OwnProps = {
  isActive: boolean;
  onClose: NoneToVoidFunction;
};

const Wallet: FC<OwnProps & StateProps> = ({ isActive, onClose, walletAddress }) => {
  useHistoryBack({
    isActive,
    onBack: onClose,
  });

  return walletAddress ? (
    <div className="wallet-container">
      <div className="wallet-address">
        <h3 className="address">{getShortWalletAddress(walletAddress)}</h3>
      </div>
      <div>
        <h1>$21,041</h1>
      </div>
      <div className="wallet-actions">
        <div className="action-icon">
          <img src={PlusLogoPath} alt="" />
          <p>Recieve</p>
        </div>
        <div className="action-icon">
          <img src={SendLogoPath} alt="" />
          <p>Send</p>
        </div>
        <div className="action-icon">
          <img src={SettingLogoPath} alt="" />
          <p>Swap</p>
        </div>
        <div className="action-icon">
          <img src={SwapLogoPath} alt="" />
          <p>Buy</p>
        </div>
      </div>
      <div className="wallet-assets">
        <div className="asset">
          <div className="asset-img" style={`background-image:url("${EthLogoPath}")`} />
          <div className="asset-info">
            <div>
              <div className="asset-name">Ethereum</div>
              <div className="asset-balance">1.2 ETH</div>
            </div>
            <div className="asset-value">
              $0.94
            </div>
          </div>
        </div>
        <div className="asset">
          <div className="asset-img" style={`background-image:url("${PolLogoPath}")`} />
          <div className="asset-info">
            <div>
              <div className="asset-name">POLYGON</div>
              <div className="asset-balance">35 MATIC</div>
            </div>
            <div className="asset-value">
              $0.94
            </div>
          </div>
        </div>
        <div className="asset">
          <div className="asset-img" style={`background-image:url("${ArbLogoPath}")`} />
          <div className="asset-info">
            <div>
              <div className="asset-name">Arbitrum</div>
              <div className="asset-balance">0.362 ETH</div>
            </div>
            <div className="asset-value">
              $0.94
            </div>
          </div>
        </div>
        <div className="asset">
          <div className="asset-img" style={`background-image:url("${OpLogoPath}")`} />
          <div className="asset-info">
            <div>
              <div className="asset-name">Optimism</div>
              <div className="asset-balance">2.3 ETH</div>
            </div>
            <div className="asset-value">
              $0.94
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <RabbleLoading />;
};

export default memo(withGlobal(
  (global): StateProps => {
    const { userWallet } = global;

    return {
      walletAddress: userWallet?.walletAddress,
    };
  },
)(Wallet));
