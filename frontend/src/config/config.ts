import {ConfigType} from "../types/config.type";

const config: ConfigType = {
    api: 'http://localhost:3000/api',
    date: {
        today: 'today',
        week: 'week',
        month: 'month',
        year: 'year',
        all: 'all',
        interval: 'interval',
    }
}
export default config;