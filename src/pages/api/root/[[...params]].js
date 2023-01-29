import { rootfolders } from "data/rootfolders";

// const response = await fetch('http://localhost:3000/api');
// const rootfolders = await response.json();
function handler(req, res)
{
    const params = req.query.params;
    console.log("Params")
    console.log(params)
    var subFolder;
    var index = rootfolders.findIndex(i=>i.name===params[0])
    console.log("root folder")
    console.log(rootfolders)
    subFolder = rootfolders[index]
    console.log("Index")
    console.log(index)
    for(var i=1; i<params.length; i++)
    {
        index = subFolder.subFilesAndFolders.findIndex(t=>t.name===params[i])
        subFolder = subFolder.subFilesAndFolders[index]
    }
    subFolder = subFolder !== undefined ? subFolder : []
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