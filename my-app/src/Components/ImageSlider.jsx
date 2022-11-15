import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/f55910d1-7bd9-4d37-8906-cb489d2e97d1.jpg",
  },
  {
    url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/9a5bae7a-02e9-4ceb-a356-623b926ed017.jpg",
  },
  {
    url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/abf6edd9-c9e3-4ce9-a1a5-f9d0f5ee0e6a.jpg",
  },
  {
    url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/c0d1ae46-fbbe-417d-aa88-c15123a4e883.jpg",
  },
];

function ImageSlider() {
  return (
    <div style={{ marginBottom: "80px" }}>
      <SimpleImageSlider
        width="100%"
        height="320px"
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}

export { ImageSlider };
