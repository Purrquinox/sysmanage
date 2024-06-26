package main

import (
	"github.com/infinitybotlist/sysmanage-web/plugins/actions"
	"github.com/infinitybotlist/sysmanage-web/plugins/authdp"
//	"github.com/infinitybotlist/sysmanage-web/plugins/deploy"
	"github.com/infinitybotlist/sysmanage-web/plugins/frontend"
	"github.com/infinitybotlist/sysmanage-web/plugins/logger"
	"github.com/infinitybotlist/sysmanage-web/plugins/nginx"
	"github.com/infinitybotlist/sysmanage-web/plugins/persist"
	"github.com/infinitybotlist/sysmanage-web/plugins/systemd"
	"github.com/infinitybotlist/sysmanage-web/types"
)

var meta = types.ServerMeta{
	Port:          29393,
	ConfigVersion: 1,
	Plugins: []types.Plugin{
		{
			ID:      authdp.ID,
			Init:    authdp.InitPlugin,
			Preload: authdp.Preload,
		},
		/*{
			ID: "authdummy",
			Init: func(c *types.PluginConfig) error {
				state.AuthPlugins = append(state.AuthPlugins, "authdummy")
				return nil
			},
		},*/
		{
			ID:   nginx.ID,
			Init: nginx.InitPlugin,
			Frontend: types.Provider{
				Provider: "@core",
			},
		},
		{
			ID:   systemd.ID,
			Init: systemd.InitPlugin,
			Frontend: types.Provider{
				Provider: "@core",
			},
		},
		{
			ID:   actions.ID,
			Init: actions.InitPlugin,
			Frontend: types.Provider{
				Provider: "@core",
			},
		},
		/*{
			ID:   deploy.ID,
			Init: deploy.InitPlugin,
			Frontend: types.Provider{
				Provider: "@core",
			},
		},*/
		// Frontend has no frontend, it is a backend plugin
		{
			ID:   frontend.ID,
			Init: frontend.InitPlugin,
		},
		// Example of a custom plugins
		{
			ID:   logger.ID,
			Init: logger.InitPlugin,
		},
		{
			ID:   persist.ID,
			Init: persist.InitPlugin,
		},
	},
	Frontend: types.FrontendConfig{
		FrontendProvider: types.Provider{
			Provider: "frontend",
		},
		ComponentProvider: types.Provider{
			Provider: "@core",
		},
		CorelibProvider: types.Provider{
			Provider: "@core",
		}, // Use a custom corelib provider if you want to modify the corelib
		ExtraFiles: map[string]string{
			"frontend/src/lib/images":          "$lib/images",
			"frontend/src/lib/images/logo.png": "static/favicon.png",
		},
	},
}
