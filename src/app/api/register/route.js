import connectToDb from '@/database';
import User from "@/models/user";
import Joi from "joi"; // Schema validation library
import { NextResponse } from "next/server"; // Handling HTTP Responses

// Defining the incoming data validation schema
const schema = Joi.object({
    name: Joi.string().required(), // Field "name" must be a required character string
    email: Joi.string().required(), // Field "email" must be a required character string
    password: Joi.string().min(8).required(), // Field "password" must be a required character string with at least 8 characters
    role: Joi.string().required(), // Field "role" must be a required character string
})

export const dynamic = 'force-dynamic';

// Asynchronous function that handles HTTP POST requests
export async function POST(req) {

    // Connect to MongoDB database    
    await connectToDb();

    // Extract data from incoming JSON request    
    const { name, email, password, role } = await req.json;

    // Validating data against the schema defined with Joi
    const { error } = schema.validate({ name, email, password, role });

    // If validation fails, return a JSON response with an error message
    if (error) {
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        }, { status: 400 });
    }
    try {
        // Checking if user already exists in database
        const isUserExist = await User.findOne({ email });

        // If the user exists, return a JSON response with an error message
        if (isUserExist) {
            return NextResponse.json({
                success: false,
                message: 'Cet email est déjà utilisé! Veuillez en choisir un autre.',
            });
        } else {
            // Password hashing with bcrypt
            const hashPassword = await bcrypt.hash(password, 12);

            // Creating a new user in the database
            const newUser = await User.create({
                name,
                email,
                password: hashPassword,
                role
            })

            // If user creation succeeds, return a success JSON response
            if (newUser) {
                return NextResponse.json({
                    success: true,
                    message: 'Votre compte a été créé avec succès!',
                }, { status: 201 });
            }
        }
    } catch (error) {
        console.log('Error in new user registration');

        // On unexpected error, return JSON response with generic error message
        return NextResponse.json({
            success: false,
            message: 'Oops! Quelque chose s\'est mal passé! Veuillez réessayer plus tard.',
        }, { status: 500 });
    }
}