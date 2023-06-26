import { Box, Grid, Typography, Divider } from "@mui/material";
import logo from "src/assets/background/logo.png";

const contact: string[] = [
  "Công ty TNHH Thương mại và Dịch vụ Blue Ocean",
  "Giấy phép kinh doanh số: 0317688709 do sở KHĐT Thành phố Hồ Chí Minh cấp ngày 17/02/2023",
  "Địa chỉ: 159 Nguyễn Thị Nhung, Khu đô thị Vạn Phúc, Thành phố Thủ Đức, Hồ Chí Minh",
  "Hotline: 0343.321.680",
  "Email: blueoceangroup79@gmail.com",
];

const support: string[] = [
  "Phương thức thanh toá",
  "Chính sách vận chuyển và giao hàng",
  "Chính sách trả hàng và hoàn tiền",
  "Chính sách bảo mật Chính sách kiểm hàng",
];

const MainFooter = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: 20, mt: "auto" }}>
      <Grid container spacing={4} sx={{ width: "80vw", m: "auto" }}>
        <Grid item md={5} xs={12}>
          <Typography variant="h5">LIÊN HỆ</Typography>
          <Divider sx={{ backgroundColor: "#fff", mt: 3, mb: 5 }} />
          {contact.map((item, index) => (
            <Typography
              key={index}
              variant="caption"
              component="p"
              sx={{ my: 2 }}
            >
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item md={5} xs={12}>
          <Typography variant="h5">HỖ TRỢ KHÁCH HÀNG</Typography>
          <Divider sx={{ backgroundColor: "#fff", mt: 3, mb: 5 }} />
          {support.map((item, index) => (
            <Typography
              key={index}
              variant="caption"
              component="p"
              sx={{ my: 2 }}
            >
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item md={2} xs={12}>
          <Box
            component="img"
            src={logo}
            alt="san pham mau"
            // height={200}
            width={"100%"}
            sx={{ p: 5 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainFooter;
