import { useState } from 'react';
import { toast } from 'react-toastify';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FavoriteButton({ productId }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = async () => {
        // Appel à l'API pour ajouter ou retirer l'article des favoris
        const response = await addToFavoritesOrRemove(productId);

        if (response.success) {
            setIsFavorite(!isFavorite);
            // Afficher un toast en fonction de l'état actuel
            toast.success(
                isFavorite
                    ? 'Retiré des favoris'
                    : 'Ajouté aux favoris',
                {
                    position: toast.POSITION.TOP_RIGHT,
                }
            );
        } else {
            toast.error('Une erreur s\'est produite', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    return (
        <button onClick={toggleFavorite}>
        {isFavorite ? (
            <FavoriteIcon className="absolute heart-icon hover:heart-icon-red" />
        ) : (
            <FavoriteBorderIcon className=" empty" />
        )}
    </button>
    );
}