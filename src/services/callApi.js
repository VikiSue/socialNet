export const callApi = (data, data2) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(data, data2), 1500);
    });
};
