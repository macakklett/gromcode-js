const addImage = (imgSrc, callback) => {
  const page = document.querySelector('.page');
  const imgElem = document.createElement('img');
  imgElem.alt = 'image';
  imgElem.src = imgSrc;
  page.append(imgElem);

  const onLoadImg = () => {
    // const { width, height } = imgElem;
    callback(null, imgElem);
  };

  imgElem.addEventListener('error', () => callback('Image load is failed'));
  imgElem.addEventListener('load', onLoadImg);
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
