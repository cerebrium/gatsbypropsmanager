// storage object
var storageObject = {
    baseValue: 'hello, welcome to my module. not too complicated, but hopefully useful!'
}

// this is just a way to access an object outside of the current component for gatsby
exports.props = function(prop) {
    
    // if prop is an array of objects
    if (Array.isArray(prop)) {
        // grab the array of keys, then array of values... push them into the storage object

        // for each object in the array add the object to the overall object
        prop.forEach((ele, index) => {
            let thisKey = Object.keys(ele)
            let thisValue = Object.values(ele)
            storageObject[thisKey[0]] = thisValue
        })
    }

    // going to force user to throw objects into this function, then just push them into a larger object for retrieval
    if (typeof prop === 'object') {
        // after object check, can't allow arrays or null
        if (!Array.isArray(prop) && !null) {
            // check if the storage object contains the value yet, if it does send back the prop, else add it
            if (!storageObject.hasOwnProperty(Object.keys(prop)[0])) {
                let localKey = Object.keys(prop)[0]
                let localValue = Object.values(prop)[0]
                storageObject[localKey] = localValue
            } 
        } 
    } else {
        // retrieve props
        return storageObject[prop]
    }
}