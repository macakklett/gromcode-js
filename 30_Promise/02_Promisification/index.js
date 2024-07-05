import { addImage } from './addImage.js';

export const addImageV2 = url => {
  return new Promise((resolve, reject) => {
    addImage(url, (error, dimensions) => {
      if (error) {
        reject(new Error('Image load failed'));
      } else {
        resolve(dimensions);
      }
    });
  });
};

// examples

addImageV2(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
)
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
