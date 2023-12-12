import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya19.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya19.title'),
          children: [{
            link: 'i-i-s-kursovaya19-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-клиент-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya19-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-расчет-ост-врем-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-kursovaya19-перечень-услуг-l',
            caption: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-перечень-услуг-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-перечень-услуг-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-kursovaya19-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-дир-отд-по-раб-с-кл-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya19-договор-l',
            caption: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-договор-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya19-затр-время-l',
            caption: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya19.i-i-s-kursovaya19-затр-время-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})