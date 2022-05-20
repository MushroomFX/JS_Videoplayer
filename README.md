# JS_Videoplayer

  function getDataUrl(img) {
   // Create canvas
   const canvas = document.createElement('canvas');
   const ctx = canvas.getContext('2d');
   // Set width and height
   canvas.width = img.width;
   canvas.height = img.height;
   // Draw the image
   ctx.drawImage(img, 0, 0);
   return canvas.toDataURL('image/jpeg');
}

for(i=0;i<document.getElementsByTagName("img").length;i++){
	console.log(getDataUrl(document.getElementsByTagName("img")[i]))
}
