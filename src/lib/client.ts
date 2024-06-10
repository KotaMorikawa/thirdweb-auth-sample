import { createThirdwebClient, defineChain } from "thirdweb";
import { createWallet, inAppWallet, walletConnect } from "thirdweb/wallets";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!;
const secretKey = process.env.THIRDWEB_SECRET_KEY;

export const client = createThirdwebClient(
  secretKey
    ? { secretKey }
    : {
        clientId,
      }
);

export const chain = defineChain({
  id: 5039,
  rpc: "https://subnets.avax.network/onigiri/testnet/rpc",
  name: "ONIGIRI Testnet",
  nativeCurrency: {
    name: "ONIGIRI",
    symbol: "ONIGIRI",
    decimals: 18,
  },
  blockExplorers: [
    {
      name: "ONIGIRI Explorer",
      url: "https://subnets-test.avax.network/onigiri",
    },
  ],
  testnet: true,
});

export const wallets = [
  walletConnect(),
  createWallet("io.metamask"),
  inAppWallet({
    auth: {
      options: ["email", "google", "apple", "facebook", "phone"],
    },
  }),
];
