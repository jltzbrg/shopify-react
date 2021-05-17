import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';

function Cart() {
  const { isCartOpen, closeCart } = useContext(ShopContext);
  return (
    <>
      <Drawer isOpen={isCartOpen} placement='right' onClose={closeCart}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Shopping Cart</DrawerHeader>
            <DrawerBody>This is your cart</DrawerBody>
            <DrawerFooter>
              <Button>Checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default Cart;
