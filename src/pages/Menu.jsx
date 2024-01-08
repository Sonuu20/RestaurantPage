import React from "react";
import { MenuList } from "../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ 
            maxWidth: "390px", 
            display: "flex",
             m: 2,
             ' @media (max-width: 768px)': {
              maxWidth: "300px"
             },
           }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="body2">₹ {menu.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
  );
};

export default Menu;