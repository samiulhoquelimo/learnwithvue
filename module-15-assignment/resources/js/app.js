import {createApp, h} from 'vue'
import {createInertiaApp, router} from '@inertiajs/vue3'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import NProgress from 'nprogress'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .component('EasyDataTable', Vue3EasyDataTable)
            .mount(el)
    },
})

// Appear @ Route Start
router.on('start', () => {
    NProgress.start()
})


// Appear @ Route Finish
router.on('finish', () => {
    NProgress.done()
})
