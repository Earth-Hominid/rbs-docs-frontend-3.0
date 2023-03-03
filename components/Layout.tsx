import Head from 'next/head';
import Footer from './footer/Footer';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  keywords: string;
  description: string;
  background: string;
  children?: React.ReactNode;
  mainPage: string;
  currentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
  styles: string;
  width: string;
}

const Layout: React.FC<Props> = ({
  description,
  children,
  title,
  keywords,
  background,
  mainPage,
  currentPage,
  mainPageTitle,
  currentPageTitle,
  styles,
  width,
}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main></main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Rede BS docs | Plataforma de aprendizagem Rede BS',
  description:
    'A plataforma de aprendizado Rede BS foi criada para ajudá-lo a ter sucesso em sua função na Rede BS',
  keywords: `aprendendo,administrar, supermercado, eletromóveis
  `,
};
