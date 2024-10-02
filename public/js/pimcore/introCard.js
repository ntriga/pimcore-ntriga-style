Ext.define('PimcoreNtrigaStyleBundle.component.IntroCard', {
    extend: 'Ext.panel.Panel',
    xtype: 'introcard',
    cls: 'dj-intro',
    layout: 'vbox',
    defaults: {
        margin: '0 0 10 0'
    },
    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    width: '100%',
                    cls: 'dj-intro-title',
                    items: [
                        {
                            xtype: 'image',
                            src: this.iconSrc,
                            cls: 'dj-intro-title__img',
                            width: 80,
                            height: 80,
                        },
                        {
                            xtype: 'component',
                            layout: 'vbox',
                            html: '<h1>' + this.introTitle + '</h1>'
                        },
                    ]
                },
                {
                    xtype: 'component',
                    width: '100%',
                    html: this.description
                },
            ]
        });

        this.callParent();
    },
});
