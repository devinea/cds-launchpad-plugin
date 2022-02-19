import * as express from 'express';
import cds from '@sap/cds';
import {cds_launchpad_plugin} from '../../../' ;

//const cds_launchpad_plugin = require('../../..');

module.exports = cds.server

const bootstrap = ( app: typeof express.application ): void => {
    const handler = new cds_launchpad_plugin();

    app.use(handler.setup({theme: 'sap_horizon', version: '1.97.0'}))    
};

cds.once('bootstrap', bootstrap);