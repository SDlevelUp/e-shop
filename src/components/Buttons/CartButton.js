import { useState } from 'react';
import { toast } from 'react-toastify';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function CartButton({ productId }) {
    const [isInCart, setIsInCart] = useState(false);

    const addToCart = async () => {
        // Appel à l'API pour ajouter l'article au panier
        const response = await addToCartFunction(productId);

        if (response.success) {
            setIsInCart(true);
            // Afficher un toast en cas de succès
            toast.success('Ajouté au panier', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            // Afficher un toast en cas d'erreur
            toast.error('Une erreur s\'est produite', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <button onClick={addToCart} disabled={isInCart}>
            {isInCart ? <ShoppingBagOutlinedIcon /> : <ShoppingBagOutlinedIcon />}
        </button>
    );
}