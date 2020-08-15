import ElementUI from 'element-ui';
import './public/style/theme/index.css';
import './public/style/base.css';
import locale from 'element-ui/lib/locale/lang/en'
import'./public/style/markdown.less';
import directive from './libs/directive';

if (window.location.href.includes('/en/')) {
    import('./public/style/font-en.css');
} else {
    import('./public/style/font-cn.css');
}

export default ({
    Vue
}) => {
    Vue.directive('fade', directive.fade);
    let checkLoop = false;
    Vue.mixin({
        data () {
            return {
                i18n: {}
            }
        },
        created () {
            let pagesArr = [];
            if(!checkLoop){
                checkLoop = true;
                this.$sitePages.forEach(item => {
                    if(this.$lang === 'zh' && item.path.includes('/zh/')) {
                        pagesArr.push(item);
                    } else if(this.$lang === 'en' && !item.path.includes('/zh/')) {
                        pagesArr.push(item);
                    }
                })
                this.$sitePages = pagesArr;
                const originalPush = this.$router.push;
                this.$router.push = function push(location) {
                    return originalPush.call(this, location).catch(err => err);
                }
            }
            
            const locales = this.$site;
            if(this.$router){
                this.i18n = locales.themeConfig.locales[this.$lang].lang;
            }
            
        },
        methods : {
            resolvePath(path){
                if(path){
                    const targetLocale = this.$lang === "zh" ? "/zh" : "/en";
                    return targetLocale + path;    
                }
                
            }
        }
    })
    if (window.location.href.includes('/en/')) {
        Vue.use(ElementUI, {locale});
    } else {
        Vue.use(ElementUI);
    }
    
}