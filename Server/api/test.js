const express = require('express')
const helmet = require('helmet')

const dotEnv = require('dotenv')

const { TEST, STAGING, PRODUCTION, ON_DEVELOPMENT } = require('./constants/environments/index')

// setup env variables

dotEnv.config()

const app = express()

// Database connectivity

app.set('trust proxy', 1)
app.use(
    helmet({
        permittedCrossDomainPolicies: {
            permittedPolicies: 'none'
        },
        referrerPolicy: {
            policy: 'no-referrer'
        }
    })
)

const { NODE_ENV } = process.env

if (NODE_ENV == PRODUCTION || NODE_ENV == STAGING || NODE_ENV == TEST)
    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                defaultRrc: ["'self'"]
            }
        })
    )

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Allow cors in ON-DEVELOPMENT enviroments
const cors = NODE_ENV === ON_DEVELOPMENT;

module.exports = app;


