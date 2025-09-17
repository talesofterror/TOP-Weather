import { getReport } from "./apiCall.js"
import { elements } from "./elements.js"
import { hydrate } from "./hydrator.js"
import "./style.css"

hydrate(elements, await getReport("Philadelphia, PA", true))

