pimcore.registerNS("pimcore.plugin.PimcoreNtrigaStyleBundle");

pimcore.plugin.PimcoreNtrigaStyleBundle = Class.create({

    initialize: function () {
        Ext.Loader.setPath('PimcoreNtrigaStyleBundle.component', '/bundles/pimcorentrigastyle/js/pimcore');

        document.addEventListener(pimcore.events.preMenuBuild, this.preMenuBuild.bind(this));
        document.addEventListener(pimcore.events.pimcoreReady, this.pimcoreReady.bind(this));
    },

    preMenuBuild: function (e) {
        let menu = e.detail.menu;

        let items = [];

        menu.PimcoreNtrigaStyleBundle = {
            label: ('Ntriga'),
            iconCls: 'bundle_ntriga_pimcore_style_nav_icon_ntriga',
            priority: 70,
            items: items,
            shadow: false,
            handler: this.openPimcoreNtrigaStyleBundle,
            noSubmenus: true,
            cls: "pimcore_navigation_flyout"
        };
    },

    openPimcoreNtrigaStyleBundle: function (e){

        let tabPanel = Ext.getCmp("pimcore_panel_tabs");
        let existingTab = tabPanel.items.findBy(function (tab){
            return tab.id === "ntriga_pimcore_style_bundle_datajane";
        });
        if (existingTab){
            tabPanel.setActiveTab(existingTab);
            return;
        }

        // If no tab exists, create a new one
        var customTab = tabPanel.add({
            id: "ntriga_pimcore_style_bundle_datajane",
            title: "Data Jane",
            closable: true,
            iconCls: "bundle_ntriga_pimcore_style_nav_icon_ntriga",
            cls: 'dj-wrapper',
            items: [
                {
                    xtype: 'datajane',
                }
            ]
        });

        // Activate the newly added tab
        tabPanel.setActiveTab(customTab);
    },

    pimcoreReady: function (e) {
        parent.pimcore.object.tags.wysiwyg.defaultEditorConfig = window.customConfig;
    }
});

var PimcoreNtrigaStyleBundlePlugin = new pimcore.plugin.PimcoreNtrigaStyleBundle();
