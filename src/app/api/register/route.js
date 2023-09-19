import connectToDb from '@/database';
import User from "@/models/user";
import Joi from "joi";
import bcrypt from "bcryptjs"; // Ajout de l'import de bcrypt
import { NextResponse } from "next/server";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(), // Validation de l'email
    password: Joi.string().min(8).required(),
});

export const dynamic = 'force-dynamic';

export async function POST(req) {
    await connectToDb();

    try {
        const { name, email, password } = await req.json();

        const { error } = schema.validate({ name, email, password });

        if (error) {
            return NextResponse.json({
                success: false,
                message: error.details[0].message,
            }, { status: 400 });
        }

        const isUserAlreadyExist = await User.findOne({ email });

        if (isUserAlreadyExist) {
            return NextResponse.json({
                success: false,
                message: 'Cet email est déjà utilisé! Veuillez en choisir un autre.',
            });
        } else {
            const hashPassword = await bcrypt.hash(password, 12);

            const newUser = await User.create({
                name,
                email,
                password: hashPassword,
            });

            if (newUser) {
                return NextResponse.json({
                    success: true,
                    message: 'Votre compte a été créé avec succès!',
                }, { status: 201 });
            }
        }
    } catch (error) {
        console.error('Error in new user registration:', error);

        return NextResponse.json({
            success: false,
            message: 'Oops! Quelque chose s\'est mal passé! Veuillez réessayer plus tard.',
        }, { status: 500 });
    }
}