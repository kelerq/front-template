const runtimeSystemVariables = (window as any)?._env_;

const config = {
    importercalcAPI: {
        // url: runtimeSystemVariables?.API_URL || 'http://importercalc.local',
        url: runtimeSystemVariables?.API_URL || 'http://192.168.1.9',
        // url: 'http://127.0.0.1:5000', // Url for test if you will run api locally from Visual Studio
        // webSocket: {
        //     hubUrl: 'hubs/notification',
        // },
    },
    language: runtimeSystemVariables?.LOCALE || 'pl-PL',
    downloadFileTimeOut: runtimeSystemVariables?.DOWNLOAD_FILE_TIMEOUT
        ? parseInt(runtimeSystemVariables.DOWNLOAD_FILE_TIMEOUT, 10)
        : 120000,
};
console.log('App configuration', config);
export default Object.freeze(config);

// PATTERN SINGLETON
