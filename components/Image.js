import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid}>
      <img src={blok.image.filename}/>
    </div>
  );
};

export default Image;
