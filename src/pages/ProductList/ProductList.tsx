import { Grid, Box, Typography, Stack, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { PRODUCTTYPE } from "src/constant/navigation";
import data from "src/assets/data/data.json";
import { Service } from "src/components/Service";
import MenuSideBar from "./MenuSideBar";

const ProductList = () => {
  const { productType } = useParams();

  const type: number = PRODUCTTYPE[productType as keyof typeof PRODUCTTYPE];

  const productList: Product[] = data.filter(
    (product) => product.type === type
  );

  return (
    <Box>
      <Box sx={{ width: "80vw", mx: "auto", mt: 20 }}>
        <Grid container spacing={4}>
          <Grid item md={3} pt={3}>
            <MenuSideBar />
          </Grid>
          <Grid item md={9}>
            <Grid container>
              {productList.map((product) => (
                <Grid key={product.id} item md={4}>
                  <Box p={3}>
                    <Stack
                      sx={{ border: "1px solid #DCD9D9", height: "100%" }}
                      divider={<Divider orientation="horizontal" flexItem />}
                      alignItems="center"
                      justifyContent="center"
                      minWidth="200px"
                    >
                      <Box
                        component="img"
                        src={product.image}
                        alt={product.name}
                        height={200}
                        width={200}
                        // width="100%"
                      />
                      <Typography
                        variant="body3"
                        py={3}
                        sx={{ textAlign: "center" }}
                      >
                        {product.name}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Service />
      </Box>
    </Box>
  );
};

export default ProductList;
