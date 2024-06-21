import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  carousel: {
    width: "100%",
    marginTop: "30px",
    height: "420px",
    "& img": {
      height: "420px",
      width: "-webkit-fill-available",
    },
    "& div": {
      height: "100%",
    },
  },
  carouselwrapper: {
    position: "relative",
  },
}));

function DashboardCarosal() {
  const classes = useStyles();

  const items = [
    {
      name: "Random Name #1",
      img: "https://images.ctfassets.net/wowgx05xsdrr/49WHhInw1VCXBIBYctkNM2/9e75275d775df31b60177a78b79f5ec6/ecommerce-fashion.png?fm=webp&w=3840&q=75",
    },
    {
      name: "Random Name #2",
      img: "https://www.ecommercewebsitedevelopmentchennai.in/wp-content/uploads/2016/08/clothing-ecommerce-website.png",
    },
  ];

  return (
    <Carousel
      className={classes.carousel}
      autoPlay={true}
      swipe={true}
      indicators={false}
    >
      {items.map((item, index) => (
        <div className={classes.carouselwrapper} key={index}>
          <img alt="banner4" src={item.img} />
          <h2>{item.name}</h2>
        </div>
      ))}
    </Carousel>
  );
}

export default DashboardCarosal;
