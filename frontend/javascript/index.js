import "../styles/index.scss"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /.js$/)
application.load(definitionsFromContext(context))

import Swup from 'swup';
const swup = new Swup;

console.info("Bridgetown is loaded!")
