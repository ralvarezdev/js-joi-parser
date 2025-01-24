import ParseError from "./error.js";

// Validate and parse the request body using Joi
export default function Validate(body, schema){
    // Validate the request body
    const {error, validatedBody} = schema.validate(body);

    // Check if there is an error
    if (error) return [ParseError(error), false]

    // Return the validated body
    return [validatedBody, true]
}