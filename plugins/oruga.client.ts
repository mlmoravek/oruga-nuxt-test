
import Oruga from '@oruga-ui/oruga-next';


// import Oruga Bootstrap theme config
import { bootstrapConfig } from '@oruga-ui/theme-bootstrap'

// import Bootstrap and Oruga styling
import '@oruga-ui/theme-bootstrap/dist/bootstrap.css'

export default defineNuxtPlugin((nuxtApp) => {
// this is the equivalent of a normal functional plugin
nuxtApp.vueApp.use(Oruga, bootstrapConfig);
})