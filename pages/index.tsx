import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <main>
        <Layout
          title="Rede BS docs"
          description="Plataforma de aprendizado da Rede BS"
          keywords="aprendendo,administrar, supermercado, eletromóveis"
          background="bg-white"
          mainPage="/"
          mainPageTitle="Rede BS Docs"
          currentPage=""
          currentPageTitle="Rede BS Docs"
          styles="pb-10 flex justify-center min-h-screen"
          width="max-w-5xl"
        />
        <Image
          src="/logo.png"
          alt="Next.js Logo"
          width={600}
          height={200}
          priority
        />
      </main>
    </>
  );
}
