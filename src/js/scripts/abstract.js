/**
 * Class Abstract
 */
class Abstract {
    /**
     * Function for throwing error if method was not implemented
     *
     * @param method Method name
     *
     * @returns {VoidFunction}
     *
     * @throws Error
     */
    implementMethod(method) {
        throw new Error('You have to implement the method ' + method + '!');
    }
}

export default Abstract;
