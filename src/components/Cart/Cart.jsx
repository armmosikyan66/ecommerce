import React from 'react';
import {Container, Typography, Button, Grid} from "@material-ui/core";
import useStyles from './styles'
import CartItem from './CartItem/'
import {Link} from 'react-router-dom'

const Cart = ({cart, handleEmptyCart, handleRemoveFromCart, handleUpdateCartQty}) => {
    const classes = useStyles()

    const EmptyCart = () => {
        return (
            <>
                <Typography variant="subtitle1">
                    You have no Item in your cart
                    <Link to="/" className={classes.link}> start adding some</Link>
                </Typography>
            </>
        );
    };

    const FillCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {
                        cart.line_items.map((item) => (
                            <Grid item xs={12} sm={4} key={item.id}>
                                <CartItem
                                    item={item}
                                    onUpdateCartQty={handleUpdateCartQty}
                                    onRemoveFromCart={handleRemoveFromCart}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button classes={classes.emptyButton} color="secondary" size="large" type="button" variant="container" onClick={handleEmptyCart}>
                            Empty cart
                        </Button>
                        <Button component={Link} to="/checkout" classes={classes.checkoutButton} color="primary" size="large" type="button" variant="container">
                            Checkout
                        </Button>
                    </div>
                </div>
            </>
        )
    }

    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div className={classes.toolBar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart/> : <FillCart/>}
        </Container>
    );
};

export default Cart;
