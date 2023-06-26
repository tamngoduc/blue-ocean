import { Grid, Box } from "@mui/material";
import end1 from "src/assets/background/end1.png";
import end2 from "src/assets/background/end2.png";
import end3 from "src/assets/background/end3.png";
import end4 from "src/assets/background/end4.png";

const imgList: string[] = [end1, end2, end3, end4];

const Service = () => {
  return (
    <Grid container sx={{ width: "80vw", m: "auto", my: 30 }}>
      {imgList.map((img, index) => (
        <Grid
          item
          md={3}
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={img}
            alt="san pham mau"
            height={150}
            width={150}
            sx={{ border: "1px solid #DCD9D9", p: 5 }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Service;
