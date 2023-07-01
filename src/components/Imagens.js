import mountain from "../assets/img2.jpg" 

const Images = () => {
  return(
    <div>
      <img src="/img1.jpg" />
      <img src={mountain}/>
    </div>
  );
};

export default Images;