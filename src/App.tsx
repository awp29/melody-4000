/** @jsxImportSource @emotion/react */

import sunnyAfternoon from "./sunnyAfternoon";
import { useDropzone } from "react-dropzone";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { lighten } from "polished";
import { PrimaryButton } from "./components/buttons";
import { Nav } from "./components/nav";

function App() {
  const navigate = useNavigate();

  const onDrop = (acceptedFiles: File[]) => {
    if (!isEmpty(acceptedFiles)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // TODO: TYPE THIS CORRECTLY
        // @ts-ignore
        const song = JSON.parse(e.target?.result);

        navigate("/song", {
          state: {
            songToView: song,
          },
        });
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
      <Nav>
        <h1 css={{ fontSize: "20px", fontWeight: "bold" }}>MELODY 4000</h1>
      </Nav>

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: "60%",
            height: "400px",
            border: "2px dashed black",
            borderRadius: "20px",
            borderColor: isDragActive ? "blue" : "black",
          }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <p css={{ fontSize: "14px" }}>
            <span
              css={{
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration: "underline",
                "&:hover": {
                  color: lighten(0.3, "black"),
                },
              }}
            >
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
        </div>

        <PrimaryButton
          css={{ marginTop: "40px" }}
          onClick={(e) => {
            navigate("/song", {
              state: {
                songToView: sunnyAfternoon,
              },
            });
          }}
        >
          View Example Song
        </PrimaryButton>
      </div>
    </div>
  );
}

export default App;
