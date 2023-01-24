import { rootfolders } from "data/rootfolders";

function handler(req, res)
{
    res.status(200).json(rootfolders)
}

export default handler;