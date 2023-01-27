import { rootfolders } from "data/rootfolders";

function handler(req, res)
{
    if(req.method === "GET")
    {
        res.status(200).json(rootfolders)
    }
    else if(req.method === 'POST')
    {
        const data = req.body.formData
        rootfolders.push(data)
        res.status(201).json(data)
    }
}

export default handler;