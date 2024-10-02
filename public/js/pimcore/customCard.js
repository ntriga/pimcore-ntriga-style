Ext.define('PimcoreNtrigaStyleBundle.component.customCard', {
    extend: 'Ext.panel.Panel',
    xtype: 'customcard',
    cls: 'dj-widget',
    bodyPadding: 10,
    layout: 'vbox',
    defaults: {
        margin: '0 0 10 0'
    },
    initComponent: function() {

        const me = this;

        this.myCheckboxLabel = Ext.create('Ext.form.Label', {
            text: 'Actief',
            cls: 'dj-custom-checkbox-label'
        });

        let labelText = this.toggleChecked ? 'actief' : 'inactief';
        if (this.underConstruction){
            labelText = 'under construction';
        }
        this.myCheckboxLabel.setText(labelText);

        if (this.toggleChecked){
            this.myCheckboxLabel.addCls('dj-active');
        }

        if (!this.toggleChecked){
            this.addCls('dj-disabled');
        }

        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    width: '100%',
                    cls: 'dj-widget-intro',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            cls: 'dj-widget-intro__img',
                            width: 60,
                            height: 60,
                            items: [
                                {
                                    xtype: 'image',
                                    src: this.iconSrc,
                                    width: '100%'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    width: '100%',
                                    items: [
                                        {
                                            xtype: 'component',
                                            html: '<h5>' + this.widgetTopTitle + '</h5>',
                                            flex: 1
                                        },
                                        this.myCheckboxLabel,
                                        {
                                            xtype: 'checkbox',
                                            checked: this.toggleChecked,
                                            cls: 'dj-custom-checkbox',
                                            disabled: true,
                                        }
                                    ]
                                },
                                {
                                    xtype: 'component',
                                    html: '<h2>' + this.widgetTitle + '</h2>',
                                    width: '100%'
                                }

                            ]
                        }
                    ]
                },
                {
                    xtype: 'component',
                    width: '100%',
                    cls: 'dj-widget-info',
                    html: this.description,
                },
                {
                    xtype: 'button',
                    text: 'info en prijs',
                    itemId: 'moreInfoBtn',
                    cls: 'dj-info-button',
                    scale: 'large',
                    handler: function (){
                        if (me.infoLink){
                            window.open(me.infoLink, '_blank');
                        }
                    }
                }
            ],
        });



        this.callParent();
    },
});
