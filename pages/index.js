import Head from "next/head"
import { Geist, Geist_Mono } from "next/font/google"
import ManualHeader from "../components/ManualHeader"
// import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader />
            {/* <Header /> */}
            <LotteryEntrance />
        </div>
    )
}
