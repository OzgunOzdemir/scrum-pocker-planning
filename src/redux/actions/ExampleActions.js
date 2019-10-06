const UPDATE_EXAMPLE = 'UPDATE_EXAMPLE';

const updateExample = (newUser) => {
    return {
        type: 'UPDATE_EXAMPLE',
        payload: {
            data: newUser
        }
    }

}

export { updateExample, UPDATE_EXAMPLE };