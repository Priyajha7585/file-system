// import '@/styles/globals.css'
import { useEffect, useState } from 'react';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return <Component {...pageProps} />
  }
}
