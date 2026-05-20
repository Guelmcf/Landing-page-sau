export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const serviceId  = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey  = process.env.EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
        const missing = ['EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', 'EMAILJS_PUBLIC_KEY']
            .filter(k => !process.env[k])
        return res.status(500).json({ error: 'Missing env vars', missing })
    }

    const { nome, empresa, email, numero, numeroRefeicoes } = req.body as Record<string, string>

    try {
        const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id:      serviceId,
                template_id:     templateId,
                user_id:         publicKey,
                template_params: { nome, empresa, email, numero, numeroRefeicoes },
            }),
        })

        if (!emailRes.ok) {
            const detail = await emailRes.text()
            return res.status(502).json({ error: 'Email failed', detail })
        }
    } catch {
        return res.status(500).json({ error: 'Internal server error' })
    }

    const sheetsUrl = process.env.GOOGLE_SHEETS_URL
    if (sheetsUrl) {
        fetch(sheetsUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, empresa, email, numero, numeroRefeicoes, data: new Date().toISOString() }),
        }).catch(() => {})
    }

    return res.status(200).json({ ok: true })
}
