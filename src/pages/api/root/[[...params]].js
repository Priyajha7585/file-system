import { rootfolders } from "data/rootfolders";

function handler(req, res)
{
    const params = req.query.params;
    var subFolder;
    var index = rootfolders.findIndex(i=>i.name===params[0])
    subFolder = rootfolders[index]
    for(var i=1; i<params.length; i++)
    {
        index = subFolder.subFilesAndFolders.findIndex(i=>i.name===params[1])
        subFolder = subFolder.subFilesAndFolders[index]
        // indexArray.push(index)
    }
    if(req.method === "GET")
    {
        res.status(200).json(subFolder)
    }
    else if(req.method === 'POST')
    {
        const data = req.body.formData
        subFolder['subFilesAndFolders'].push(data)
        res.status(201).json(data)
    }
}

export default handler;