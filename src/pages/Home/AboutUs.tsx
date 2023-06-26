import { Box, Grid, Stack, Typography } from "@mui/material";
import mid3 from "src/assets/background/mid3.jpg";
import mid4 from "src/assets/background/mid4.jpg";

const AboutUs = () => {
  return (
    <Box sx={{ width: "80vw", m: "auto" }}>
      <Stack direction="row" justifyContent="center" mt={4} mb={6}>
        <Typography variant="h3">VỀ CHÚNG TÔI</Typography>
      </Stack>

      <Grid container spacing={6}>
        <Grid item md={7} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" sx={{ wordBreak: "break-word" }}>
            Tự tin giới thiệu đến khách hàng về dịch vụ của mình là điều rất
            quan trọng với bất kỳ công ty nào. Với tư cách là một công ty chuyên
            cung cấp thiết bị vệ sinh và phòng tắm, chúng tôi tự hào mang đến
            cho khách hàng những sản phẩm và dịch vụ vượt trội với chất lượng
            đảm bảo và giá cả cạnh tranh. Chúng tôi luôn tập trung vào sự tiện
            nghi và thẩm mỹ trong mỗi sản phẩm của mình, để mang đến cho khách
            hàng trải nghiệm tốt nhất khi sử dụng. Đội ngũ nhân viên của chúng
            tôi luôn sẵn sàng hỗ trợ và tư vấn cho khách hàng trong quá trình
            lựa chọn sản phẩm và thiết kế phòng tắm sao cho đáp ứng mọi nhu cầu
            và phong cách riêng của từng khách hàng.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Box
            component="img"
            src={mid3}
            alt="san pham mau"
            // height={200}
            sx={{ border: "1px solid #DCD9D9", width: "100%" }}
          />
        </Grid>
        <Grid item md={5}>
          <Box
            component="img"
            src={mid4}
            alt="san pham mau"
            // height={200}
            sx={{ border: "1px solid #DCD9D9", width: "100%" }}
          />
        </Grid>
        <Grid item md={7} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" sx={{ wordBreak: "break-word" }}>
            Bên cạnh đó, chúng tôi luôn cam kết với khách hàng về chất lượng sản
            phẩm và dịch vụ của mình. Điều này được thể hiện qua việc sử dụng
            các vật liệu và công nghệ tiên tiến, đảm bảo cho khách hàng sử dụng
            sản phẩm của chúng tôi trong thời gian dài mà không cần phải lo lắng
            về sự hỏng hóc hay xuống cấp. Với sự chuyên nghiệp, tận tâm và chất
            lượng đảm bảo, chúng tôi hy vọng sẽ được đồng hành cùng khách hàng
            trong những dự án về thiết kế và xây dựng phòng tắm của mình.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
