let defaultSetting = {
    dashkitNavColor: 'default',
    dashkitShowPopover: false,
    dashkitSidebarSize: 'base',
    dashkitColorScheme: 'light',
    dashkitNavPosition: 'combo',
    'loglevel:webpack-dev-server': 'SILENT'
}

let dashkitNavColor = ['default', 'inverted', 'vibrant'];
let navColors = {
    'default': 'navbar-light',
    'inverted': 'navbar-dark',
    'vibrant': 'navbar-dark navbar-vibrant',
};
let dashkitNavPosition = ['combo', 'topnav', 'sidenav'];
let dashkitSidebarSize = ['base', 'small'];

let init = () => {
    _.forEach(defaultSetting, (val, key) => {
        localStorage.getItem(key) === null ? localStorage.setItem(key, val) : null;
    })
}

let initDefault = () => {
    resetDefault();
}

let resetDefault = () => {
    _.forEach(defaultSetting, (val, key) => {
        localStorage.setItem(key, val)
    })
}

let setSetting = (key, val) => {
    localStorage.setItem(key, val)
}

let getSetting = (key) => {
    return localStorage.getItem(key)
}

let checkSetting = (key) => {
    return localStorage.getItem(key) == defaultSetting[key]
}

let setting = {
    defaultSetting,
    navColors,
    initDefault,
    init,
    resetDefault,
    setSetting,
    getSetting,
    checkSetting
}


export default setting;
