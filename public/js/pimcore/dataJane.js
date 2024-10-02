Ext.define('pimcore.plugin.PimcoreNtrigaStyleBundle.view.DataJane', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.datajane',
    requires: [
        'PimcoreNtrigaStyleBundle.component.customCard',
        'Ext.layout.container.Table'
    ],
    xtype: 'layout-table',

    height: '100%',

    layout: {
        type: 'table',
        columns: 3,
        tableAttrs: {
            style: {
                width: '100%',
                margin: '15px'
            }
        }
    },

    scrollable: false,

    defaults: {
        bodyStyle: "",
        margin: '15px'
    },

    items: [
        {
            xtype: 'introcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/ntriga_ai_star.svg',
            introTitle: 'Noem mij maar Jane, <strong>Data Jane.</strong>',
            description: '<p><strong>Ik ben de <span class="hightlight">Ntriga AI tool</span>, meerbepaald een Data Intelligence systeem. Ik evolueer mee met de technologie.</strong> Je kan via mijn abonnementsformule jouw inhoud AI-driven verrijken en vertalen en dit op vlak van producttekst en -data, vertalingen, seo, social, marketingdoeleinden, enzomeer...</p>'
        },
        {
            xtype: 'customcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/icon-dashboard.png',
            widgetTopTitle: 'Widget 1',
            widgetTitle: 'Sync overzicht',
            underConstruction: false,
            toggleChecked: false,
            infoLink: 'https://ntriga.be/nl/contact',
            description: '<p><strong>Wat ik voor je kan doen</strong></p><ul>' +
                '<li>Overzicht van uw synchronisatie</li>' +
                '</ul>'
        },
        {
            xtype: 'customcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/icon-text.png',
            widgetTopTitle: 'Widget 2',
            widgetTitle: 'Productteksten',
            underConstruction: false,
            toggleChecked: false,
            infoLink: 'https://ntriga.be/nl/contact',
            description: '<p><strong>Wat ik voor je kan doen</strong></p><ul>' +
                    '<li>Korte omschrijving automatisch invullen</li>' +
                    '<li>Lange omschrijving automatisch invullen</li>' +
                '</ul>'
        },
        {
            xtype: 'customcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/icon-image.png',
            widgetTopTitle: 'Widget 3',
            widgetTitle: 'Productafbeeldingen',
            underConstruction: true,
            toggleChecked: false,
            infoLink: 'https://ntriga.be/nl/contact',
            description: '<p><strong>Wat ik voor je kan doen</strong></p><ul>' +
                '<li>Titel tag automatisch invullen</li>' +
                '<li>Alt tag automatisch invullen</li>' +
                '<li>Kleuren detecteren</li>' +
                '</ul>'
        },
        {
            xtype: 'customcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/icon-seo.png',
            widgetTopTitle: 'Widget 4',
            widgetTitle: 'SEO-wizard',
            underConstruction: true,
            toggleChecked: false,
            infoLink: 'https://ntriga.be/nl/contact',
            description: '<p><strong>Wat ik voor je kan doen</strong></p><ul>' +
                '<li>SEO titel automatisch invullen</li>' +
                '<li>SEO Omschrijving automatisch invullen</li>' +
                '<li>Meta-tags automatisch invullen</li>' +
                '<li>En dit op pagina- en productniveau</li>' +
                '</ul>'
        },
        {
            xtype: 'customcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/icon-social_media.png',
            widgetTopTitle: 'Widget 5',
            widgetTitle: 'Social media teksten',
            underConstruction: true,
            toggleChecked: false,
            infoLink: 'https://ntriga.be/nl/contact',
            description: '<p><strong>Wat ik voor je kan doen</strong></p><ul>' +
                '<li>OG Titel automatisch invullen</li>' +
                '<li>OG Omschrijving automatisch invullen</li>' +
                '<li>X (Twitter) Card automatisch invullen</li>' +
                '</ul>'
        },
        {
            xtype: 'customcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/icon-translate.png',
            widgetTopTitle: 'Widget 6',
            widgetTitle: 'AI Tolk',
            underConstruction: true,
            toggleChecked: false,
            infoLink: 'https://ntriga.be/nl/contact',
            description: '<p><strong>Wat ik voor je kan doen</strong></p><ul>' +
                '<li>Automatische vertalingen klaarzetten</li>' +
                '<li>Deze worden door jou goedgekeurd</li>' +
                '<li>En dit op pagina- en productniveau</li>' +
                '</ul>'
        },
        {
            xtype: 'customcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/icon-export.png',
            widgetTopTitle: 'Widget 7',
            widgetTitle: 'Export voor marketing doeleinden',
            underConstruction: true,
            toggleChecked: false,
            infoLink: 'https://ntriga.be/nl/contact',
            description: '<p><strong>Wat ik voor je kan doen</strong></p><ul>' +
                '<li>Exporttool om producten en -data in jouw off- en online marketingtools in te zetten</li>' +
                '<li>Keuze tussen verschillende exportformaten</li>' +
                '</ul>'
        },
        {
            xtype: 'customcard',
            iconSrc: '/bundles/pimcorentrigastyle/img/icons/icon-personal.png',
            widgetTopTitle: 'Widget 8',
            widgetTitle: '(Hyper)Personalisatie',
            underConstruction: true,
            toggleChecked: false,
            infoLink: 'https://ntriga.be/nl/contact',
            description: '<p><strong>Wat ik voor je kan doen</strong></p><ul>' +
                '<li>Voorstellen van producten in interesseveld</li>' +
                '<li>Automatische e-mailings</li>' +
                '<li>Gepersonaliseerde content push</li>' +
                '</ul>'
        },
    ]

});