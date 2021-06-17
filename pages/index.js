import Head from "next/head";
import CounterView from "../components/CounterView";
export default function Home() {
  return (
    <>
      <Head>
        <title>React Context API and Jest Practice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-md mx-auto- ml-8 my-8">
        <CounterView />
      </div>
    </>
  );
}
