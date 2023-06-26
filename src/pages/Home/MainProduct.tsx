import { Box, Grid } from "@mui/material";
import mp1 from "src/assets/background/sp1.jpg";
import mp2 from "src/assets/background/sp2.jpg";
import mp3 from "src/assets/background/sp3.jpg";
import mp4 from "src/assets/background/sp4.jpg";
import mp5 from "src/assets/background/sp5.jpg";
import mp6 from "src/assets/background/sp6.jpg";

const productList: string[] = [mp1, mp2, mp3, mp4, mp5, mp6];

const MainProduct = () => {
  return (
    <Grid container sx={{ width: "80vw", m: "auto", mt: 5 }}>
      {productList.map((product, index) => (
        <Grid
          item
          md={4}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
          }}
        >
          <Box
            component="img"
            src={product}
            alt="san pham mau"
            height={200}
            width={200}
            sx={{ border: "1px solid #DCD9D9" }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MainProduct;
