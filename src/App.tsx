/** @jsxImportSource @emotion/react */

import song from "./sunnyAfternoon";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { isEmpty } from "lodash";
import ViewSong from "./pages/ViewSong";

function App() {
  const [uploadedSong, setUploadedSong] = useState(null);

  const onDrop = (acceptedFiles: File[]) => {
    console.log("acceptedFiles", acceptedFiles);

    if (!isEmpty(acceptedFiles)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // @ts-ignore
        const song = JSON.parse(e.target?.result);
        setUploadedSong(song);
      };

      reader.readAsText(acceptedFiles[0]);
    }
  };

  const onDropRejected = () => {
    console.log("rejected too many files");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "text/json": [".json"],
    },
    maxFiles: 1,
    onDrop,
    onDropRejected,
  });

  return (
    <div>
      <h1>MELODY 4000</h1>

      <div
        css={{ width: "600px", height: "400px", backgroundColor: "white" }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      {uploadedSong && <ViewSong song={uploadedSong} />}
    </div>
  );
}

export default App;
