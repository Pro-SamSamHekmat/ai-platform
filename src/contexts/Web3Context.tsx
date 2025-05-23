import { createContext } from 'react'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const chains = [mainnet, polygon]
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'

const { provider } = configureChains(chains, [publicProvider()])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

export const Web3Context = createContext({})

export function Web3Provider({ children }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        {children}
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}