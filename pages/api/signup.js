import { BACKEND_URL } from "../../config/app"


export default async (req, res) => {
    if (req.method === "POST") {
        
        const { name, email, password } = req.body
        
        const resApi = await fetch(`${BACKEND_URL}/auth/user`, {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify({name, email, password})
        })
        const data = await resApi.json()
        if (resApi.ok) {
            res.status(200).json(data)
            return
        } else {
            res.status(400).json(data)
            return
        }
    } else {
        res.setHeader("Allow", ["POST"])
        res.status(400).json({
            "message": `${req.method} is not allowed`
        })
        return
    }
}