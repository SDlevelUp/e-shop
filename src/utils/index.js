export const navOptions = [
    {
        id: "home",
        label: "Accueil",
        path: "/"
    },
    {
        id: "productsMen",
        label: "Homme",
        path: "",
        hasSubMenu: true,
        subMenuItems: [
            {
                id: "qamis",
                label: "Qamis",
                path: "/homme/qamis"
            },
            {
                id: "sarwels",
                label: "Sarwels",
                path: "/homme/sarwels"
            },
            {
                id: "tshirts",
                label: "T-shirts Oversize",
                path: "/homme/t-shirts-oversize"
            }
        ]
    },
    {
        id: "productsWomen",
        label: "Femmes",
        path: "",
        hasSubMenu: true,
        subMenuItems: [
            {
                id: "abayas",
                label: "Abaya",
                path: "/femmes/vêtements/abaya",
                hasSubMenu: true,
            },
            {
                id: "khimars",
                label: "Khimars",
                path: "/femmes/khimars"
            },
            {
                id: "jilbabs",
                label: "Jilbab",
                path: "/femmes/jilbabs"
            },
            {
                id: "gloves",
                label: "Gants",
                path: "/femmes/gants"
            }
        ]
    },
    {
        id: "productsKids",
        label: "Enfants",
        path: "",
        hasSubMenu: true,
        subMenuItems: [
            {
                id: "kidsQamis",
                label: "Qamis",
                path: "/enfants/qamis"
            },
            {
                id: "kidsSarwels",
                label: "Sarwels",
                path: "/enfants/vêtements/sarwels"
            },
            {
                id: "kidsSets",
                label: "Ensembles",
                path: "/enfants/vêtements/ensembles"
            }
        ]
    },
    {
        id: "perfumes",
        label: "Parfums",
        path: "",
        hasSubMenu: true,
        subMenuItems: [
            {
                id: "muscs",
                label: "Muscs",
                path: "/parfums/muscs"
            },
            {
                id: "arabianOud",
                label: "Arabian Oud",
                path: "/parfums/arabian-oud"
            },
            {
                id: "indoorPerfumes",
                label: "Parfums d'intérieur",
                path: "/parfums/parfums-d-interieur"
            }
        ]
    },
    {
        id: "sizeGuide",
        label: "Guide des tailles",
        path: "/guide-des-tailles"
    }
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