import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../../components/sidebar2/Layout";


export default function RootLayout({ 
    children,
   }: {children: React.ReactNode}) {
    return (
            <Layout>{children}</Layout>
    )
  }

  
// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;