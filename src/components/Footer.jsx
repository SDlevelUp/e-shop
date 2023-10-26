import Link from 'next/link';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (

        <footer className="bg-[white] dark:bg-[#c0bebe] mt-12">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-6 lg:py-8">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Informations</h2>
                        <ul className="text-black font-medium text-sm">
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    A propos
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Contactez-nous
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Conditions générales de ventes
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Mentions légales
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Questions fréquentes
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Retours & échanges
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Livraisons
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Les avis sur Abayaty
                                </Link>
                            </li>

                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Comment porter le hijab ?
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Ramadan 2024
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Mon compte</h2>
                        <ul className="text-black font-medium text-sm">
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Mes commandes
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Mes avoirs
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Mes adresses
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Mes informations personnelles
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="flex items-center group hover:text-white">
                                    <ChevronRightIcon className="text-black transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" />
                                    Mes bons de réductions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:flex-col flex flex-col ">
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                            Nous retrouver
                        </h2>
                        <div className="text-sm mb-4 flex items-start">
                            <PlaceIcon className="mr-3 w-7 h-7" />
                            <div>
                                <Link href="https://www.google.fr/maps/preview">
                                    <span>13 Avenue de la commune </span>
                                    <br />
                                    <span> 75008 Paris, FRANCE</span>
                                </Link>
                            </div>
                        </div>
                        <div className="text-sm mb-4 flex items-start">
                            <Link href="# ">
                                <PhoneIcon className="mr-3" />
                                +33 1 23 45 67 89
                            </Link>
                        </div>
                        <div className="text-sm flex items-start whitespace-normal">
                            <EmailIcon className="mr-3" />
                            <Link href="# ">
                                abayatypro@gmail.com
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Newsletter</h2>
                        <span className="text-sm text-black mb-4">
                            Inscrivez-vous à notre newsletter pour recevoir les dernières offres et actualités.
                        </span>
                        <div className="flex text-xs ">
                            <input
                                type="email"
                                placeholder="Votre adresse e-mail" 
                                className="w-full px-3 py-2 focus:outline-none bg-transparent border-black border-b-[1.5px] "
                            />
                            <button className="bg-black text-white px-4 py-2 ml-2 focus:outline-none">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </div>



                <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-black sm:text-center">© 2023 <Link href="#/"> Abayaty</Link>. Tout droits réservés.
                    </span>
                    <div className="flex mt-4 text-black space-x-5 sm:justify-center md:mt-0">
                        <Link href="https://www.facebook.com/">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>


                        <Link href="https://www.instagram.com/">
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M363.1 512H148.9C67.156 512 0 444.844 0 363.1V148.9C0 67.156 67.156 0 148.9 0h214.2C444.844 0 512 67.156 512 148.9v214.2C512 444.844 444.844 512 363.1 512zm0-446.2H148.9C87.45 65.8 65.8 87.45 65.8 148.9v214.2c0 61.45 21.65 83.1 83.1 83.1h214.2c61.45 0 83.1-21.65 83.1-83.1V148.9c0-61.45-21.65-83.1-83.1-83.1zM256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 217.6c-49.14 0-89.6-40.47-89.6-89.6s40.46-89.6 89.6-89.6 89.6 40.46 89.6 89.6-40.46 89.6-89.6 89.6zm128-265.6a12 12 0 0 1-12 12H140.6a12 12 0 0 1-12-12V52.6a12 12 0 0 1 12-12H372a12 12 0 0 1 12 12z"
                                    fillRule="currentColor"
                                />
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </Link>

                        <Link href="https://twitter.com/?lang=fr" className="text-black">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer >

    )
}