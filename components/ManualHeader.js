import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis()

    // some buttton that connects us and changes connected to be true

    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account found")
            }
        })
    }, [])

    return (
        <div className="p-5 border-b-2 flex flex-row items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">Decentralized Lottery</h1>
            <div class="ml-auto py-4 px-4">
                {account ? (
                    <div>
                        Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                    </div>
                ) : (
                    <button
                        className="bg-blue-400 p-2 text-white font-bold rounded-sm cursor-pointer"
                        onClick={async () => {
                            await enableWeb3()
                            if (typeof window !== "undefined") {
                                window.localStorage.setItem("connected", "injected")
                            }
                        }}
                        disabled={isWeb3EnableLoading}
                    >
                        Connect
                    </button>
                )}
            </div>
        </div>
    )
}
