import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import connectToDB from "@/database";
import User from "@/models/user";
import Joi from "joi";
import jwt from "jsonwebtoken";

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
    await connectToDB();

    const { email, password } = await req.json();

    const { error } = schema.validate({ email, password });

    if (error) {
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        }, { status: 400 });
    }

    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return NextResponse.json({
                success: false,
                message: "Cet e-mail n'existe pas ! Veuillez réessayer avec une autre adresse e-mail",
            }, { status: 401 });
        }

        const checkPassword = await compare(password, checkUser.password);
        if (!checkPassword) {
            return NextResponse.json({
                success: false,
                message: "Mot de passe incorrect ! Veuillez réessayer plus tard",
            }, { status: 401 });
        }

        const token = jwt.sign(
            {
                id: checkUser._id,
                email: checkUser?.email,
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
            },
        };

        return NextResponse.json({
            success: true,
            message: "Connexion réussie!",
            finalData,
        });
    } catch (e) {
        console.log("Erreur lors de la connexion. Essayez plus tard");

        return NextResponse.json({
            success: false,
            message: "Oops ... quelque chose s'est mal passé ! Veuillez réessayer plus tard",
        }, { status: 500 });
    }
};