import { Stack, Typography, Grid, Box } from "@mui/material";
import hot1 from "src/assets/background/hot1.jpg";
import hot2 from "src/assets/background/hot2.jpg";
import hot3 from "src/assets/background/hot3.jpg";
import hot4 from "src/assets/background/hot4.jpg";
import hot5 from "src/assets/background/hot5.jpg";
import hot6 from "src/assets/background/hot6.jpg";
import hot7 from "src/assets/background/hot7.jpg";
import hot8 from "src/assets/background/hot8.jpg";

const productList: string[] = [hot1, hot2, hot3, hot4, hot5, hot6, hot7, hot8];

const HotProduct = () => {
  return (
    <Box sx={{}}>
      <Stack alignItems="center" sx={{ mt: 30, mb: 5 }}>
        <Typography variant="h3">SẢN PHẨM NỔI BẬT</Typography>
        <Typography variant="subtitle1">
          Mang tới trải nghiệm tốt nhất cho khách hàng là sứ mệnh của chúng tôi
        </Typography>
      </Stack>

      <Grid container sx={{ width: "80vw", m: "auto", mt: 5 }}>
        {productList.map((product, index) => (
          <Grid
            item
            md={3}
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
    </Box>
  );
};

export default HotProduct;
