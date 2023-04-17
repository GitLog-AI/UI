import { useState, useRef, Dispatch, SetStateAction } from 'react'
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
// import env from "@beam-australia/react-env"
export default function CloudFlareCaptcha(props: { setVerified: Dispatch<SetStateAction<boolean | undefined>> }) {
    const [token, setToken] = useState<string>()
    const setVerified = props.setVerified
    const ref = useRef<TurnstileInstance>(null)
    const siteKey: string | undefined = "0x4AAAAAAADT03iYw5TsWnA0"

    if (siteKey) {



        return <Turnstile
            siteKey={siteKey}
            options={{
                theme: 'light',
                refreshExpired: 'auto'
            }
            }
            scriptOptions={{
                appendTo: 'body'
            }}
            ref={ref}
            onExpire={() => ref.current?.reset()}
            onSuccess={async (token) => { setToken(token); setVerified(await verify(token)) }}
        />

    } else {
        return (<></>)
    }
}



async function verify(token: string): Promise<boolean> {
    console.log("[CloudFlareCaptcha] Verifying")

    const response = await fetch((process.env.NEXT_PUBLIC_URL) + '/api/verifyTurnstile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
    })

    const data = await response

    if (data.status === 200) {
        console.log("[CloudFlareCaptcha] Verified")
        return true
    }
    else {
        console.log("[CloudFlareCaptcha] Verification Failed")
        return false
    }

}


export async function getServerSideProps(context: {}) {
    return {
        props: {}, // will be passed to the page component as props
    }
}