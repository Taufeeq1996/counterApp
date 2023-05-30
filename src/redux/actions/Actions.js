export const increaseCount = () => {
    return {
        type: 'count/increased',
    }
};

export const decreaseCount = () => {
    return {
        type: 'count/decreased',
    }
}

export const resetCount = () => {
    return {
        type: 'reset/count',
    }
}