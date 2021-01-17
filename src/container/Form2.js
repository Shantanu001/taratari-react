import React, { useState, useEffect } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Form2 = (props) => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
    if (status === "done") {
      console.log("url", meta.previewUrl);
      getBase64Image(meta.previewUrl, function (result) {
        console.log(result);
        let event = {};
        event.target = {};
        event.target.name = "Image";
        event.target.value = result;
        console.log("event created", event);
        props.onChange(event);
      });
    }
  };
  const getBase64Image = (imgUrl, callback) => {
    var img = new Image();

    // onload fires when the image is fully loadded, and has width and height

    img.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png"),
      dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      callback(dataURL); // the base64 string
    };

    // set attributes and src
    img.setAttribute("crossOrigin", "anonymous"); //
    img.src = imgUrl;
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => {
    console.log(files.map((f) => f.meta));
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*"
    />
  );
};
export default Form2;
