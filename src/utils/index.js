export const links = [
    {
        "id": 1,
        "name": "Nouveautes",
        "submenu": true,
        "path": "/homme/qamis/emirati",
        "sublinks": []
    },
    {
        "id": 3,
        "name": "Homme",
        "submenu": true,
        "sublinks": [
            {
                "id": 21,
                "Head": "T-Shirt oversize",
                "sublink": [

                    { "id": 522, "name": "Manches mi-longues", "path": "/homme/t-shirt-oversize/manches-mi-longues" },
                    { "id": 575, "name": "Manches 3/4", "path": "/homme/t-shirt-oversize/manches-3/4" },
                    { "id": 545, "name": "Col montant", "path": "/homme/t-shirt-oversize/col-montant" },
                    { "id": 879673, "name": "Col rond", "path": "/homme/t-shirt-oversize/col-rond" },
                ]
            },
            {
                "id": 4,
                "Head": "Qamis",
                "sublink": [
                    { "id": 5, "name": "Emirati", "path": "/homme/qamis/emirati" },
                    { "id": 6, "name": "Saoudien", "path": "/homme/qamis/saoudien" },
                    { "id": 7, "name": "Omani", "path": "/homme/qamis/omani" },
                    { "id": 8, "name": "Sultan", "path": "/homme/qamis/sultan" },
                ]
            },
            {
                "id": 9,
                "Head": "Ensemble",
                "sublink": [
                    { "id": 10, "name": "Jabador", "path": "/homme/jabador" },
                    { "id": 11, "name": "Casual", "path": "/homme/casual" },
                    { "id": 12, "name": "Sarwels", "path": "/homme/sarwels" },
                    { "id": 13, "name": "Sportswear", "path": "/homme/sportswear" },
                ]
            },

        ]
    },
    {
        "id": 33,
        "name": "Femmes",
        "submenu": true,
        "sublinks": [
            {
                "id": 46,
                "Head": "Abaya",
                "sublink": [
                    { "id": 47, "name": "Abaya saoudienne", "path": "/femme/abaya/saoudienne" },
                    { "id": 48, "name": "Abaya allaitement", "path": "/femme/abaya/allaitement" },
                    { "id": 49, "name": "Abaya papillon", "path": "/femme/abaya/papillon" },
                    { "id": 50, "name": "Abaya manches bouffantes", "path": "/femme/abaya/manches-bouffantes" },
                    { "id": 51, "name": "Abaya manches évasées", "path": "/femme/abaya/manches-evasees" }
                ]
            },
            {
                "id": 52,
                "Head": "Jilbab",
                "sublink": [
                    { "id": 53, "name": "Jilbab une pièce", "path": "/femmes/jilbab-une-piece" },
                    { "id": 54, "name": "Jilbab deux pièces", "path": "/femmes/jilbab-deux-piece" },
                    { "id": 55, "name": "Jilbab manches élasthanes", "path": "/femmes/jilbab-trois-piece" },
                    { "id": 56, "name": "Jilbab soie de médine", "path": "/femmes/jilbab-soie-de-medine" },
                ]
            },
            {
                "id": 58,
                "Head": "Khimars - Cape",
                "sublink": [
                    { "id": 60, "name": "Khimar jazz", "path": "/homme/khimar-jazz" },
                    { "id": 61, "name": "Khimar un voile", "path": "/homme/khimar-un-voile" },
                    { "id": 59, "name": "Khimar soie de médine", "path": "/homme/khimar-soie-de-medine" },
                    { "id": 63, "name": "Cape nidah", "path": "/homme/cape/nidah" }
                ]
            }
        ]
    },
    {
        "id": 64,
        "name": "Enfants",
        "submenu": true,
        "sublinks": [
            {
                "id": 787,
                "Head": "Jeux",
                "sublink": [
                    {
                        "id": 97375,
                        "name": "Puzzle",
                        "path": "/enfants/jeux/puzzle"
                    }
                ]
            },
        ]
    },
    {
        "id": 97,
        "name": "Parfums",
        "submenu": true,
        "sublinks": [
            {
                "id": 98,
                "Head": "Musc - Encens ",
                "sublink": []
            },
            {
                "id": 99,
                "Head": "Parfums de niche",
                "sublink": [
                    { "id": 100, "name": "Oud", "path": "/parfums-de-niche/oud" },
                    { "id": 104, "name": "Arabi", "path": "/parfums-de-niche/arabi" },
                    { "id": 102, "name": "Ahmed Al Maghribi", "path": "/parfums-de-niche/ahmed-al-maghribi" },
                    { "id": 103, "name": "Black Forest Al Ambra", "path": "/parfums-de-niche/black-forest-al-ambra" },
                    { "id": 145, "name": "Coffret à offrir", "path": "/parfums/coffrets" }
                ]
            },
        ]
    },
    {
        "id": 83,
        "name": "Bonbons halal",
        "submenu": true,
        "sublinks": [
            {
                "id": 99,
                "Head": false,
                "sublink": [
                    { "id": 400005, "name": "Bonbons vegan", "path": "/bonbons/bonbons-vegan" },
                    { "id": 40000, "name": "Bonbons en kilo", "path": "/bonbons-en-vrac" },
                    { "id": 40001, "name": "Sachet aïd", "path": "/bonbons/sachet-aïd" },
                ]
            },
        ]
    },
];

export const registrationFormControls = [
    {
        id: "lastName",
        type: "text",
        placeholder: "Votre nom",
        label: "Nom*",
        componentType: "input",
    },
    {
        id: "firstName",
        type: "text-name",
        placeholder: "Votre prénom",
        label: "Prénom*",
        componentType: "input",
    },
    {
        id: "email",
        type: "email",
        placeholder: "Votre adresse e-mail",
        label: "Votre adresse e-mail*",
        componentType: "input",
    },
    {
        id: "password",
        type: "password",
        placeholder: "Choisissez un mot de passe",
        label: "Mot de passe*",
        componentType: "input",

    },
]

export const loginFormControls = [
    {
        id: 'email',
        type: 'email',
        placeholder: 'Votre adresse e-maill',
        label: 'Votre adresse e-maill*',
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