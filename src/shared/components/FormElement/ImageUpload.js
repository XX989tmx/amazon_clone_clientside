import React, { useEffect, useRef, useState } from "react";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = (params) => {
    filePickerRef.current.click();
  };
  return (
    <div>
      <input
        type="file"
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      <div>
        {previewUrl && (
          <img
            src={previewUrl}
            alt="preview"
            style={{ width: "200px", height: "150px" }}
          />
        )}{" "}
        {!previewUrl && <p>商品の画像を選択してください。</p>}
      </div>
      <button type="button" onClick={pickImageHandler}>
        画像を選択してください
      </button>
    </div>
  );
};

export default ImageUpload;
