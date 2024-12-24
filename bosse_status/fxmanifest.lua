fx_version "cerulean"
game "gta5"
lua54 'yes'

author "therealbosse"
description "https://discord.gg/D4Uuttsn4k"

client_scripts {
    'client.lua'
}

ui_page ("ui/index.html")

files {
    'ui/index.html',
    'ui/style.css',
    'ui/script.js'
}

shared_scripts {
    '@es_extended/imports.lua'
}