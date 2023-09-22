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
    await connectToDB();

    const { lastName, firstName, email, password } = await req.json();
    //validate the schema

    const { error } = schema.validate({ lastName, firstName, email, password });

    if (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {
        //check if the user is exists or not

        const isUserAlreadyExists = await User.findOne({ email });

        if (isUserAlreadyExists) {
            return NextResponse.json({
                success: false,
                message: "Ce nom d'utilisateur existe déja. Veuillez en choisir un autre.",
            });
        } else {
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
                    message: "Compte créer avec succès.",
                });
            }
        }
    } catch (error) {
        console.log("Error while new user registration. Please try again");

        return NextResponse.json({
            success: false,
            message: "Oops ... quelque chose s\est mal passé ! Veuillez réessayer plus tard.",
        });
    }
}