import React from "react";
import styles from "./Navbar.module.css";
import {
  Flex,
  Box,
  Spacer,
  Image,
} from "@chakra-ui/react";

  import { LoginModal } from "./LoginModal";
   import { CartDrawer } from "./CartDrawer";
  import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.nav}>
      <Flex
        w="90%"
        m="auto"
        // minWidth="max-content"
        alignItems="center"
        gap="5"
        color="#262626"
        fontWeight="bold"
        p={2.5}
        fontFamily="sans-serif"
        fontSize="13px"
      >
        <NavLink to="/">
        <Image
          height={9}
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
          alt="logo"
        />
        </NavLink>
        <Spacer />
        <Box>Best Sellers</Box>
        <Box>Just Launched</Box>
        <Box>Men</Box>
        <Box>Women</Box>
        <Box>Footwear</Box>
        <Box>Cardio</Box>
        <Box>Cycles</Box>
        <Box>Accessories</Box>
        <Box>Supplements</Box>
        <Box>Equipment</Box>
        <Spacer />

         <Box display="flex" alignItems="center" gap={5}>
          {LoginModal()}
          {CartDrawer()}
        </Box>
      </Flex> 
    </div>
  );
}

export { Navbar };
