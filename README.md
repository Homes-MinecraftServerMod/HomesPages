# Homes [![Build Status](https://travis-ci.org/Homes-MinecraftServerMod/Homes.svg?branch=master)](https://travis-ci.org/Homes-MinecraftServerMod/Homes)

[Commands](./commands) | [Permissions](./permissions) | [Configs](./configs)

Download : [Homes - Teleportation Plugin - Bukkit Plugins](https://dev.bukkit.org/projects/homes-teleportation-plugin)

- [日本語](./japanese/README.md)

## About Homes

The purpose of using Homes is to make simple move using commands and to set the respawn location. First, you use the setting command to set the place where you are location as the point called **home**. Then you can move to the set **home** using the command for movement. Also, if you dead, you can respawn to that **home**.

## Homes Features

### If you are default player

- You can set home and move to your set home with command
    - the default home
    - the named home
    - the player's home (_move only_)
    - the player's named home (_move only_)
- If you dead, you can respawn to your set home
- You can check the home list
- You can check the command list
- You can delete the home
- You can set your home private or public
- You can invite the other player to your home
- You can reload this plugin if you have admin permission

### If you are _administrator_ of Spigot server

- You can restrict several features by Homes' configuration file
    - the named home feature
    - the player's home feature
    - the respawn home feature
    - the update checking feature
    - the number of homes can be set
    - the private home feature
    - the invitation feature
    - the home display feature
    - the displayed language changing feature
- You can set fee for command execution by fee.json file
    - Vault and a Economy Plugin are required
- You can use some commands from your server console
    - help command
    - reload command
    - list command

## Features Coming Soon

- Delay to Teleport
- Useful commands for administrators
- Teleport to the last dead place
- User group setting
- Custom language templates

## Bug Report / Feature Request

I try my best to perform as many user tests as possible, but occasionally bugs do squeak through. If you have found a bug, or perhaps just have a feature request, please [create an issue on Github](https://github.com/Homes-MinecraftServerMod/Homes/issues)
