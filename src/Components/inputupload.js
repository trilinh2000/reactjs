import { useState } from "react"

const Upload=()=>{
    const [selectedFile,setSelectedFile]=useState();
    const [isFilePicked,setIsFilePicked]=useState(false);
    const handleChange=(e)=>{
        setSelectedFile(e.target.files[0]);
        setIsFilePicked(true);
    }
    const handleSubmission=()=>{};
    return(
        <div>
            <input type="file" name="file" onChange={handleChange}></input>
            {isFilePicked?(<div>
                <p>FileName:{selectedFile.name}</p>
                <p>FileType:{selectedFile.type}</p>
                <p>Size in bytes:{selectedFile.size}</p>
                <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
            </div>):(<p>
                <p>Select a file to show details</p>
            </p>)}
            <button onClick={handleSubmission}>Submit</button>
        </div>
    )
}
export default Upload;