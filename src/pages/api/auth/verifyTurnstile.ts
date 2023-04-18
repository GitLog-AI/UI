// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { request } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'

type Output = {
    result: string
}

type Input = {
    turnstileToken: string
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Output>
) {
    console.log("[/api/authverifyTurnstile] Sending challenge token to CloudFlare")
    let secret = "0x4AAAAAAAEEjhhQoAovwo-GxIPrm8xDY9U"
    if (secret) {
        const body = `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(req.body.token)}`
        const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

        const response = await fetch(url, {
            method: 'POST',
            body,
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        const outcome = await response.json();

        console.log(outcome)

        if (outcome.success) {
            let outcome = "Success"
            console.log("[/api/verifyTurnstile] Success Turnstile")
            res.status(200).json({ result: outcome })
        }
        else {
            let outcome = "Failure"
            console.log("[/api/verifyTurnstile] Failed Turnstile")
            res.status(403).json({ result: outcome })
        }
    }

}
