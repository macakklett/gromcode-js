const addImage = imgSrc => {
  return new Promise((resolve, reject) => {
    const page = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.alt = 'image';
    imgElem.src = imgSrc;
    page.append(imgElem);

    const onLoadImg = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('error', () => reject(new Error('Image load is failed')));
    imgElem.addEventListener('load', onLoadImg);
  });
};

// callack function
const onImageLoaded = data => {
  // const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${data.width} x ${data.height}`;
};

// examples
const imgPromise = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
);
imgPromise.then(data => onImageLoaded(data)).catch(e => console.log(e));
