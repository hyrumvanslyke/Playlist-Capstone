import React from "react";
import { useState, useContext, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import AuthContext from "../../state/AuthContext";
const NewPlaylist = () => {
  const nameRef = useRef();
  const imgRef = useRef();
  const { state } = useContext(AuthContext);

  const MySwal = withReactContent(Swal);
  let displayForm = () => {
    MySwal.fire({
      title: <h2 className="form-title">Create a New Playlist</h2>,
      showCancelButton: true,
      html: (
        <div>
          <input type="text" placeholder="name of playlist" ref={nameRef} />
          <input type="text" placeholder="picture for playlist" ref={imgRef} />
        </div>
      ),
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .post("/api/createPlaylist", {
            userId: state.id,
            name: nameRef.current.value,
            img: imgRef.current.value,
          })
          .then((response) => {
            console.log("Playlist created successfully:", response.data);

            Swal.fire("Success!", "Playlist created successfully!", "success");
          })
          .catch((error) => {
            console.error("Error creating playlist:", error);

            Swal.fire(
              "Error!",
              "Failed to create playlist. Please try again.",
              "error"
            );
          });
      } else {
        console.log("cancelled");
      }
    });
  };

  return (
    <div>
      <button onClick={displayForm}>New Playlist</button>
    </div>
  );
};

export default NewPlaylist;
