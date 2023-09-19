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
        id: 'lastName',
        type: 'text',
        placeholder: 'Nom',
        label: 'Nom*',
        componentType: 'input'
    },
    {
        id: 'firstName',
        type: 'text',
        placeholder: 'Prénom',
        label: 'Prénom*',
        componentType: 'input'
    },
    {
        id: 'birthday',
        type: 'date',
        placeholder: 'Date de naissance',
        label: 'Date de naissance',
        componentType: 'input'
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'Adresse e-mail',
        label: 'Adresse e-mail*',
        componentType: 'input',
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Mot de passe',
        label: 'Mot de passe*',
        componentType: 'input'
    }
]

export const loginFormControls = [
    {
        id: 'email',
        type: 'email',
        placeholder: 'Adresse e-mail',
        label: 'Adresse e-mail*',
        componentType: 'input'
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Mot de passe',
        label: 'Mot de passe*',
        componentType: 'input'
    }
]