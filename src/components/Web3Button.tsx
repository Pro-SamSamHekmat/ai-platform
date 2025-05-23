import { useConnect } from 'wagmi';

export default function Web3Button() {
  const { connect } = useConnect();
  
  return (
    <button onClick={() => connect()}>
      Connect Wallet
    </button>
  );
}