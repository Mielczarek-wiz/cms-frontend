export const convertToImage = (base64String) => {
  const binaryData = atob(base64String);
  const uint8Array = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }
  const blob = new Blob([uint8Array], { type: "image/png" });
  const objectURL = URL.createObjectURL(blob);
  return objectURL;
};
