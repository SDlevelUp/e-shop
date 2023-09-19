import connectToDB from "@/database";
import User from "@/models/user";
import { compare } from "bcryptjs";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import prompt from "prompt-sync";

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
    await connectToDB();

    const { email } = await req.json();

    // Utilisation de prompt-sync pour obtenir le mot de passe sans affichage
    const getPassword = prompt({ hideEchoBack: true });
    const password = getPassword("Mot de passe : ");

    const { error } = schema.validate({ email, password });

    if (error) {
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return NextResponse.json({
                success: false,
                message: "Aucun compte n'a été trouvé avec cet e-mail !",
            });
        }

        const checkPassword = await compare(password, checkUser.password);
        if (!checkPassword) {
            return NextResponse.json({
                success: false,
                message: "Mot de passe incorrect. Veuillez réessayer !",
            });
        }

        const token = jwt.sign(
            {
                id: checkUser._id,
                email: checkUser?.email,
                role: checkUser?.role,
            },
            "default_secret_key",
            { expiresIn: "1d" }
        );

        const finalData = {
            token,
            user: {
                email: checkUser.email,
                name: checkUser.name,
                _id: checkUser._id,
                role: checkUser.role,
            },
        };

        return NextResponse.json({
            success: true,
            message: "Connexion réussie!",
            finalData,
        });
    } catch (e) {
        console.log("Une erreur est survenue lors de votre connexion. Veuillez réessayer plus tard.");

        return NextResponse.json({
            success: false,
            message: "Quelque chose ne va pas ! Veuillez réessayer plus tard.",
        });
    }
}