// Parse Joi generated error object
export default function ParseError(error){
    // Parsed object
    const parsedObj = {}

    // Iterate over the error objects from the main Joi error
    for (const validationError of error)
    {
        // Iterate over the validation error path to check if all the required keys exists on the parsed object
        let path = validationError.path
        let currObj= parsedObj
        let key
        for (let depth = 0; depth<path.length; depth++){
            // Get the path key
            key = path[depth]

            // Check if the path object for the given key exists
            if (!currObj[key])
                path[key] = depth<path.length-1?{}:[]

            path = path[key]
        }

        // Push the error
        currObj.push(validationError.message)
    }

    return parsedObj
}