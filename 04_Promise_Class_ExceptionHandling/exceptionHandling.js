// logic error 
function calcuate() {
    try {
        var x = 10;
        var y = 0;
        var z = x / y; // error
        var w = x % y;
        var h = y % y;
        var arr = [1]
        console.log("The result is: ", arr[2]);
        x.map(x => x.toString())
    } catch (e) {
        console.log("Error: " + e.message);
        throw new Error("an error occurred: " + e.message);
    }
}
try {
    calcuate()
} catch (e) {
    console.log("The result is: " + e);
}



// Basic try-catch
try {
    // Code that may throw an error
    throw new Error("An error occurred");
} catch (error) {
    console.error(error.message);
}

// Try-catch-finally
try {
    throw new Error("Operation failed");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("This always runs");
}


// Catching specific errors
try {
    throw new TypeError("Invalid type");
} catch (error) {
    if (error instanceof TypeError) {
        console.error("Type error:", error.message);
    } else {
        console.error("Other error:", error.message);
    }
}

// Nested try-catch
try {
    try {
        throw new Error("Inner error");
    } catch (innerError) {
        console.error("Inner catch:", innerError.message);
        throw new Error("Outer error");
    }
} catch (outerError) {
    console.error("Outer catch:", outerError.message);
}



class UserNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = "UserNotFoundException";
    }
}
console.log("********************************")
try {
    // Code that may throw an error
    var user = null;
    if(!user) {
        throw new UserNotFoundException("An error occurred");
    }
} catch (error) {
    console.error(error.message);
}