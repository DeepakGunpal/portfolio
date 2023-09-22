import { proxy } from 'valtio'

const state = proxy({
    activeTab: "/",
});

export default state