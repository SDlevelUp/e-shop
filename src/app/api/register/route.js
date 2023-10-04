import connectToDB from "@/database";
import User from "@/models/user";
import { hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";

const schema = Joi.object({
    lastName: Joi.string().required(),
    firstName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        await connectToDB();

        const { lastName, firstName, email, password } = await req.json();
        // Valider le schéma

        const { error } = schema.validate({ lastName, firstName, email, password });

        if (error) {
            return NextResponse.json({
                success: false,
                message: error.details[0].message,
            }, { status: 400 });
        }

        // Vérifier si l'utilisateur existe déjà

        const isUserAlreadyExists = await User.findOne({ email });

        if (isUserAlreadyExists) {
            return NextResponse.json({
                success: false,
                message: "Ce nom d'utilisateur existe déjà. Veuillez en choisir un autre.",
            }, { status: 401 });
        }

        const hashPassword = await hash(password, 12);

        const newlyCreatedUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
        });

        if (newlyCreatedUser) {
            return NextResponse.json({
                success: true,
                message: "Compte créé avec succès.",
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Échec de la création du compte.",
            }, { status: 500 });
        }
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur : ", error);

        return NextResponse.json({
            success: false,
            message: "Oops... quelque chose s'est mal passé ! Veuillez réessayer plus tard.",
        }, { status: 500 });
    }
}