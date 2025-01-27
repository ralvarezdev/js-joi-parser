// Parse Joi generated error object
export default function ParseError(validationError){
    // Parsed object
    const parsedObj = {}

    // Iterate over the error objects from the main Joi error
    for (const details of validationError.details)
    {
        // Iterate over the validation error path to check if all the required keys exists on the parsed object
        let path = details.path
        let currObj= parsedObj
        let key
        for (let depth = 0; depth<path.length; depth++){
            // Get the path key
            key = path[depth]

            // Check if the path object for the given key exists
            if (!currObj[key])
                currObj[key] = depth<path.length-1?{}:[]

            currObj = currObj[key]
        }

        // Push the error
        currObj.push(details.message)
    }

    return parsedObj
}