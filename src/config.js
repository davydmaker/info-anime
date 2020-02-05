import { createContext } from 'react';

const Config = createContext({
    estadoMenu: false,
    setEstadoMenu: () => {}
});

export default Config