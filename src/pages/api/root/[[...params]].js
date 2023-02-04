import { rootfolders } from "data/rootfolders";

function handler(req, res)
{
  const params = req.query.params;
  var subFolder;
  let deleteFolder;
  var index = rootfolders.findIndex(i=>i.name===params[0])
  subFolder = rootfolders[index]
  deleteFolder = subFolder
  for(var i=1; i<params.length; i++)
  {
    index = subFolder.subFilesAndFolders.findIndex(t=>t.name===params[i])
    subFolder = subFolder.subFilesAndFolders[index]
  }
  for(let i=1; i<params.length-1; i++)
  {
    index = deleteFolder.subFilesAndFolders.findIndex(t=>t.name===params[i])
    deleteFolder = deleteFolder.subFilesAndFolders[index]
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
  else if(req.method == "DELETE")
  {
    const fileOrFolderToBeDeleted = params[params.length - 1]
    const i = deleteFolder.subFilesAndFolders.findIndex((f)=>f.name===fileOrFolderToBeDeleted)
    deleteFolder.subFilesAndFolders.splice(i, 1)
    res.status(200).json(fileOrFolderToBeDeleted)
  }
}

export default handler;