import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { Chain, arbitrum, base, mainnet, optimism, polygon, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'c52f63cb512b7b43a8724eae05cb5130',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
