export const navOptions = [
    {
        id: "home",
        label: "Accueil",
        path: "/"
    },
    {
        id: "listing",
        label: "Tout nos produits",
        path: "/produit/listing/tout-les-produits"
    },
    {
        id: "listingMen",
        label: "Hommes",
        path: "/produit/listing/mode-hommes"
    },
    {
        id: "listingWomen",
        label: "Femmes",
        path: "/produit/listing/mode-femmes"
    },
    {
        id: "listingKids",
        label: "Enfants",
        path: "/produit/listing/mode-enfants"
    },
]

export const registrationFormControls = [
    {
        id: 'name',
        type: 'text',
        placeholder: 'Nom',
        label: 'Entrez votre nom',
        componentType: 'input'
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'Email',
        label: 'Renseignez une adresse mail valide',
        componentType: 'input'
    },
    {
        id: 'password',
        type: 'text',
        placeholder: 'Mot de passe',
        label: 'Choisissez un mot de passe',
        componentType: 'input'
    },
]

export const loginFormControls = [
    {
        id: 'email',
        type: 'email',
        placeholder: 'Email',
        label: 'Votre email',
        componentType: 'input'
    },
    {
        id: 'password',
        type: 'text',
        placeholder: 'Mot de passe',
        label: 'Votre mot de passe',
        componentType: 'input'
    }
]