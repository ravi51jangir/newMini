import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { arbitrum, sepolia } from "@reown/appkit/networks";

// Directly set your projectId here
export const projectId = "537931f27ae9d94a71f7e559a4aff8e8"; // Hardcoded project ID

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const networks = [arbitrum, sepolia];

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId, // Using the hardcoded projectId here
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
