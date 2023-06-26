import { Box, Grid } from "@mui/material";
import mid1 from "src/assets/background/mid1.jpg";
import mid2 from "src/assets/background/mid2.jpg";

const bannerList: string[] = [mid1, mid2];

const MidBanner = () => {
  return (
    <Grid container sx={{ my: 20 }}>
      {bannerList.map((item, index) => (
        <Grid item md={6} key={index}>
          <Box
            component="img"
            src={item}
            alt="san pham mau"
            height={250}
            sx={{ width: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MidBanner;
